export function addItem(item: any) {
  return {
    type: 'ADD_ITEM',
    data: item,
  };
}
