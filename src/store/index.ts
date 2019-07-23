import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./root-reducer";

const initialState = {};
const store = createStore(rootReducer, initialState, devToolsEnhancer({name: "dev"}));
export default store;
