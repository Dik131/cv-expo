import { useState, useRef } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View as RNView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Print from 'expo-print';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';

const DEFAULT_CV_DATA = {
  name: 'John Doe',
  title: 'Senior Software Engineer',
  age: 30,
  location: 'New York, USA',
  education: [
    {
      degree: 'Master of Computer Science',
      school: 'Stanford University',
      year: '2018-2020'
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'MIT',
      year: '2014-2018'
    }
  ],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Corp',
      period: '2020-Present',
      description: 'Leading development of cloud-native applications'
    },
    {
      role: 'Software Engineer',
      company: 'StartupX',
      period: '2018-2020',
      description: 'Full-stack development using React and Node.js'
    }
  ],
  skills: [
    'JavaScript/TypeScript',
    'React/React Native',
    'Node.js',
    'Python',
    'AWS',
    'Docker'
  ]
};

const COMMANDS = {
  'cv --help': 'Display available commands',
  'cv --name': 'Display name and title',
  'cv --education': 'Display education history',
  'cv --experience': 'Display work experience',
  'cv --skills': 'Display technical skills',
  'cv --all': 'Display complete CV in a formatted view',
  'edit --name <value>': 'Edit name (e.g., edit --name John Smith)',
  'edit --title <value>': 'Edit title (e.g., edit --title "Full Stack Developer")',
  'edit --location <value>': 'Edit location (e.g., edit --location "San Francisco, USA")',
  'edit --education': 'Add education entry (e.g., edit --education --degree "PhD" --school "Harvard" --year "2020-2023")',
  'edit --experience': 'Add experience entry (e.g., edit --experience --role "CTO" --company "Tech Inc" --period "2023-Present" --description "Leading tech strategy")',
  'edit --skills <value>': 'Add skill (e.g., edit --skills "React Native")',
  'clear': 'Clear terminal output',
  'clear cv': 'Reset CV to default values',
  'print': 'Print CV as PDF (web) or save as image (mobile)'
};

function CommandPrompt({ command }: { command: string }) {
  const parts = command.split(' ');
  return (
    <RNView style={styles.commandLine}>
      <Text style={styles.prompt}>PS C:\Users\Guest{'>'} </Text>
      {parts.map((part, index) => (
        <Text key={index} style={[
          styles.commandText,
          !part.startsWith('--') ? styles.commandYellow : styles.commandWhite
        ]}>
          {part}{index < parts.length - 1 ? ' ' : ''}
        </Text>
      ))}
    </RNView>
  );
}

function OutputBlock({ children }: { children: React.ReactNode }) {
  return <RNView style={styles.output}>{children}</RNView>;
}

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

