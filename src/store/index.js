import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer";
import outgoingReducer from "./reducers/outgoingReducer";
import notificationReducer from "./reducers/notificationReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    outgoings: outgoingReducer,
    notifications: notificationReducer,
  },
});
