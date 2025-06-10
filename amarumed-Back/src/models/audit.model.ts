import {Entity, model} from '@loopback/repository'
import {boolean, integer, timestamp} from './pg'

@model()
export class Audit extends Entity {
  @timestamp({ required: true }) createdAt: string

  @integer({ required: true }) createdBy: number

  @timestamp({ default: null }) editedAt?: string

  @integer({}) editedBy?: number

  @boolean({ default: false }) deleted?: boolean

  @timestamp({ default: null }) deletedAt?: string

  @integer({}) deletedBy?: number

  constructor(data?: Partial<Audit>) {
    super(data)
  }
}
