import React, { useEffect, useReducer } from 'react'
// Interface for our state
interface LoadingState {
  loaded: boolean;
  loading: boolean;
  error: Error | null;
}

export function Loading() {
  const [state, dispatch] = useReducer((state: LoadingState, newState: Partial<LoadingState>) => {
    return {
      ...state,
      ...newState
    }
  },
    {
      loaded: false,
      loading: false,
      error: null,
    }
  )

  if (state.loading) return <p>loading...</p>
  if (state.error) return <p>{state.error.message}</p>
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ loading: false, loaded: true, error: new Error('some error') })
        }}
      >set error</button>
      <button onClick={() => {
        dispatch({ loading: true });
        setTimeout(() => {
          dispatch({ loading: false, loaded: true });
        }, 1000)
      }}
      >set loading</button>
      <p>{JSON.stringify(state)}</p>
    </div >
  )
}

