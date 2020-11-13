import { combineReducers } from 'redux';
import notesOperationsReducer from './notesOperationsReducer';
import financesOperationsReducer from './financesOperationsReducer';
import calendarOperationsReducer from './calendarOperationsReducer';

const allReducers = combineReducers({
  notesOperationsReducer,
  financesOperationsReducer,
  calendarOperationsReducer,
});

export default allReducers;
