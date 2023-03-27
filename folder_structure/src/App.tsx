import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Folder from './components/Folder'

if (import.meta.hot) {
  import.meta.hot.accept('./components/Folder.tsx', (newFoo) => {
    console.log('accept')
    // 回调函数接收到更新后的'./foo.js' 模块
    newFoo?.foo()
  })

  // 也可以接受一个依赖模块的数组：
  import.meta.hot.accept(
    ['./foo.js', './bar.js'],
    ([newFooModule, newBarModule]) => {
      // 只有当所更新的模块非空时，回调函数接收一个数组
      // 如果更新不成功（例如语法错误），则该数组为空
    }
  )
}
function App() {

  return (
    <div className="App">
      <Folder />
    </div>
  )
}

export default App
