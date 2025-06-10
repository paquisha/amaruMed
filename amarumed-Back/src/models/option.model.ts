import {belongsTo, model} from '@loopback/repository'
import {Audit} from './audit.model'
import {Group} from './group.model'
import {character, id} from './pg'

@model({
  settings: {
    foreignKeys: {
      fkOptionGroup: {
        name: 'fk_option_group',
        entity: 'tgroup',
        entityKey: 'id',
        foreignKey: 'groupid'
      }
    },
    indexes: {
      uniqueOptionCombination: {
        keys: { name: 1, groupid: 1 },
        options: { unique: true }
      }
    }
  }
})
export class Option extends Audit {
  @id() id?: number

  @character({ required: true, length: 75 }) name: string

  @belongsTo(() => Group, {}, { required: true }) groupId: number

  constructor(data?: Partial<Option>) {
    super(data)
  }
}

export interface OptionRelations {
  // describe navigational properties here
}

export type OptionWithRelations = Option & OptionRelations
