import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: "",
    articles: []
};

export const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        getArticles: state => {
            state.loading = true;
        },
        getArticlesSuccess: (state, {payload}) => {
            state.articles = payload;
            state.loading = false;
        },
        getArticlesFailure: (state, {payload}) => {
            state.error = payload;
            state.loading = false;
        }
    }
})

export const {
    getArticles,
    getArticlesSuccess,
    getArticlesFailure
} = articlesSlice.actions

export default articlesSlice.reducer

export const fetchArticles = createAsyncThunk(
    "articles/fetchArticles",
    async(_, thunkAPI) => {
        thunkAPI.dispatch(getArticles());

        try {
            const response = await fetch("http://localhost:4000/api/1.0/articles");
            const data = await response.json();
            thunkAPI.dispatch(getArticlesSuccess(data))
        } catch(err) {
            thunkAPI.dispatch(getArticlesFailure(err))
        }
    }
)