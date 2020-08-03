export function editItem(oldText: string, newText: string) {
  return {
    type: 'EDIT_ITEM',
    data: {oldText: oldText, newText: newText},
  };
}
