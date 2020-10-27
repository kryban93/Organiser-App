const financesOperationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FINANCE_ITEM': {
      const tempArray = [...state];
      const id = state.length;
      const newItem = {
        payload: action.payload,
        id: `${action.payload.category}${id}`,
      };
      tempArray.push(newItem);
      return tempArray;
    }

    case 'DELETE_FINANCE_ITEM': {
      const tempArray = [...state];
      const id = action.payload;
      const filteredArray = tempArray.filter((item) => item.id !== id);
      return filteredArray;
    }
    default:
      return state;
  }
};

export default financesOperationsReducer;
