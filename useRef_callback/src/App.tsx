import './App.css'
import { GetElement } from './component/GetElement'
import { RefWithUseCallbackNest } from './component/RefWithUseCallbackNest'
import { RefWithUseEffect } from './component/RefWithUseEffect'
import { RefWithUseEffectNest } from './component/RefWithUseEffectNest'
import { Tags } from './component/Tags'

function App() {

  return (
    <>
      {/* <RefWithUseEffect />
      <RefWithUseEffectNest />
      <RefWithUseCallbackNest />
      <GetElement /> */}
      <Tags />
    </>
  )
}

export default App
