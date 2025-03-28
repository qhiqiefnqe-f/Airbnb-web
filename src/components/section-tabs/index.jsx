import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { itemNamesList = [], changeRoomList } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)
  
  function itemNamesClick(name, index) {
    setCurrentIndex(index)
    changeRoomList(name, index)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        { itemNamesList.map((item, index) => {
          return (
            <div 
              className={ classNames('itemNames', { active: currentIndex === index }) }
              key={ item }
              onClick={ e => itemNamesClick(item, index) }
            >{ item }</div>
          )
        })}
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  itemNamesList: PropTypes.array
}

export default SectionTabs