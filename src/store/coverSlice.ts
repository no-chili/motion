import { createSlice } from '@reduxjs/toolkit'

const coverhScroll = createSlice({
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

export const { show, hidden } = coverhScroll.actions

export default coverhScroll.reducer
