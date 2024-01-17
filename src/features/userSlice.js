import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: { ...JSON.parse(localStorage.getItem('buiildlinks-user')) } ?? {},
    reducers: {
        signIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.id = action.payload.user;
            state.roles = action.payload.roles;
            state.name = action.payload.name;
            localStorage.setItem('buiildlinks-user', JSON.stringify(state))
        },
        signOut: state => {
            for (const key in state) {
                delete state[key];
            }
            localStorage.removeItem('buiildlinks-user')
        },
    }
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer