const calendarOperationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CALENDAR_ITEM': {
      const tempArray = [...state];
      const id = state.length;
      const newItem = {
        payload: action.payload,
        id: `calendarItem${id}`,
      };
      tempArray.push(newItem);
      return tempArray;
    }

    default:
      return state;
  }
};

export default calendarOperationsReducer;
