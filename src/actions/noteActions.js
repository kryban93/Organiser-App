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

export const changeNoteTitleAction = (payload) => {
  return {
    type: 'CHANGE_NOTE_TITLE',
    payload: payload,
  };
};

export const addNoteListItemAction = (payload) => {
  return {
    type: 'ADD_NOTE_LIST_ITEM',
    payload: payload,
  };
};

export const deleteNoteListItemAction = (payload) => {
  return {
    type: 'DELETE_NOTE_LIST_ITEM',
    payload: payload,
  };
};

export const changeNoteTaskItemAction = (payload) => {
  return {
    type: 'CHANGE_NOTE_TASK_ITEM',
    payload: payload,
  };
};

export const addNoteTaskItemAction = (payload) => {
  return {
    type: 'ADD_NOTE_TASK_ITEM',
    payload: payload,
  };
};

export const deleteNoteTaskItemAction = (payload) => {
  return {
    type: 'DELETE_NOTE_TASK_ITEM',
    payload: payload,
  };
};
