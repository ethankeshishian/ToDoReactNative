/* eslint-disable no-lone-blocks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {MyListContainer} from './components/MyListContainer';
import {Header} from 'react-native-elements';

// import // Header,
// // LearnMoreLinks,
// // Colors,
// // DebugInstructions,
// // ReloadInstructions,
// 'react-native/Libraries/NewAppScreen';

// declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header
          containerStyle={styles.header}
          leftComponent={{icon: 'menu', color: '#000'}}
          centerComponent={{
            text: 'To-Do List',
            style: {color: '#000', fontSize: 32},
          }}
          rightComponent={{icon: 'delete', color: '#000'}}
        />
        {/* <Text style={styles.title}>To-Do List:</Text> */}
        <MyListContainer />
      </SafeAreaView>
    </>
  );
};

export default App;

{
  /* {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View> */
}

const styles = StyleSheet.create({
  // mainView: {
  //   display: 'flex',
  // },
  title: {
    textAlign: 'left',
    paddingLeft: 10,
    fontSize: 48,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1, // justifyContent: 'flex-end',
  },
  header: {
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  // scrollView: {},
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});
