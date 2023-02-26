import React, { Suspense, useState } from 'react'
import { CheckBox } from './components/CheckBox';
import Data from './components/Data';
import ErrorBoundary from './components/ErrorBoundary';


export enum Url {
  COMMENT = 'https://jsonplaceholder.typicode.com/comments?_page=2',
  POSTS = 'https://jsonplaceholder.typicode.com/posts?_page=2',
  TODOS = 'https://jsonplaceholder.typicode.com/todos?_page=2',
}

function App() {
  const [url, setUrl] = useState<string>(Url.POSTS)
  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }
  return (
    <div style={{ minHeight: '100vh' }}>
      <div>
        <CheckBox
          label='COMMENT'
          isCheck={url === Url.COMMENT}
          value={Url.COMMENT}
          onChange={handleChangeUrl}
        />
        <CheckBox
          label='POSTS'
          isCheck={url === Url.POSTS}
          value={Url.POSTS}
          onChange={handleChangeUrl}
        />
        <CheckBox
          label='TODOS'
          isCheck={url === Url.TODOS}
          value={Url.TODOS}
          onChange={handleChangeUrl}
        />
      </div>

      <ErrorBoundary fallback={(errorMsg: string) => (<p>error: {errorMsg}</p>)}>
        <Suspense fallback={<p>isLoading...</p>}>
          <Data url={url} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App