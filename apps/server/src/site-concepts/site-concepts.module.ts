import { Module } from '@nestjs/common';
import { SiteConceptsController } from './site-concepts.controller';

@Module({
  controllers: [SiteConceptsController]
})
export class SiteConceptsModule {}
