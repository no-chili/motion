import { createSlice } from '@reduxjs/toolkit'

const coverSlice = createSlice({
	name: 'cover',
	initialState: {
		isShow: false,
	},
	reducers: {
		show: (state) => {
			state.isShow = true
		},
		hidden: (state) => {
			state.isShow = false
		},
	},
})

export const { show, hidden } = coverSlice.actions

export default coverSlice.reducer
