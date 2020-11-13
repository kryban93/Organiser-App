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
