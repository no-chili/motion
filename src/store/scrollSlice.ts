import { createSlice } from '@reduxjs/toolkit'

const Scroll = createSlice({
	name: 'scroll',
	initialState: {
		isShow: true,
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

export const { show, hidden } = Scroll.actions

export default Scroll.reducer
