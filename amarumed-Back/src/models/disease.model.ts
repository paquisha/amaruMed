import {belongsTo, model} from '@loopback/repository'
import {Audit} from './audit.model'
import {DiseaseType} from './disease-type.model'
import {character, id, text} from './pg'

@model({
  settings: {
    foreignKeys: {
      fkUserRole: {
        name: 'fk_disease_diseasetype',
        entity: 'DiseaseType',
        entityKey: 'id',
        foreignKey: 'diseasetypeid'
      }
    }
  }
})
export class Disease extends Audit {
  @id() id?: number

  @character({ length: 10 }) code?: string

  @text({}) name: string

  @text({}) description?: string

  @text({}) actions?: string

  @belongsTo(() => DiseaseType, {}, { required: true }) diseaseTypeId: number

  constructor(data?: Partial<Disease>) {
    super(data)
  }
}

export interface DiseaseRelations {
  // describe navigational properties here
}

export type DiseaseWithRelations = Disease & DiseaseRelations
