import {connect} from 'react-redux';
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {addItem} from '../actions/addItem';

function Submit(props: any) {
  const [item, setItem] = useState('');

  function handleSubmit() {
    if (item !== '') {
      console.log('reached handlesubmit function');
      props.addItem(item);
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

const mapDispatchToProps = {
  addItem,
};
export default connect(null, mapDispatchToProps)(Submit);

import {StyleSheet} from 'react-native';

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
