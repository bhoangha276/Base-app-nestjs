declare const module: any

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { HttpExceptionFilter } from './common/filters'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new HttpExceptionFilter())

  const configService = app.get(ConfigService)
  const port = configService.get('port')
  const localhost = configService.get('localhost')

  await app.listen(port, () => {
    console.log(`🚀 Application running on: http://${localhost}:${port}`)
  })

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
