import { Injectable } from '@nestjs/common'
import { Account } from './interfaces/account.interface'

@Injectable()
export class AccountsService {
  private readonly accounts: Account[] = []
  private readonly account: Account = {
    employeeID: 'string',
    userID: 'string',

    role: 'string',
    email: 'string',
    password: 'string',

    emailVerified: true,
    phoneVerified: true,
    status: true,
  }

  findAll(): Account[] {
    return this.accounts
  }

  findByPagination(
    query,
  ): [Account[], pagination: { page; limit }, totalPage: number, total: number] {
    const pagination = {
      page: query.page > 0 ? Number(query.page) : 1,
      limit: query.limit > 0 ? Number(query.limit) : 2,
      skip: 0,
    }
    pagination.skip = (pagination.page - 1) * pagination.limit

    const [accounts, total] = [[], 111]

    let totalPage = Math.ceil(total / pagination.limit)

    return [accounts, pagination, totalPage, total]
  }

  findByID(id: string): Account {
    return this.account
  }

  findByEmail(email: string): Account {
    return this.account
  }

  create(account: Account): Account {
    return this.account
  }

  update(account: Account) {}

  delete(id: string) {}

  deletePermanently(id: string) {}
}
