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

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  Button,
  View,
  Animated,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';

// import // Header,
// // LearnMoreLinks,
// // Colors,
// // DebugInstructions,
// // ReloadInstructions,
// 'react-native/Libraries/NewAppScreen';

// declare const global: {HermesInternal: null | {}};

const App = () => {
  function Submit(props: any) {
    const [item, setItem] = useState('');

    function handleSubmit() {
      if (item !== '') {
        props.handleSubmit(item);
        setItem('');
      }
    }

    return (
      <View>
        <TextInput
          style={styles.addItem}
          onChangeText={(text) => setItem(text)}
          value={item}
          onSubmitEditing={handleSubmit}
        />
        <Button title="Add" onPress={handleSubmit} />
      </View>
    );
  }

  function Items(props: any) {
    const listData = props.data;
    const renderItem = (data: {
      item: {value: string};
      index: number;
      separators: object;
    }) => (
      <Animated.View>
        <TouchableHighlight style={styles.rowFront} underlayColor={'#AAA'}>
          <View>
            <Text>{data.item.value}</Text>
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
    const renderHiddenItem = () => (
      <View style={styles.rowBack}>
        <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
          <Text style={styles.backTextWhite}>Delete</Text>
        </View>
      </View>
    );

    const handleDelete = (rowKey: any) => {
      console.log('onLeftAction', rowKey);
    };
    //might not be necessary
    // const onSwipeValueChange = (swipeData) => {
    //   const {key, value} = swipeData;
    //   if (value < -Dimensions.get('window').width && !this.animationIsRunning) {
    //     this.animationIsRunning = true;
    //     Animated.timing(rowTranslateAnimatedValues[key], {
    //       toValue: 0,
    //       duration: 200,
    //       useNativeDriver: false,
    //     }).start(() => {
    //       const newData = [...listData];
    //       const prevIndex = listData.findIndex((item) => item.key === key);
    //       newData.splice(prevIndex, 1);
    //       setListData(newData);
    //       this.animationIsRunning = false;
    //     });
    //   }
    // };
    return (
      <>
        <SwipeListView
          disableRightSwipe
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-Dimensions.get('window').width}
          // onSwipeValueChange={onSwipeValueChange}
          useNativeDriver={false}
          onLeftAction={handleDelete}
          onRightAction={handleDelete}
        />
      </>
    );
  }

  //   const renderItem = (data: any) => (
  //     <Animated.View>
  //       {/* style={[
  //       //   styles.rowFrontContainer,
  //       //   {
  //       //     height: rowTranslateAnimatedValues[data.item.key].interpolate({
  //       //       inputRange: [0, 1],
  //       //       outputRange: [0, 50],
  //       //     }),
  //       //   },
  //       // ]}> */}
  //       <TouchableHighlight
  //         onPress={() => console.log('You touched me')}
  //         style={styles.rowFront}
  //         underlayColor={'#AAA'}>
  //         <View>
  //           <Text>I am {data.item.text} in a SwipeListView</Text>
  //         </View>
  //       </TouchableHighlight>
  //     </Animated.View>
  //   );

  //   const renderHiddenItem = () => (
  //     <View style={styles.rowBack}>
  //       <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
  //         <Text style={styles.backTextWhite}>Delete</Text>
  //       </View>
  //     </View>
  //   );

  //   return (
  //     <View style={styles.container}>
  //       <SwipeListView
  //         disableRightSwipe
  //         data={listData}
  //         renderItem={renderItem}
  //         renderHiddenItem={renderHiddenItem}
  //         rightOpenValue={-Dimensions.get('window').width}
  //         // onSwipeValueChange={onSwipeValueChange}
  //         useNativeDriver={false}
  //       />
  //     </View>
  //   );
  // }

  function MyListContainer() {
    const [list, setList] = useState([
      {value: 'Wash the dishes'},
      {value: 'Make my bed'},
    ]);

    function addItem(item: any) {
      const newItem = {value: item};
      setList([...list, newItem]);
      console.log('added');
    }

    return (
      <>
        <Items data={list} />
        <Submit handleSubmit={addItem} />
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainView}>
        <Text style={styles.title}>To-Do List:</Text>
        <ScrollView style={styles.scrollView}>
          {/* // contentInsetAdjustmentBehavior="automatic" */}
        </ScrollView>
        <MyListContainer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
  scrollView: {},
  addItem: {
    // justifyContent: 'flex-end',
    // alignContent: 'flex-end',
  },

  //from swipe list container
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
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

export default App;

{
  /* <Header /> */
}

{
  /* <button onSubmit={handleSubmit} /> */
}
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
