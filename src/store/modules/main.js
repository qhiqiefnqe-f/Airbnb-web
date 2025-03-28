import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
      isOpaque: false
    }
  },
  reducers: {
    changeheaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeheaderConfigAction } = mainSlice.actions

export default mainSlice.reducer