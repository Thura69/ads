import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    photo: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.photo = action.payload.photo
        },
        setUserLogoutDetails: (state, action) => {
            state.email = null
            state.name = null
            state.photo = null
        }
    }
});

export const { setUserLoginDetails, setUserLogoutDetails } = userSlice.actions;

export const selectUserName = (state:any) => state.user.name;
export const selectUserEmail = (state:any) => state.user.email;
export const selectUserPhoto = (state: any) => state.user.photo;

export default userSlice.reducer