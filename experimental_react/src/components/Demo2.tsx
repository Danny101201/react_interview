import React, { Suspense, useState } from 'react'
import { CheckBox } from './CheckBox'
import Data from './Data'
import ErrorBoundary, { ErrorBoundaryMySel } from './ErrorBoundary'


export enum Url {
  COMMENT = 'https://jsonplaceholder.typicode.com/comments?_page=2',
  POSTS = 'https://jsonplaceholder.typicode.com/posts?_page=2',
  TODOS = 'https://jsonplaceholder.typicode.com/todos?_page=2',
}

function Demo() {
  const [url, setUrl] = useState<string>(Url.POSTS)
  const [shouldFetch, setShouldFetch] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
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
        <CheckBox
          label='SHOULD fetch'
          isCheck={shouldFetch}
          value={shouldFetch ? '1' : '0'}
          onChange={e => setShouldFetch(e.target.checked)}
        />
        <CheckBox
          label='SHOULD Error'
          isCheck={hasError}
          value={hasError ? '1' : '0'}
          onChange={e => setHasError(e.target.checked)}
        />
      </div>
      <ErrorBoundaryMySel fallback={errorMsg => <p>{errorMsg}</p>}>
        <Suspense fallback="loading...">
          <Data url={url} shouldFetch={shouldFetch} hasError={hasError} />
        </Suspense>
      </ErrorBoundaryMySel>
    </div>
  )
}

export default Demo