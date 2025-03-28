import { getEntireData } from '@/services/module/entire'
import * as entireType from './constant'

export function getEntireCurrentPageAction(currentPage) {
  return {
    type: entireType.ENTIRE_CURRENTPAGE,
    currentPage
  }
}

export function getEntireTotalCountAction(totalCount) {
  return {
    type: entireType.ENTIRE_TOTALCOUNT,
    totalCount
  }
}

export function getEnitreRoomListAction(roomList) {
  return {
    type: entireType.ENTIRE_ROOMLIST,
    roomList
  }
}

export function getEnitreIsShowAction(isShow) {
  return {
    type: entireType.ENTIRE_ISSHOW,
    isShow
  }
}

export const fetchEnitreDataAction = (currentPage = 0) => {
  return async (dispatch, getState) => {

    // 修改currentPage并通过最新的currentPage来发送网络请求获取数据
    dispatch(getEntireCurrentPageAction(currentPage))

    // 获取store中保存当前的页码
    // const offsetPage = getState().entire.currentPage

    // 在发送网络请求之前修改isShow来显示对应遮盖层
    dispatch(getEnitreIsShowAction(true))

    // 发送网络请求获取数据并再次派发action
    const res = await getEntireData(currentPage * 20)

    // 在发送网络请求之后修改isShow来隐藏对应遮盖层
    dispatch(getEnitreIsShowAction(false))

    // 获取列表数据和总数量
    const roomList = res.list
    const totalCount = res.totalCount

    // 再次派发action触发reducer修改store中的state使页面重新渲染刷新
    dispatch(getEntireTotalCountAction(totalCount))
    dispatch(getEnitreRoomListAction(roomList))
  }
}