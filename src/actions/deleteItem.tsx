export function deleteItem(key: string) {
  return {
    type: 'DELETE_ITEM',
    data: {key: key},
  };
}
