const notesOperationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      const tempArray = state.concat();
      const id = state.length;
      const newItem = {
        payload: action.payload,
        id: `${action.payload.type}${id}`,
      };
      tempArray.push(newItem);
      return tempArray;
    }

    default:
      return state;
  }
};

export default notesOperationsReducer;
