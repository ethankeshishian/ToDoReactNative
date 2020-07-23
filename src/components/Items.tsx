import {connect} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import {
  Animated,
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {deleteItem} from '../actions/deleteItem';

function Items(props: any) {
  const listData = props.items;
  const renderItem = (data: any) => (
    <Animated.View>
      <TouchableHighlight style={styles.rowFront} underlayColor={'#AAA'}>
        <View>
          <Text style={styles.frontTextBlack}>{data.item.value}</Text>
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

  const handleDelete = (data: any) => {
    console.log('onLeftAction', data);
    props.deleteItem(data);
  };

  return (
    <>
      <SwipeListView
        disableRightSwipe
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        // rightOpenValue={-Dimensions.get('window').width}
        // onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
        // onRowDidOpen={onRowDidOpen}
        leftOpenValue={75}
        rightOpenValue={-150}
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        // onLeftAction={handleDelete}
        onRightAction={handleDelete}
        // onLeftActionStatusChange={handleDelete}
        // onRightActionStatusChange={handleDelete}
      />
    </>
  );
}

function mapStateToProps(state: any) {
  return {
    items: state.items,
  };
}
const mapDispatchToProps = {
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);

const styles = StyleSheet.create({
  //from swipe list container
  frontTextBlack: {
    fontSize: 32,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    // height: 75,
    minHeight: 75,
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
});
