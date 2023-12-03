import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Account } from './schemas/account.schema'
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Injectable()
export class AccountsService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) {}

  async findAll(role?: 'admin' | 'employee' | 'customer'): Promise<Account[]> {
    if (role) {
    }

    return await this.accountModel.find()
  }

  async findByPagination(
    query,
  ): Promise<[Account[], pagination: { page; limit }, totalPage: number, total: number]> {
    const pagination = {
      page: query.page > 0 ? Number(query.page) : 1,
      limit: query.limit > 0 ? Number(query.limit) : 2,
      skip: 0,
    }
    pagination.skip = (pagination.page - 1) * pagination.limit

    const total = await this.accountModel.find().countDocuments()
    let accounts = []

    if (total > pagination.skip) {
      accounts = await this.accountModel
        .find()
        .sort()
        .skip(pagination.skip)
        .limit(pagination.limit)
    }

    if (total <= pagination.skip) {
      accounts = await this.accountModel.find()
    }

    let totalPage = Math.ceil(total / pagination.limit)

    return [accounts, pagination, totalPage, total]
  }

  async findByID(id: string): Promise<Account> {
    return await this.accountModel.findById(id)
  }

  async findByEmail(email: string): Promise<Account> {
    return await this.accountModel.findOne({ email: email })
  }

  async create(account: CreateAccountDto): Promise<Account> {
    return await this.accountModel.create({ ...account })
  }

  async update(id: string, account: UpdateAccountDto): Promise<Account> {
    return this.accountModel.findOneAndUpdate({ _id: id }, account, { new: true })
  }

  async delete(id: string) {
    return this.accountModel.findOneAndUpdate(
      { _id: id },
      { isDelete: true },
      { new: true },
    )
  }

  async deletePermanently(id: string) {
    return await this.accountModel.findOneAndDelete({ _id: id })
  }
}
