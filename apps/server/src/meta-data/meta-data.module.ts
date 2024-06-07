import { Module } from '@nestjs/common';
import { MetaDataController } from './meta-data.controller';

@Module({
  controllers: [MetaDataController]
})
export class MetaDataModule {}
