import { HttpException , HttpStatus } from "@nestjs/common";


export class CustomException extends HttpException{
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}

export class EmailAlreadyInUseException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);
  }
}
