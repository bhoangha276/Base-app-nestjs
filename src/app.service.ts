import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getDefault(): string {
    return 'API is working!'
  }
}
