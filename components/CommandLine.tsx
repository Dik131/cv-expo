// CommandLine component: displays the decorative path and colored command
import React from 'react';
import { View as RNView, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface CommandLineProps {
  command: string;
  isInput?: boolean;
  inputProps?: TextInputProps;
  stylesOverride?: any; // Optional: to allow style injection if needed
}

const PATH = 'PS C:\\Users\\Guest>';

export const CommandLine: React.FC<CommandLineProps> = ({ command, isInput, inputProps, stylesOverride }) => {
  const parts = command.split(' ');
  return (
    <RNView style={[styles.commandLine, stylesOverride?.commandLine]}> 
      <Text style={[styles.prompt, stylesOverride?.prompt]}>{PATH} </Text>
      {isInput ? (
        <TextInput
          style={[styles.input, stylesOverride?.input]}
          value={command}
          {...inputProps}
          placeholder="Enter command..."
          placeholderTextColor="#aaa"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="done"
        />
      ) : (
        parts.map((part, idx) => (
          <Text
            key={idx}
            style={[
              styles.commandText,
              !part.startsWith('--') ? styles.commandYellow : styles.commandWhite,
              stylesOverride?.commandText,
              !part.startsWith('--') ? stylesOverride?.commandYellow : stylesOverride?.commandWhite
            ]}
          >
            {part}{idx < parts.length - 1 ? ' ' : ''}
          </Text>
        ))
      )}
    </RNView>
  );
};

const styles = StyleSheet.create({
  commandLine: {
    flexDirection: 'row',
    marginVertical: 8,
    flexWrap: 'wrap',
    alignItems: 'center',
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

export default CommandLine;
