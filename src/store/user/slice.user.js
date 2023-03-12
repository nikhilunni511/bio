import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { profileImage: "/logo_design_sample_flower.png" },
  reducers: {
    setUser: state => {
      state.profileImage = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
