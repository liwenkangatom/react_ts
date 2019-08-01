import { createSelector } from "reselect";

import { TemplateState } from "./reducers";
import Item from "antd/lib/list/Item";

export const getSections = (state: TemplateState) => state.sections;

export const getItems = (state: TemplateState) => state.items;

export const makeGetItemsBySectionKey = (sectionKey: string) => {
  return createSelector(getItems, items => {
    return items.filter(item => item.sectionKey === sectionKey);
  });
};
