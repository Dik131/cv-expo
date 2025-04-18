// Holds the CommandPrompt input component
import React from 'react';
import { TextInput, View as RNView, StyleSheet } from 'react-native';

interface CommandPromptProps {
  command: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const CommandPrompt: React.FC<CommandPromptProps> = ({ command, onChange, onSubmit }) => (
  <RNView style={styles.promptContainer}>
    <TextInput
      style={styles.input}
      value={command}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      placeholder="Enter command..."
      placeholderTextColor="#aaa"
      autoCorrect={false}
      autoCapitalize="none"
      returnKeyType="done"
    />
  </RNView>
);

const styles = StyleSheet.create({
  promptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#1a2a4d',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
});

export default CommandPrompt;
