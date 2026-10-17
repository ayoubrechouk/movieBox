import {MovieReducer} from "./features/movieReducer";
import {createStore} from "redux";



const Store= createStore(MovieReducer);
export default Store;