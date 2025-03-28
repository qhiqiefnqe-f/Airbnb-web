import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { SectionListWrapper } from "./style";

const SectionList = memo((props) => {
  const { roomList, itemWidth } = props;
  return (
    <SectionListWrapper>
      {roomList?.slice(0, 8)?.map((item) => {
        return <RoomItem roomList={item} key={item.id} itemWidth={itemWidth} />;
      })}
    </SectionListWrapper>
  );
});

SectionList.propTypes = {
  roomList: PropTypes.array,
};

export default SectionList;
