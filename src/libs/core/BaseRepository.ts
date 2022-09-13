import { Injectable } from '@nestjs/common';
import { PrismaServiceBase } from './PrismaServiceBase';
import { PrismaClient } from '@prisma/client'

@Injectable()
export class BaseRepository {
    private prisma: PrismaServiceBase
    private as = new PrismaClient()

}
