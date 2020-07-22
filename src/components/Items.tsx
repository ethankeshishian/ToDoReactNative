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
