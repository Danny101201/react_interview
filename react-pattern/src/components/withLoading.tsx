import React, { useEffect, useState } from 'react'

function WithLoading<T extends React.ComponentType<any>>(WrappedComponent: T) {

  type WrappedComponentProps = React.ComponentProps<T>
  type LoadingComponentProps = WrappedComponentProps & { isLoading: boolean }
  return function LoadingComponent({ isLoading, ...rest }: LoadingComponentProps) {
    const [loading, setLoading] = useState(isLoading)
    useEffect(() => {
      setLoading(isLoading)
    }, [isLoading])
    if (loading) {
      return <p>loading...</p>
    }
    return <WrappedComponent {...rest as WrappedComponentProps} />
  }
}

export default WithLoading

