type Letters = "a" | "B" | "C"
type RemoveC<TType> = TType extends 'C' ? never : TType

type WithOutC = RemoveC<Letters> // "a" | "B"

type CustomerInfo = {
  role: 'Customer'
  CustomerId: number
  CustomerName: string
}
type EmployeeInfo = {
  role: 'Deployee'
  EmployeeId: number
  account: string
}
type AnotherInfo = {
  role: 'Another'
  userName: string
  account: string
}
type UserType = CustomerInfo | EmployeeInfo | AnotherInfo
type RoleType = 'Customer' | 'Deployee' | 'Another'
type RemoveType<TTpe, RemoveType> = TTpe extends RemoveType ? never : TTpe
type ExactType<TTpe, ExactType> = TTpe extends ExactType ? TTpe : never
type ExactType2<TTpe extends { role: string }, ExactType extends RoleType> = Extract<TTpe, { role: ExactType }>

type UserTypeWithOutCustomerInfo = RemoveType<UserType, CustomerInfo> // EmployeeInfo | AnotherInfo
type UserTypeWithCustomerInfo = ExactType<UserType, CustomerInfo> // CustomerInfo
type UserTypeWithCustomerInfo2 = ExactType2<UserType, 'Another'> // AnotherInfo