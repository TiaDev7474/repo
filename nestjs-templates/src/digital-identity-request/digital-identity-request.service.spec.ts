import { Test, TestingModule } from '@nestjs/testing';
import { DigitalIdentityRequestService } from './digital-identity-request.service';

describe('DigitalIdentityRequestService', () => {
  let service: DigitalIdentityRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DigitalIdentityRequestService],
    }).compile();

    service = module.get<DigitalIdentityRequestService>(DigitalIdentityRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
