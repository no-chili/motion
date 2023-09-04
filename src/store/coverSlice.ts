import { createSlice } from '@reduxjs/toolkit'

const searchScroll = createSlice({
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

export const { show, hidden } = searchScroll.actions

export default searchScroll.reducer
