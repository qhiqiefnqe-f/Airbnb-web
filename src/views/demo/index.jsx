import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator'

const Demo = memo(() => {

  // 模拟数据
  const names = ['abc', 'cba', 'nba', 'ccc', 'aaa', 'ddd', 'lyf']

  // 记录点击元素的索引
  const [ itemIndex, setItemIndex ] = useState(0)

  // 事件处理函数
  function itemBtnClick(isNext) {
    // 记录点击之后元素的索引值
    let newIndex = isNext ? itemIndex+1 : itemIndex-1
    // 进行边界判断
    if(newIndex < 0) newIndex = names.length - 1
    if(newIndex === names.length) newIndex = 0

    // 将最终点击后的索引设置到useState中保存
    setItemIndex(newIndex)
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e => itemBtnClick(false)} >上一个</button>
        <button onClick={e => itemBtnClick(true)} >下一个</button>
      </div>
      <Indicator itemIndex={itemIndex} >
        {
          names.map(item => {
            return <button key={item}>{ item }</button>
          })
        }
      </Indicator>
    </DemoWrapper>
  )
})

export default Demo