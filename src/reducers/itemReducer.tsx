let newKey = 1;
const initialState = {
  items: [
    {value: 'Wash the dishes', key: '0', date: '7/29/2020'},
    {value: 'Make my bed', key: '1', date: '7/30/2020'},
  ],
};
function reducer(
  state = initialState,
  action: {type: string; data: {item: string; date: string}},
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
      const newData = [...state.items];
      const prevIndex = state.items.findIndex(
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
    default:
      return state;
  }
}

export default reducer;
