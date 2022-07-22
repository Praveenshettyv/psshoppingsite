import { createStore } from "redux";
import reducerscomponent from "./reducers/reducerscomponent";
const redux_tool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const state = createStore(reducerscomponent, redux_tool());
export default state;
