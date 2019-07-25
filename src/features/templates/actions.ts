import { action } from "typesafe-actions";
import cuid from "cuid";
import { Section, ItemType } from "./models";
// import {
//   TableItemPropData,
//   TextItemPropData,
//   RadioItemPropData
// } from "./models";
import {
  ADD_SECTION,
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_SECTION,
  SELECT_SECTION
} from "./constants";

export const addSection = () =>
  action(
    ADD_SECTION
  );
export const addItem = (sectionKey: string, itemType: ItemType) => {
  return action(ADD_ITEM, {
    sectionKey,
    itemType
  });
};
export const deleteSection = (sectionKey: string) =>
  action(DELETE_SECTION, sectionKey);
export const deleteItem = (itemKey: string) => action(DELETE_ITEM, itemKey);
export const selectSection = (sectionKey: string) => action(SELECT_SECTION, sectionKey)
