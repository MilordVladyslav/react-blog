import {configureStore, combineReducers} from "@reduxjs/toolkit";
import articlesSlice from "../features/articlesSlices";
import logger from "redux-logger";

const reducer = combineReducers({articlesSlice});

export const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})