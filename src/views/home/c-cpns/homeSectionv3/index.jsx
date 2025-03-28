import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="plusList">
        <ScrollView>
          {infoData.list.map((item) => {
            return <RoomItem roomList={item} itemWidth="20%" key={item.id} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter title="Plus" />
    </HomeSectionWrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