export default function Terminal() {
  const [cvData, setCvData] = useState({ ...DEFAULT_CV_DATA });
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const terminalRef = useRef<RNView | null>(null);

  const parseEditCommand = (command: string) => {
    const parts = command.split('--').filter(Boolean);
    const result: Record<string, string> = {};
    
    parts.forEach(part => {
      const [key, ...values] = part.trim().split(' ');
      if (key && values.length > 0) {
        result[key] = values.join(' ').replace(/"/g, '');
      }
    });
    
    return result;
  };

  const executeCommand = async (command: string) => {
    let output: React.ReactNode;
    // Normalize command: remove extra spaces, invisible chars, normalize newlines
    let cmd = command.replace(/[\u200B-\u200D\uFEFF]/g, '')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase()
  // Normalize Unicode dashes (en/em) to double hyphens
  .replace(/[\u2012\u2013\u2014\u2015]+/g, '--');

    let matched = false;
    if (cmd.startsWith('cv')) {
      // Get everything after 'cv' and trim
      const flag = cmd.slice(2).trim();

      switch (flag) {
        case '--help':
          output = (
            <>
              <Text style={styles.outputText}>Available commands:</Text>
              {Object.entries(COMMANDS).map(([cmd, desc]) => (
                <Text key={cmd} style={styles.outputText}>
                  {cmd.padEnd(20)} - {desc}
                </Text>
              ))}
            </>
          );
          matched = true;
          break;

        case '--name':
          output = (
            <>
              <Text style={styles.outputText}>Name: {cvData.name}</Text>
              <Text style={styles.outputText}>Title: {cvData.title}</Text>
              <Text style={styles.outputText}>Location: {cvData.location}</Text>
            </>
          );
          matched = true;
          break;

        case '--education':
          output = cvData.education.map((edu, index) => (
            <RNView key={index} style={styles.section}>
              <Text style={styles.outputText}>{edu.degree}</Text>
              <Text style={styles.outputText}>{edu.school} | {edu.year}</Text>
            </RNView>
          ));
          matched = true;
          break;

        case '--experience':
          output = cvData.experience.map((exp, index) => (
            <RNView key={index} style={styles.section}>
              <Text style={styles.outputText}>{exp.role}</Text>
              <Text style={styles.outputText}>{exp.company} | {exp.period}</Text>
              <Text style={styles.outputText}>{exp.description}</Text>
            </RNView>
          ));
          matched = true;
          break;

        case '--skills':
          output = cvData.skills.map((skill, index) => (
            <Text key={index} style={styles.outputText}>• {skill}</Text>
          ));
          matched = true;
          break;

        case '--all':
          output = (
            <>
              <Text style={[styles.outputText, styles.sectionTitle]}>Personal Information</Text>
              <Text style={styles.outputText}>Name: {cvData.name}</Text>
              <Text style={styles.outputText}>Title: {cvData.title}</Text>
              <Text style={styles.outputText}>Location: {cvData.location}</Text>
              
              <Text style={[styles.outputText, styles.sectionTitle]}>Education</Text>
              {cvData.education.map((edu, index) => (
                <RNView key={index} style={styles.section}>
                  <Text style={styles.outputText}>{edu.degree}</Text>
                  <Text style={styles.outputText}>{edu.school} | {edu.year}</Text>
                </RNView>
              ))}
              
              <Text style={[styles.outputText, styles.sectionTitle]}>Experience</Text>
              {cvData.experience.map((exp, index) => (
                <RNView key={index} style={styles.section}>
                  <Text style={styles.outputText}>{exp.role}</Text>
                  <Text style={styles.outputText}>{exp.company} | {exp.period}</Text>
                  <Text style={styles.outputText}>{exp.description}</Text>
                </RNView>
              ))}
              
              <Text style={[styles.outputText, styles.sectionTitle]}>Skills</Text>
              {cvData.skills.map((skill, index) => (
                <Text key={index} style={styles.outputText}>• {skill}</Text>
              ))}
            </>
          );
          matched = true;
          break;

        default:
          output = (
            <Text style={styles.outputText}>
              Command not recognized. Type 'cv --help' to see available commands.
            </Text>
          );
          matched = true;
      }
    } else if (cmd === 'print') {
      if (Platform.OS === 'web') {
        // Web printing logic
        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                h1 { color: #333; }
                h2 { color: #666; margin-top: 20px; }
                .section { margin-bottom: 20px; }
                .item { margin-bottom: 10px; }
              </style>
            </head>
            <body>
              <h1>${cvData.name}</h1>
              <p>${cvData.title}</p>
              <p>${cvData.location}</p>
              
              <h2>Education</h2>
              ${cvData.education.map(edu => `
                <div class="section">
                  <div class="item">
                    <strong>${edu.degree}</strong><br>
                    ${edu.school} | ${edu.year}
                  </div>
                </div>
              `).join('')}
              
              <h2>Experience</h2>
              ${cvData.experience.map(exp => `
                <div class="section">
                  <div class="item">
                    <strong>${exp.role}</strong><br>
                    ${exp.company} | ${exp.period}<br>
                    ${exp.description}
                  </div>
                </div>
              `).join('')}
              
              <h2>Skills</h2>
              <ul>
                ${cvData.skills.map(skill => `<li>${skill}</li>`).join('')}
              </ul>
            </body>
          </html>
        `;

        try {
          await Print.printAsync({
            html: htmlContent,
          });
          output = <Text style={styles.outputText}>CV has been prepared for printing.</Text>;
        } catch (error) {
          output = <Text style={styles.outputText}>Error preparing CV for print. Please try again.</Text>;
        }
      } else {
        try {
          // Check if sharing is available
          const isSharingAvailable = await Sharing.isAvailableAsync();
          if (!isSharingAvailable) {
            output = <Text style={styles.outputText}>Sharing is not available on this device.</Text>;
            return;
          }

          // Capture the full terminal view
          const uri = await captureRef(terminalRef, {
            format: 'jpg',
            quality: 0.8,
            result: 'tmpfile',
            width: 1080,
            height: 1920,
            snapshotContentContainer: false
          });

          // Share the screenshot
          await Sharing.shareAsync(uri, {
            mimeType: 'image/jpeg',
            dialogTitle: 'Share your CV Terminal screenshot'
          });
          
          output = <Text style={styles.outputText}>Screenshot ready to share!</Text>;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          output = <Text style={styles.outputText}>Error capturing screenshot: {errorMessage}</Text>;
        }
      }
    } else if (cmd.startsWith('edit')) {
      const params = parseEditCommand(command);
      const newData = { ...cvData };

      if (params.name) {
        newData.name = params.name;
      } else if (params.title) {
        newData.title = params.title;
      } else if (params.location) {
        newData.location = params.location;
      } else if (params.education) {
        const newEducation = {
          degree: params.degree || '',
          school: params.school || '',
          year: params.year || ''
        };
        newData.education = [...newData.education, newEducation];
      } else if (params.experience) {
        const newExperience = {
          role: params.role || '',
          company: params.company || '',
          period: params.period || '',
          description: params.description || ''
        };
        newData.experience = [...newData.experience, newExperience];
      } else if (params.skills) {
        newData.skills = [...newData.skills, params.skills];
      }

      setCvData(newData);
      output = <Text style={styles.outputText}>CV updated successfully!</Text>;
    } else if (cmd === 'clear') {
      setCommandHistory([]);
      return;
    } else if (cmd === 'clear cv') {
      setCvData({ ...DEFAULT_CV_DATA });
      output = <Text style={styles.outputText}>CV has been reset to default values.</Text>;
    } else {
      output = (
        <Text style={styles.outputText}>
          Command not recognized. Type 'cv --help' to see available commands.
        </Text>
      );
    }

    setCommandHistory(prev => [...prev, { command, output }]);
  };

  const handleSubmit = () => {
  let output: React.ReactNode;
    if (currentCommand.trim()) {
      executeCommand(currentCommand);
      setCurrentCommand('');
    } else {
      output = (
        <Text style={styles.outputText}>
          Command not recognized. Type 'cv --help' to see available commands.
        </Text>
      );
    }
    // fallback for all other commands
    if (!output) {
      output = (
        <Text style={styles.outputText}>
          Command not recognized. Type 'cv --help' to see available commands.
        </Text>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNView ref={terminalRef} style={styles.container} collapsable={false}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.welcomeText}>
            Welcome to PowerShell CV Terminal{'\n'}
            Type 'cv --help' to see available commands.
          </Text>
          {commandHistory.map((entry, index) => (
            <RNView key={index}>
              <CommandPrompt command={entry.command} />
              <OutputBlock>{entry.output}</OutputBlock>
            </RNView>
          ))}
        </ScrollView>
        <RNView style={styles.inputWrapper}>
          <RNView style={styles.inputContainer}>
            <Text style={styles.path}>PS C:\Users\Guest{'>'}</Text>
            <TextInput
              style={styles.input}
              value={currentCommand}
              onChangeText={setCurrentCommand}
              onSubmitEditing={handleSubmit}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#666666"
              cursorColor="#FFFFFF"
              blurOnSubmit={false}
            />
          </RNView>
        </RNView>
      </RNView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012456',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
    paddingBottom: 32,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontFamily: 'monospace',
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 20,
  },
  commandLine: {
    flexDirection: 'row',
    marginVertical: 8,
    flexWrap: 'wrap',
  },
  prompt: {
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: 14,
  },
  commandText: {
    fontFamily: 'monospace',
    fontSize: 14,
  },
  commandYellow: {
    color: '#F9E64F',
  },
  commandWhite: {
    color: '#FFFFFF',
  },
  output: {
    marginLeft: 16,
    marginBottom: 16,
  },
  outputText: {
    color: '#FFFFFF',
    fontFamily: 'monospace',
    marginVertical: 2,
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  inputWrapper: {
    borderTopWidth: 1,
    borderTopColor: '#1E3E7B',
    backgroundColor: '#012456',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#012456',
  },
  path: {
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: 14,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#F9E64F',
    fontFamily: 'monospace',
    fontSize: 14,
    padding: 0,
    height: 20,
    backgroundColor: 'transparent',
  },
});