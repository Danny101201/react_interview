import React, { Component, ReactNode, ErrorInfo } from 'react'

interface Props {
  children: ReactNode;
  fallback: (errorMsg: string) => ReactNode
}

interface State {
  hasError: boolean;
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    // set error state before render
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // log error info
    console.error('Error:', error, 'Error Info:', errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // when get error render fallback
      return this.props.fallback(this.state.error?.message!);
    }

    return this.props.children;
  }
}



class ErrorBoundaryMySel extends Component<Props, State> {
  constructor(prop: Props) {
    super(prop)
    this.state = {
      hasError: false,
      error: null
    }
  }
  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true }
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('Errpr :' + error.message, 'Error Info:', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        
        this.props.fallback(this.state.error?.message!)
      )
    }
    return this.props.children
  }
}