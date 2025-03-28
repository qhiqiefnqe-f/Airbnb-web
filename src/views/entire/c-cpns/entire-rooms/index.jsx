import React, { memo, useCallback } from "react";
import { EntireRoomsWrapper } from "./style";
import RoomItem from "@/components/room-item";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetailItemDataAction } from "@/store/modules/detail";

const EntireRooms = memo(() => {
  // 获取store中的state状态
  const { roomList, totalCount, isShow } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isShow: state.entire.isShow
    };
  });

  // 拿到路由和dispatch
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // 利用callbask将事件包裹之后再传递给子组件调用
  const handleItemClick = useCallback((item) => {
    // 回到顶部
    window.scrollTo(0, 0)
    // 将传递过来的数据存储到store中并跳转到详情页面
    dispatch(getDetailItemDataAction(item))
    navigate('/detail')
  }, [ navigate, dispatch ])

  return (
    <EntireRoomsWrapper>
      { !!roomList.length && (
        <div className="info">
          <h2 className="totalRoom">{totalCount}处住所</h2>
          <div className="list">
            {roomList.map((item) => {
              return <RoomItem handleItemClick={handleItemClick} itemWidth="20%" roomList={item} key={item.id} />
            })}
          </div>
        </div>
      )}
      {
        isShow && <div className="entire-cover"></div>
      }
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
