import {connect} from 'react-redux';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {addItem} from '../actions/addItem';

function Submit(props: {addItem: Function}) {
  const [item, setItem] = useState('');

  function handleSubmit() {
    if (item !== '') {
      props.addItem(item);
      setItem('');
    }
  }

  return (
    <View style={styles.addItem}>
      <TextInput
        style={styles.textBox}
        onChangeText={(text) => setItem(text)}
        placeholder="New task..."
        value={item}
        onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        activeOpacity={0.5}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = {
  addItem,
};
export default connect(null, mapDispatchToProps)(Submit);

const styles = StyleSheet.create({
  addItem: {
    // // flex: 1,
    // justifyContent: 'flex-end',
    // marginBottom: 36,
  },
  textBox: {
    borderColor: 'black',
    borderWidth: 1,
    height: 48,
  },
  button: {
    backgroundColor: 'maroon',
    justifyContent: 'center',
    height: 48,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
});
