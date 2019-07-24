import { combineReducers } from "redux";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

import { Section, ItemType, Item, Unit, ItemPropData } from "./models";
import {
  TableItemPropData,
  TextItemPropData,
  RadioItemPropData
} from "./models";
import {
  ADD_SECTION,
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_SECTION
} from "./constants";

export type TemplateAction = ActionType<typeof actions>;

export type TemplateState = Readonly<{
  sections: Section[],
  items: Item[]
}>;
const initialState: TemplateState = {
  sections: [],
  items: []
};
// combine函数泛型为state, action增加类型判断
export default combineReducers<TemplateState, TemplateAction>({
  sections: (state = initialState.sections, action) => {
    switch (action.type) {
      case ADD_SECTION:
        return [...state, action.payload];

      case DELETE_SECTION:
        return state.filter(section => section.key !== action.payload);

      default:
        return state;
    }
  }
});
