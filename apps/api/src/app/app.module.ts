import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiConfigModule } from '@codelab/api-config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
@Module({
  imports: [ApiConfigModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
  exports: [],
})
export class AppModule {}
