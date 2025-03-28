import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { HomeSectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionList from '@/components/section-list'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {

  // 定义组件内部的状态
  const { infoData } = props
  
  // 格式化Tabs的数据
  const tabsItemNames = infoData.dest_address?.map(item => {
    return item.name
  })

  // 通过定义的初始化值来获取room列表数据
  const initalState = Object.keys(infoData.dest_list)[0]
  const [roomName, setRoomName] = useState(initalState)
  // 传入tabs组件内部的函数来获取传出的name展示不同的数据
  const changeRoomList = useCallback((name, index) => {
    setRoomName(name)
  }, [])


  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={ infoData.title } subTitle={ infoData.subtitle } />
      <SectionTabs 
        itemNamesList={ tabsItemNames } 
        changeRoomList={ changeRoomList } />
      <SectionList 
        roomList={ infoData.dest_list?.[roomName] } 
        itemWidth='33.333%' />
        <SectionFooter title={roomName} />
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2