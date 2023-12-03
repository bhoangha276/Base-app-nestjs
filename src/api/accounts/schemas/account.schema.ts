import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export enum Role {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
  CUSTOMER = 'customer',
}

@Schema({
  timestamps: true,
})
export class Account {
  @Prop()
  role: Role
  @Prop()
  email: string
  @Prop()
  password: string

  @Prop()
  emailVerified: boolean
  @Prop()
  phoneVerified: boolean
  @Prop()
  status: boolean
}

export const AccountSchema = SchemaFactory.createForClass(Account)
