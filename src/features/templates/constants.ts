// const prefix = "template/";
export const ADD_SECTION = "ADD_SECTION";
// export const ADD_SECTION = prefix + "ADD_SECTION";
// 这个是字符串类型, 上个是字面量类型. 如果是string类型的话会给,
// export type TemplateAction = ActionType<typeof actions>;
// safeAction中的ActionType 不能获取正确的 字面量类型. 只能是 type: string.
//从而不能只能提示payload类型;

export const DELETE_SECTION = "DELETE_SECTION";

export const UPDATE_SECTION = "UPDATE_SECTION";

export const ADD_ITEM = "ADD_ITEM";

export const DELETE_ITEM = "DELETE_ITEM";

export const UPDATE_ITEM_POSITION = "UPDATE_ITEM_POSITION";

export const UPDATE_ITEM_PROPS = "UPDATE_ITEM_PROPS";

export const SELECT_SECTION = "SELECT_SECTION";
