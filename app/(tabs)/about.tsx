import { StyleSheet, Text, View, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import i18n from '../../i18n';

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{i18n.t('about.title')}</Text>
        <Text style={styles.text}>{i18n.t('about.text1')}</Text>
        <Text style={styles.text}>{i18n.t('about.text2')}</Text>
        <Text style={styles.text}>{i18n.t('about.text3')}</Text>
        <Text 
          style={[styles.text, styles.link]}
          onPress={() => Linking.openURL(i18n.t('about.website'))}
        >
          {i18n.t('about.website')}
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