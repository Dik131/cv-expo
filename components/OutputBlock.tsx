// Displays output for terminal commands
import React from 'react';
import { View as RNView, StyleSheet } from 'react-native';

const OutputBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <RNView style={styles.outputBlock}>
    {children}
  </RNView>
);

const styles = StyleSheet.create({
  outputBlock: {
    backgroundColor: '#011b3a',
    borderRadius: 6,
    marginVertical: 4,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default OutputBlock;
