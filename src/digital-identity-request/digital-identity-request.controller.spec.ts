import { Test, TestingModule } from '@nestjs/testing';
import { DigitalIdentityRequestController } from './digital-identity-request.controller';
import { DigitalIdentityRequestService } from './digital-identity-request.service';

describe('DigitalIdentityRequestController', () => {
  let controller: DigitalIdentityRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalIdentityRequestController],
      providers: [DigitalIdentityRequestService],
    }).compile();

    controller = module.get<DigitalIdentityRequestController>(DigitalIdentityRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
