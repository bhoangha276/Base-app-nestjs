export interface Account {
  role: string
  email: string
  password: string

  emailVerified: boolean
  phoneVerified: boolean
  status: boolean
}
