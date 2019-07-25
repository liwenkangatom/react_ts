import { createSelector } from "reselect";

import { TemplateState } from "./reducers";

export const getSections = (state: TemplateState) => state.sections;

export const getItems = (state: TemplateState) => state.items;


export const makeGetItemsBySectionKey = (sectionKey: string) => {
  return createSelector(
    getItems,
    (sections) => {
      return sections.filter(section => section.key === sectionKey)
    })
}