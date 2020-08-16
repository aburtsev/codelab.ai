import { Module, NestModule, MiddlewareConsumer, Inject } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiConfigModule } from '@codelab/api-config'
import { RouterModule } from '@codelab/api-router'
import { ModelModule, MONGOOSE_MODELS } from '@codelab/api-model'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AppMiddleware } from './app.middleware'
@Module({
  imports: [ApiConfigModule, RouterModule, ModelModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
  exports: [],
})
export class AppModule implements NestModule {
  constructor(@Inject(MONGOOSE_MODELS) private readonly mongooseModels) {
    console.log(mongooseModels)
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes(AppController)
  }
}
