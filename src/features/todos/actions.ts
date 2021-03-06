import cuid from "cuid";
import { action } from "typesafe-actions";

import { TodosFilter, Todo } from "./models";
import { ADD, TOGGLE, CHANGE_FILTER } from "./constants";

// 这有什么不同之处.
export const add = (title: string) =>
  action(
    ADD,
    {
      title,
      id: cuid(),
      completed: false
    } as Todo
  );

export const toggle = () => action(TOGGLE);

export const changeFilter = (filter: TodosFilter) =>
  action(CHANGE_FILTER, filter);
