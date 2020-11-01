const notesOperationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      const tempArray = [...state];
      const id = state.length;
      const newItem = {
        payload: action.payload,
        id: `${action.payload.type}${id}`,
      };
      tempArray.push(newItem);
      return tempArray;
    }
    case 'DELETE_NOTE': {
      const tempArray = [...state];
      const id = action.payload;
      const filteredArray = tempArray.filter((item) => item.id !== id);
      return filteredArray;
    }
    case 'CHANGE_NOTE_TASK_ITEM': {
      const tempArray = [...state];
      const payload = action.payload;
      tempArray.forEach((note) => {
        if (note.id === payload.noteId) {
          note.payload.tasks.forEach((task) => {
            if (task.id === payload.taskId) {
              task.isChecked = !task.isChecked;
            }
          });
        }
      });
      return tempArray;
    }
    case 'ADD_NOTE_TASK_ITEM': {
      const tempArray = [...state];
      const payload = action.payload;
      const newItem = { id: payload.taskId, text: payload.text, isChecked: false };

      tempArray.forEach((item) => {
        if (item.id === payload.noteId) {
          item.payload.tasks.push(newItem);
        }
      });
      return tempArray;
    }
    /*
    case 'DELETE_NOTE_TASK_ITEM': {
      const tempArray = [...state];
      const payload = action.payload;
      console.log(payload);
      tempArray.map((note) =>
        note.id === payload.noteId
          ? console.log(
              note.payload.tasks
            ) note.payload.tasks.filter((item) => item.id !== payload.taskId)
          : note
      );
      return tempArray;
    }
    */
    case 'ADD_NOTE_LIST_ITEM': {
      const tempArray = [...state];
      console.log(tempArray);
      const payload = action.payload;
      const newItem = { id: payload.itemId, text: payload.text };
      tempArray.forEach((item) => {
        if (item.id === payload.noteId) {
          item.payload.list.push(newItem);
        }
      });

      return tempArray;
    }
    /*
    case 'CHANGE_NOTE_TITLE': {
      console.log('ping!');
      const tempArray = [...state];
      const payload = action.payload;
      tempArray.forEach((item) => {
        if (item.id === payload.noteId) {
          item.payload.title = payload.title;
        }
      });
      return tempArray;
    }*/
    default:
      return state;
  }
};

export default notesOperationsReducer;
