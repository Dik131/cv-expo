import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CV_DATA = {
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
  'cv --all': 'Display all CV information',
  'clear': 'Clear terminal output'
};

function CommandPrompt({ command }: { command: string }) {
  return (
    <View style={styles.commandLine}>
      <Text style={styles.prompt}>PS C:\Users\Guest{'>'} </Text>
      <Text style={styles.command}>{command}</Text>
    </View>
  );
}

function OutputBlock({ children }: { children: React.ReactNode }) {
  return <View style={styles.output}>{children}</View>;
}

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

export default function Terminal() {
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (command: string) => {
    let output: React.ReactNode;

    switch (command.trim().toLowerCase()) {
      case 'cv --help':
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
        break;

      case 'cv --name':
        output = (
          <>
            <Text style={styles.outputText}>Name: {CV_DATA.name}</Text>
            <Text style={styles.outputText}>Title: {CV_DATA.title}</Text>
            <Text style={styles.outputText}>Location: {CV_DATA.location}</Text>
          </>
        );
        break;

      case 'cv --education':
        output = CV_DATA.education.map((edu, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.outputText}>{edu.degree}</Text>
            <Text style={styles.outputText}>{edu.school} | {edu.year}</Text>
          </View>
        ));
        break;

      case 'cv --experience':
        output = CV_DATA.experience.map((exp, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.outputText}>{exp.role}</Text>
            <Text style={styles.outputText}>{exp.company} | {exp.period}</Text>
            <Text style={styles.outputText}>{exp.description}</Text>
          </View>
        ));
        break;

      case 'cv --skills':
        output = CV_DATA.skills.map((skill, index) => (
          <Text key={index} style={styles.outputText}>• {skill}</Text>
        ));
        break;

      case 'cv --all':
        output = (
          <>
            <Text style={styles.outputText}>Name: {CV_DATA.name}</Text>
            <Text style={styles.outputText}>Title: {CV_DATA.title}</Text>
            <Text style={styles.outputText}>Location: {CV_DATA.location}</Text>
            
            <Text style={[styles.outputText, styles.sectionTitle]}>Education:</Text>
            {CV_DATA.education.map((edu, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.outputText}>{edu.degree}</Text>
                <Text style={styles.outputText}>{edu.school} | {edu.year}</Text>
              </View>
            ))}
            
            <Text style={[styles.outputText, styles.sectionTitle]}>Experience:</Text>
            {CV_DATA.experience.map((exp, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.outputText}>{exp.role}</Text>
                <Text style={styles.outputText}>{exp.company} | {exp.period}</Text>
                <Text style={styles.outputText}>{exp.description}</Text>
              </View>
            ))}
            
            <Text style={[styles.outputText, styles.sectionTitle]}>Skills:</Text>
            {CV_DATA.skills.map((skill, index) => (
              <Text key={index} style={styles.outputText}>• {skill}</Text>
            ))}
          </>
        );
        break;

      case 'clear':
        setCommandHistory([]);
        return;

      default:
        output = (
          <Text style={styles.outputText}>
            Command not recognized. Type 'cv --help' to see available commands.
          </Text>
        );
    }

    setCommandHistory(prev => [...prev, { command, output }]);
  };

  const handleSubmit = () => {
    if (currentCommand.trim()) {
      executeCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Text style={styles.welcomeText}>
          Welcome to PowerShell CV Terminal{'\n'}
          Type 'cv --help' to see available commands.
        </Text>
        {commandHistory.map((entry, index) => (
          <View key={index}>
            <CommandPrompt command={entry.command} />
            <OutputBlock>{entry.output}</OutputBlock>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
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
        </View>
      </View>
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
  },
  prompt: {
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: 14,
  },
  command: {
    color: '#F9E64F',
    fontFamily: 'monospace',
    fontSize: 14,
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