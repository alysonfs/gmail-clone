import { configureStore } from '@reduxjs/toolkit';
import { mailReduce, userReduce } from './features'

export const store = configureStore({
  reducer: {
    mail: mailReduce,
    user: userReduce
  },
});
