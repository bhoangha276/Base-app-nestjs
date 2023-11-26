export interface Account {
  employeeID: string
  userID: string

  role: string
  email: string
  password: string

  emailVerified: boolean
  phoneVerified: boolean
  status: boolean
}
