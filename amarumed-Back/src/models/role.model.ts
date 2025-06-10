import {hasMany, model} from '@loopback/repository'
import {Audit} from './audit.model'
import {Module} from './module.model'
import {Permission} from './permission.model'
import {character, id} from './pg'

@model({
  settings: {
    indexes: {
      uniqueRoleName: {
        keys: { name: 1 },
        options: { unique: true }
      }
    }
  }
})
export class Role extends Audit {
  @id() id?: number

  @character({ required: true, length: 25 })
  name: string

  @character({ required: true, length: 150 })
  description: string

  @hasMany(() => Module, { through: { model: () => Permission } })
  modules: Module[]

  constructor(data?: Partial<Role>) {
    super(data)
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations
