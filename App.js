import React, { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView, useWindowDimensions, Platform } from 'react-native';
import AddPersonalInfo from './components/AddPersonalInfo';
import BlogLayout from './components/BlogLayout';
import ProfileLayout from './components/ProfileLayout';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [view, setView] = useState('addInfo');

  const { width } = useWindowDimensions();

  const buttonWidth = width / 2;

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <View style={[styles.buttonContainer, { width: buttonWidth }]}>
            <Button
              title="Add Info"
              onPress={() => setView('addInfo')}
              color="#007AFF"
            />
          </View>
          <View style={[styles.buttonContainer, { width: buttonWidth }]}>
            <Button
              title="Blog"
              onPress={() => setView('blog')}
              color="#007AFF"
            />
          </View>
        </View>
        {view === 'addInfo' && <AddPersonalInfo onSave={setPersonalInfo} />}
        {view === 'profile' && <ProfileLayout personalInfo={personalInfo} />}
        {view === 'blog' && <BlogLayout personalInfo={personalInfo} blogPosts={[]} />}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.select({
      ios: '#f8f8f8',
      android: '#e0e0e0',
    }),
  },
  nav: {
    flexDirection: 'row',
  },
  buttonContainer: {
    padding: 10,
  },
});

export default App;
