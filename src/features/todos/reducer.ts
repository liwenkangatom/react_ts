import { combineReducers } from "redux";
import { ActionType, getType } from "typesafe-actions";
import { Todo, TodosFilter } from "./models";
import * as actions from "./actions";

export type TodosAction = ActionType<typeof actions>;

export type TodosState = Readonly<{
  todos: Todo[];
  todosFilter: TodosFilter;
}>;
const initialState: TodosState = {
  todos: [],
  todosFilter: TodosFilter.All,
};
// combine函数泛型为state, action增加类型判断
export default combineReducers<TodosState, TodosAction>({
  todos: (state = initialState.todos, action) => {
    switch (action.type) {
      case getType(actions.add):
        return [...state, action.payload];

      case getType(actions.toggle):
        return state.map(
          item =>
            item.id === action.payload.id
              ? { ...item, completed: !item.completed }
              : item
        );

      default:
        return state;
    }
  },
  todosFilter: (state = initialState.todosFilter, action) => {
    switch (action.type) {
      case getType(actions.changeFilter):
        return action.payload;

      default:
        return state;
    }
  }
});
