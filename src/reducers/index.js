import { combineReducers } from 'redux';
import notesOperationsReducer from './notesOperationsReducer';
import financesOperationsReducer from './financesOperationsReducer';
const allReducers = combineReducers({
  notesOperationsReducer,
  financesOperationsReducer,
});

export default allReducers;
