export function addItem(item: string, date: string) {
  return {
    type: 'ADD_ITEM',
    data: {item, date},
  };
}
