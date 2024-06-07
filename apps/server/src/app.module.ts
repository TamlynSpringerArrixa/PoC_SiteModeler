import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
// import { UrqlClientModule } from './urql-client/urql-client.module';
import { MetaDataModule } from './meta-data/meta-data.module';
import { SiteConceptsModule } from './site-concepts/site-concepts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MetaDataModule,
    SiteConceptsModule,
    MetaDataModule,
    SiteConceptsModule,
    // UrqlClientModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
