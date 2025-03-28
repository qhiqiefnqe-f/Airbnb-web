import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData,getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/services/module/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 发送异步请求获取数据的action函数
export const fetchHomeDataAction = createAsyncThunk('homedata', 
  (payload, {dispatch}) => {
  getHomeGoodPriceData().then(res => {
    dispatch(getHomeGoodPriceDataAction(res))
  })

  getHomeHighScoreData().then(res => {
    dispatch(getHomeHighScoreDataAction(res))
  })

  getHomeDiscountData().then(res => {
    dispatch(getHomeDisCountDataAction(res))
  })

  getHomeHotRecommendData().then(res => {
    dispatch(getHomeHotRecommendDataAction(res))
  })

  getHomeLongforData().then(res => {
    dispatch(getHomeLongforDataAction(res))
  })

  getHomePlusData().then(res => {
    dispatch(getHomePlusDataAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {},
    highScore: {},
    disCount: {},
    hotRecommend: {},
    longFor: {},
    plus: {}
  },
  reducers: {
    getHomeGoodPriceDataAction(state, { payload }) {
      state.goodPrice = payload
    },
    getHomeHighScoreDataAction(state, { payload }) {
      state.highScore = payload
    },
    getHomeDisCountDataAction(state, { payload }) {
      state.disCount = payload
    },
    getHomeHotRecommendDataAction(state, { payload }) {
      state.hotRecommend = payload
    },
    getHomeLongforDataAction(state, { payload }) {
      state.longFor = payload
    },
    getHomePlusDataAction(state, { payload }) {
      state.plus = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPrice = payload
  //   }
  // }
})

export const { 
    getHomeGoodPriceDataAction, 
    getHomeHighScoreDataAction,
    getHomeDisCountDataAction,
    getHomeHotRecommendDataAction,
    getHomeLongforDataAction,
    getHomePlusDataAction } = homeSlice.actions

export default homeSlice.reducer