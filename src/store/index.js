import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';

const store = configureStore({
    reducer: { count: counterReducer.reducer, auth: authReducer.reducer },
});

export const counterAction = counterReducer.actions;
export const authAction = authReducer.actions;

export default store;
