import {Entity, model} from '@loopback/repository'
import {character, id} from './pg'

@model({
  settings: {
    indexes: {
      uniqueModuleName: {
        keys: { name: 1 },
        options: { unique: true }
      }
    }
  }
})
export class Module extends Entity {
  @id({ serial: false }) id?: number

  @character({ required: true, length: 25 }) name: string

  constructor(data?: Partial<Module>) {
    super(data)
  }
}

export interface ModuleRelations {
  // describe navigational properties here
}

export type ModuleWithRelations = Module & ModuleRelations
