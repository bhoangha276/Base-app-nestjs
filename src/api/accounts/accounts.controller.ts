import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common'
import { AccountsService } from './accounts.service'
import { Account } from './schemas/account.schema'
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async getAll(): Promise<{ success: number; data: Account[] }> {
    let accounts = await this.accountsService.findAll()

    return { success: 1, data: accounts }
  }

  @Get('/pagination')
  async getByPagination(
    @Query() query: { page; limit; sortDirection; sortField },
  ): Promise<{ success: number; data: Account[]; Paging }> {
    const [accounts, pagination, totalPage, total] =
      await this.accountsService.findByPagination(query)

    return {
      success: 1,
      data: accounts,
      Paging: {
        CurrentPage: pagination.page,
        Limit: pagination.limit,
        TotalPage: totalPage,
        Total: total,
      },
    }
  }

  @Get(':id')
  async getByID(@Param('id') id: string): Promise<{ success: number; data: Account }> {
    let account = await this.accountsService.findByID(id)

    return {
      success: 1,
      data: account,
    }
  }

  @Post()
  async create(
    @Body(ValidationPipe) createAccountDto: CreateAccountDto,
  ): Promise<{ success: number; data }> {
    const account = await this.accountsService.create(createAccountDto)

    return { success: 1, data: account }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateAccountDto: UpdateAccountDto,
  ): Promise<{ success: number }> {
    await this.accountsService.update(id, updateAccountDto)

    return { success: 1 }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ success: number }> {
    await this.accountsService.delete(id)

    return {
      success: 1,
    }
  }

  @Delete('/delete-permanently:id')
  async deletePermanently(@Param('id') id: string): Promise<{ success: number }> {
    await this.accountsService.deletePermanently(id)

    return { success: 1 }
  }
}
