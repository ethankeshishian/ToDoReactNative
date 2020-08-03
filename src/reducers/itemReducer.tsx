let newKey = 1;
const initialState = {
  items: [
    {value: 'Wash the dishes', key: '0', date: '7/29/2020'},
    {value: 'Make my bed', key: '1', date: '7/30/2020'},
  ],
};
function reducer(
  state = initialState,
  action: {
    type: string;
    data: {item: string; date: string; oldText: string; newText: string};
  },
) {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('added item');
      newKey++;
      let newKeyString = newKey.toString();
      return {
        ...state,
        items: [
          ...state.items,
          {value: action.data.item, key: newKeyString, date: action.data.date},
        ],
      };
    case 'DELETE_ITEM':
      var newData = [...state.items];
      var prevIndex = state.items.findIndex(
        (item) => item.key === action.data.item,
      );
      newData.splice(prevIndex, 1);
      return {
        ...state,
        items: newData,
      };
    case 'DELETE_ALL':
      newKey = -1;
      return {
        items: [],
      };
    case 'EDIT_ITEM':
      var newData = [...state.items];
      var prevIndex = state.items.findIndex(
        (item) => item.value === action.data.oldText,
      );
      newData[prevIndex].value = action.data.newText;
      console.log(newData);
      return {
        ...state,
        items: newData,
      };
    default:
      return state;
  }
}

export default reducer;
