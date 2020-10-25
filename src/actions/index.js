export const addNoteAction = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: note,
  };
};

export const deleteNoteAction = (note) => {
  return {
    type: 'DELETE_NOTE',
    payload: note,
  };
};

export const addFinanceItemAction = (payload) => {
  return {
    type: 'ADD_FINANCE_ITEM',
    payload,
  };
};

export const deleteFinanceItemActions = (payload) => {
  return {
    type: 'DELETE_FINANCE_ITEM',
    payload,
  };
};
