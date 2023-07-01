import axios, { AxiosError } from "axios";
interface IErrorBase<T> {
  error: Error | AxiosError<T>
  type: 'axios-error' | 'stock-error'
}


interface IAxiosError<T> extends IErrorBase<T> {
  error: AxiosError<T>
  type: 'axios-error'
}
interface IStockError<T> extends IErrorBase<T> {
  error: Error;
  type: 'stock-error';
}

/**
  * 
  * @description handle error in try catch.
  * @example
  * ```
  * .catch(
  * axiosErrorHandler<MyType>(res => {
  *   if (res.type === 'axios-error') {
  *     //type is available here
  *    const error = res.error;
  *} else {
  *       //stock error
  *    }
  * })
  * );
  * ```
* */
export const axiosErrorHandler = <T>(
  callback: (err: IAxiosError<T> | IStockError<T>) => void
) => {
  return (error: Error | AxiosError<T>) => {
    if (axios.isAxiosError(error)) {
      callback({
        error,
        type: 'axios-error'
      })
    } else {
      callback({
        error,
        type: 'stock-error'
      })
    }
  }
}