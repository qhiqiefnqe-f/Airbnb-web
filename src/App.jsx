import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { useScrollTo } from './hooks'

const App = memo(() => {
  
  // 监听路由切换后滚动到顶部
  useScrollTo()

  return (
    <div>
      <AppHeader/>
        <Suspense fallback={ 
          <h2 
            style={{ display: 'flex', 
            justifyContent: 'center', 
            color: '#f00', 
            alignItems: 'center'}}>Loading</h2> }>
            <div className="content">
              { useRoutes(routes) }
            </div>
        </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App