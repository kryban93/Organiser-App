export const addNoteAction = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: note,
  };
};

export const deleteNoteAction = (id) => {
  return {
    type: 'DELETE_NOTE',
    payload: id,
  };
};

export const addFinanceItemAction = (payload) => {
  return {
    type: 'ADD_FINANCE_ITEM',
    payload,
  };
};

export const deleteFinanceItemActions = (id) => {
  return {
    type: 'DELETE_FINANCE_ITEM',
    payload: id,
  };
};
