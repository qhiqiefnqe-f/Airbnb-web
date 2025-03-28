import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {

  // 记录选中按钮状态的数组, 来动态添加active属性
  const [ selected, setSelected ] = useState([])


  // 处理事件的函数
  function itemClickHandle(item) {
    // 拷贝保存状态的数组并赋值给新数组
    const newSelected = [...selected]

    // 判断点击的item是否在保存状态的数组中
    if(newSelected.includes(item)) {
      // 如果该item已经在保存状态的数组中那么就拿到 该item在保存状态数组中的索引 并根据索引删除该item
      const selectedIndex = newSelected.indexOf(filterIndex => filterIndex === item)
      // 根据索引删除该item
      newSelected.splice(selectedIndex, 1)
    } else {
      // 如果该item不在保存状态的数组中 那么就将该item加入到新数组中 并根据最新的数组修改原来保存状态的数组
      newSelected.push(item)
    }
    // 修改原来保存状态的数组
    setSelected(newSelected)
  }

  return (
    <EntireFilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return (
              <div 
                onClick={e => itemClickHandle(item)} 
                className={ classNames('item', { active: selected.includes(item)})}
                key={item} 
              >{ item }</div>
            )
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})

export default EntireFilter