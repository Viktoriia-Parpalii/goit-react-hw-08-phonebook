const { configureStore } = require('@reduxjs/toolkit');
const { contactsReducer } = require('./contacts');

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
export const persistor = store;
