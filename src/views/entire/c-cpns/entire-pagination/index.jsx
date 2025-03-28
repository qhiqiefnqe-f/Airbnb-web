import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEnitreDataAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo(() => {
  
  // 获取状态
  const { currentPage, totalCount, roomList } = useSelector(state => {
    return {
      currentPage: state.entire.currentPage,
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList
    }
  })

  // 计算显示的页码
  const statePage = currentPage * 20 + 1
  const endPage = ( currentPage + 1 ) * 20
  const totalPage = Math.ceil(totalCount / 20)

  // 获取dispatch
  const dispatch = useDispatch()
  // 事件处理函数
  function paginationClick(e, currentPage) {
    // 回到顶部
    window.scrollTo(0, 0)
    // 点击了页码之后调用dispatch来修改currentPage并通过修改后的currentPage来获取最新的数据进行展示
    dispatch(fetchEnitreDataAction(currentPage - 1))
  }

  return (
    <EntirePaginationWrapper>
      {
        !!roomList.length && (
          <div className="info">
            <Pagination count={totalPage} onChange={paginationClick} />
            <div className="desc">
              第 { statePage } - { endPage } 个房源, 总超过 { totalCount } 个
            </div>
            <div className="about">包含额外附加费用及适用税费。</div>
        </div>
        )
      }
    </EntirePaginationWrapper>
  )
})

export default EntirePagination