import React from 'react';
import {Header} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {deleteAll} from '../actions/deleteAll';
import {connect} from 'react-redux';

function MainHeader(props: {deleteAll: Function}) {
  return (
    <Header
      containerStyle={styles.header}
      leftComponent={{icon: 'menu', color: '#FFF'}}
      centerComponent={{
        text: 'To-Do List',
        style: {color: '#FFF', fontSize: 32},
      }}
      rightComponent={{
        icon: 'delete',
        color: '#FFF',
        onPress: () => props.deleteAll(),
      }}
    />
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'maroon',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});

const mapDispatchToProps = {
  deleteAll,
};
export default connect(null, mapDispatchToProps)(MainHeader);
