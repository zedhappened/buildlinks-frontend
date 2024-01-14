import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: { data: JSON.parse(localStorage.getItem('User')) } ?? null,
    reducers: {
        signIn: (state, action) => {
            state.data = { ...action.payload }
            localStorage.setItem('User', JSON.stringify(action.payload))
        },
        signOut: state => {
            state = null
            localStorage.removeItem('User')
        },
    }
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer