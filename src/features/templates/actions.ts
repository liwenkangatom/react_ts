import cuid from "cuid";
import { action } from "typesafe-actions";

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
function ItemCreator(sectionKey: string, itemType: ItemType): Item {
  let initItem: Item = {
    key: cuid(),
    sectionKey,
    itemType,
    positionData: {
      x: 1,
      y: 1,
      w: 1,
      h: 1
    }
  };
  let initPropData: ItemPropData = {
    tittle: "",
    required: false
  };
  switch (itemType) {
    case ItemType.TextItem:
      let textItem: Item<TextItemPropData> = {
        ...initItem,
        propData: {
          ...initPropData
        }
      };
      return textItem;
    case ItemType.CheckBoxItem:
    case ItemType.RadioItem:
      let radioItem: Item<RadioItemPropData> = {
        ...initItem,
        propData: {
          ...initPropData,
          Options: []
        }
      };
      return radioItem;
    case ItemType.TableItem:
      let tableItem: Item<TableItemPropData> = {
        ...initItem,
        propData: {
          ...initPropData,
          rows: 3,
          column: 4,
          height: 3,
          heightUnit: Unit.cm
        }
      };
      return tableItem;
    default:
      let item: Item = {
        ...initItem,
        propData: {
          tittle: "",
          required: false
        }
      };
      return item;
  }
}
export const addSection = (sectionName: string, order: number) =>
  action(
    ADD_SECTION,
    {
      key: cuid(),
      sectionName,
      sectionOrder: order
    } as Section
  );
export const addItem = (sectionKey: string, itemType: ItemType) => {
  let item = ItemCreator(sectionKey, itemType);
  return action(ADD_ITEM, item);
};
export const deleteSection = (sectionKey: string) =>
  action(DELETE_SECTION, sectionKey);
export const deleteItem = (itemKey: string) => action(DELETE_ITEM, itemKey);
