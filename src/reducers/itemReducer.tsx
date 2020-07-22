let newKey = 1;
const initialState = {
  items: [
    {value: 'Wash the dishes', key: '0'},
    {value: 'Make my bed', key: '1'},
  ],
};
function reducer(state = initialState, action: {type: any; data: any}) {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('added item');
      newKey++;
      let newKeyString = newKey.toString();
      return {
        ...state,
        items: [...state.items, {value: action.data, key: newKeyString}],
      };
    case 'DELETE_ITEM':
      const newData = [...state.items];
      const prevIndex = state.items.findIndex(
        (item) => item.key === action.data,
      );
      newData.splice(prevIndex, 1);
      return {
        ...state,
        items: newData,
      };
    default:
      return state;
  }
}

export default reducer;