import {Entity, model} from '@loopback/repository'
import {character, id} from './pg'

@model({ name: 'tgroup' })
export class Group extends Entity {
  @id({ serial: false }) id: number

  @character({ length: 30, required: true }) name: string

  constructor(data?: Partial<Group>) {
    super(data)
  }
}

export interface GroupRelations {
  // describe navigational properties here
}

export type GroupWithRelations = Group & GroupRelations
