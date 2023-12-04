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
  @Prop({ required: true, enum: Role, default: Role.CUSTOMER })
  role: Role
  @Prop({ required: true, unique: true, trim: true, maxlength: 255 })
  email: string
  @Prop({ required: true })
  password: string

  @Prop({ default: false })
  emailVerified: boolean
  @Prop({ default: false })
  phoneVerified: boolean
  @Prop({ default: false })
  isDeleted: boolean
}

export const AccountSchema = SchemaFactory.createForClass(Account)
