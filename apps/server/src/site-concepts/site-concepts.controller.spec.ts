import { Test, TestingModule } from '@nestjs/testing';
import { SiteConceptsController } from './site-concepts.controller';

describe('SiteConceptsController', () => {
  let controller: SiteConceptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteConceptsController],
    }).compile();

    controller = module.get<SiteConceptsController>(SiteConceptsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
