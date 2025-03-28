import * as entireType from './constant'
const initialState = {
  currentPage: 0, // 当前页码
  totalCount: 0, // 总数量
  roomList: [], // 列表数据
  isShow: false, // 显示遮盖层
}

function reducer(state = initialState, action) {
  switch(action.type) { 
    case entireType.ENTIRE_CURRENTPAGE:
      return { ...state, currentPage: action.currentPage }
    case entireType.ENTIRE_TOTALCOUNT:
      return { ...state, totalCount: action.totalCount }
    case entireType.ENTIRE_ROOMLIST:
      return { ...state, roomList: action.roomList }
    case entireType.ENTIRE_ISSHOW:
      return { ...state, isShow: action.isShow }
    default: 
    return state
  }
}

export default reducer