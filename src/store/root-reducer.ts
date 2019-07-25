import { combineReducers } from "redux";

import todosReducer from "../features/todos/reducer";
import { templateReducer } from "../features/templates";

const rootReducer =
  combineReducers({
    todos: todosReducer,
    template: templateReducer
  });

export default rootReducer;
