export enum ItemType {
  TextItem = "text",
  RadioItem = "completed",
  CheckBoxItem = "checkBox",
  TimestampItem = "timestamp",
  PictureItem = "picture",
  VideoItem = "video",
  LocationItem = "location",
  TableItem = "table",
  HandwrittenItem = "handwritten"
}
export enum Unit {
  cm = "cm",
  px = "px"
}

export type Section = {
  key: string;
  sectionName: string;
  sectionOrder: number;
}
export type Item<T = TextItemPropData> = {
  key: string;
  sectionKey: string;
  itemType: ItemType;
  positionData: ItemPosition;
  propData?: T;
}
export type ItemPosition = {
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface ItemPropData {
  tittle: string;
  required: boolean;
}
export interface TableItemPropData extends ItemPropData {
  rows: number;
  column: number;
  height: number;
  heightUnit: Unit;
}
export interface RadioItemPropData extends ItemPropData {
  Options: string[];
}
export type TextItemPropData = ItemPropData;
export type CheckBoxItemPropData = RadioItemPropData;
export type TimestampItemPropData = ItemPropData;
export type PictureItemPropData = ItemPropData;
export type VideoItemPropData = ItemPropData;
export type LocationItemPropData = ItemPropData;
export type HandwrittenItemPropData = ItemPropData;