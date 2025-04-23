import { StyleSheet, Text, View, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About This App</Text>
        <Text style={styles.text}>
          This PowerShell-inspired CV app presents professional information in a unique terminal-style interface. Navigate through different sections using PowerShell-like commands to view education, work experience, and skills.
        </Text>
        <Text style={styles.text}>
          Built with React Native and Expo, this app demonstrates creativity in presenting a traditional CV in a developer-friendly format.
        </Text>
        <Text style={styles.text}>
          Autor's web-site:{' '}
        </Text>
        <Text 
          style={[styles.text, styles.link]}
          onPress={() => Linking.openURL('https://ivanovdk-bc.netlify.app/')}
        >
          https://ivanovdk-bc.netlify.app/
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012456',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#4da6ff',
    marginTop: -12  // To compensate for the previous text's marginBottom
  }
});