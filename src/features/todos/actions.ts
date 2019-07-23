import cuid from "cuid";
import { createStandardAction } from "typesafe-actions";

import { TodosFilter, Todo } from "./models";
import { ADD, TOGGLE, CHANGE_FILTER } from "./constants";

// 这有什么不同之处.
export const add = createStandardAction(ADD).map(
  (payload: { title: string }) => ({
    payload: {
      ...payload,
      id: cuid(),
      completed: false,
    } as Todo,
  })
);

export const toggle = createStandardAction(TOGGLE)<{ id: string }>();

export const changeFilter = createStandardAction(CHANGE_FILTER)<TodosFilter>();
