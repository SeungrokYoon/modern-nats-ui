import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface UserState {
  name: string;
}

const initialState: UserState = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;

export const selectUserName = (state: RootState) => state.user.name;

export default userSlice.reducer;
