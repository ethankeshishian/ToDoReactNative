export function addItem(item: string) {
  return {
    type: 'ADD_ITEM',
    data: item,
  };
}
