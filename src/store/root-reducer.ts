import { combineReducers } from "redux";

import todosReducer from "../features/todos/reducer";

const rootReducer =
  combineReducers({
    todos: todosReducer
  });

export default rootReducer;
