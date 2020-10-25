const financesOperationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FINANCE_ITEM': {
      const tempArray = state.concat();
      const id = state.length;
      const newItem = {
        payload: action.payload,
        id: `${action.payload.category}${id}`,
      };
      tempArray.push(newItem);
      return tempArray;
    }
    default:
      return state;
  }
};

export default financesOperationsReducer;