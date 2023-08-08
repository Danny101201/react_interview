import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  //   srcset 的寬度(w) 的算法是：
  //   寬度 = 圖片寬度(pixel) * Pixel Density，預設圖片寬度 = 100 % 的 viewport 寬度。
  //   舉個例子：
  //   Viewport = 1000px，1x (DPR)的螢幕，圖片寬度 = 1000w。
  //   Viewport = 500px，2x (DPR)的螢幕，圖片寬度 = 1000w。（因為在 pixel density = 2x 的螢幕上，顯示寬 500px 的圖片實際上需要 1000px）
 
  // 
  return (
    <div className="App">
      <picture>
        {/* 如果web支援 avif就載入avif*/}
        <source
          type="image/avif"
          //srcSet當image長度等於 100w就用/image.avif?width=100圖片
          srcSet="/image.avif?width=100 100w, /image.avif?width=200 200w, /image.avif?width=400 400w, /image.avif?width=800 800w"
        />

        {/* 如果web支援 webp就載入webp 但注意picture會*/}
        <source
          type="image/webp"
          srcSet="/image.webp?width=100 100w, /image.webp?width=200 200w, /image.webp?width=400 400w, /image.webp?width=800 800w"
        />

        <source media="(min-width: 1000px)" srcSet="https://dummyimage.com/1000" type="image/png" />
        <source media="(min-width: 800px)" srcSet="https://dummyimage.com/800" type="image/png" />

        <source media="(min-width: 500px)" srcSet="https://dummyimage.com/500" type="image/png" />
        <img
          //default image
          src="https://dummyimage.com/200"
          // srcSet="https://dummyimage.com/100 100w, https://dummyimage.com/200 200w"
          sizes="(max-width: 800px) 100vw, 50vw"
          style={{ width: '100%', aspectRatio: '16/9' }}
          loading="lazy"
          decoding="async"
          alt="Builder.io drag and drop interface"
        />
      </picture>
    </div>
  )
}

export default App
