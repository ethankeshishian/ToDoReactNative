import {connect} from 'react-redux';
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {addItem} from '../actions/addItem';
import {StyleSheet} from 'react-native';

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
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
}

const mapDispatchToProps = {
  addItem,
};
export default connect(null, mapDispatchToProps)(Submit);

const styles = StyleSheet.create({
  addItem: {
    // flex: 1,
    justifyContent: 'flex-end',
    // marginBottom: 36,
  },
  textBox: {
    borderColor: 'black',
    borderWidth: 1,
    height: 48,
  },
});
