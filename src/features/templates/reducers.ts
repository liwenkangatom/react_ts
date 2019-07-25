import { combineReducers } from "redux";
import cuid from "cuid";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

import {
  Section,
  ItemType,
  Item,
  Unit,
  ItemPropData,
  templateContext
} from "./models";
import {
  TableItemPropData,
  TextItemPropData,
  RadioItemPropData
} from "./models";
import {
  ADD_SECTION,
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_SECTION,
  SELECT_SECTION
} from "./constants";

export type TemplateAction = ActionType<typeof actions>;

export type TemplateState = Readonly<{
  sections: Section[];
  items: Item[];
  templateContext: templateContext;
}>;
const initialState: TemplateState = {
  sections: [],
  items: [],
  templateContext: {
    templateKey: "",
    sectionKey: "",
    itemKey: ""
  }
};
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

// combine函数泛型为state, action增加类型判断
export default combineReducers<TemplateState, TemplateAction>({
  sections: (state = initialState.sections, action) => {
    switch (action.type) {
      case ADD_SECTION:
        let maxOrder = state
          .map(section => section.sectionOrder)
          .reduce((preOrder, curOrder) => {
            return preOrder > curOrder ? preOrder : curOrder;
          }, 0);
        let initSectionName: string = "Section" + maxOrder;
        let newSection: Section = {
          key: cuid(),
          sectionName: initSectionName,
          sectionOrder: maxOrder + 1
        };
        return state.concat(newSection);
      case DELETE_SECTION:
        return state.filter(section => section.key !== action.payload);
      default:
        return state;
    }
  },
  items: (state = initialState.items, action) => {
    switch (action.type) {
      case ADD_ITEM:
        let newItem = ItemCreator(
          action.payload.sectionKey,
          action.payload.itemType
        );
        return state.concat(newItem);
      case DELETE_ITEM:
        return state.filter(item => item.key !== action.payload);
      default:
        return state;
    }
  },
  templateContext: (state = initialState.templateContext, action) => {
    switch (action.type) {
      case SELECT_SECTION:
        return Object.assign({}, state, {
          sectionKey: action.payload
        });
      default:
        return state;
    }
  }
});
