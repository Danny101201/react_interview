import React, { PropsWithChildren } from 'react'
interface FormProps extends PropsWithChildren {

}
function Form({ children }: FormProps) {
  //isValidElement 如果children不是一個dom節點，或是有多個dom點當作child都是invalidate element已下是isValidElement用法

  //錯誤用法
  // <Form ></Form > child為空
  // <Form >1</Form > child為單一文字
  // <Form ><p>text</p><p>text</p></Form > child太多節點

  //用卻用法
  // <Form ><></></Form > 用fragment
  // <Form ><p>132</p></Form > 單一dom節點
  const props = { title: 'Hello' }
  const isValidateChildReact = React.isValidElement(children) ?
    React.cloneElement(children, props) :
    children
  return (
    <div>{isValidateChildReact}</div>
  )
}

export default Form