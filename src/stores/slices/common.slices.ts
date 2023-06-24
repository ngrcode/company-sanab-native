import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';

export interface InitialStateInterface {
  token: string;
  refreshToken: string;
  curUser: object;
  loginCode: any;
  modalBook: {show: boolean; bookId: string};
}

const initialState: InitialStateInterface = {
  token: '',
  loginCode: {code: '', id: ''},
  refreshToken: '',
  curUser: {},
  modalBook: {show: false, bookId: ''},
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    handleAuth: (state, action: PayloadAction<any>) => {
      const {token, refreshToken, user, loginCode} = action.payload;
      state.token = token;
      state.curUser = user;
      state.refreshToken = refreshToken;
      // state.loginCode = loginCode;
    },
    handleLoginCode: (state, action: PayloadAction<any>) => {
      const {code, id} = action.payload;
      state.loginCode.id = id === 'prev' ? state.loginCode.id : id;
      state.loginCode.code = code === 'prev' ? state.loginCode.code : code;
    },
    handleProfile: (state, action: PayloadAction<string>) => {
      const payload = Object.keys(action.payload)[0];
      if (payload === 'email') {
        state.curUser.email = action.payload.email;
      } else {
        state.curUser.phone = action.payload.phone;
      }
    },
    logout: (state, action: PayloadAction<string>) => {
      state.token = '';
      state.curUser = {};
      state.loginCode = {code: '', id: ''};
      state.refreshToken = '';
    },
    handleModalBook: (state, action: PayloadAction<any>) => {
      const {bookId, show} = action.payload;
      state.modalBook.bookId = bookId;
      state.modalBook.show = show;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(PURGE, state => {
      // customEntityAdapter.removeAll(state);
    });
  },
});

export const {
  handleAuth,
  logout,
  handleProfile,
  handleLoginCode,
  reset,
  handleModalBook,
} = commonSlice.actions;

export default commonSlice.reducer;
