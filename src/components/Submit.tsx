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
  addItem: {
    // justifyContent: 'flex-end',
    // alignContent: 'flex-end',
  },
});
