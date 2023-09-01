import { configureStore } from '@reduxjs/toolkit'
import coverSlice from './coverSlice'
const store = configureStore({
	reducer: {
		cover: coverSlice,
	},
})

// TS类型推断
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
