export const addCalendarItemAction = (payload) => {
  return {
    type: 'ADD_CALENDAR_ITEM',
    payload: payload,
  };
};

export const deleteCalendarItemAction = (id) => {
  return {
    type: 'DELETE_CALENDAR_ITEM',
    payload: id,
  };
};
