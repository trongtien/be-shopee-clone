import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class BaseHttpException implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
