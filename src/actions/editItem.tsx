export function editItem(key: string, newText: string) {
  return {
    type: 'EDIT_ITEM',
    data: {key: key, newText: newText},
  };
}
