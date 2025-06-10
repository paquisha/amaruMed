import {hasMany, model} from '@loopback/repository'
import {Audit} from './audit.model'
import {Disease} from './disease.model'
import {character, id} from './pg'

@model()
export class DiseaseType extends Audit {
  @id() id?: number

  @character({ length: 100, required: true }) name: string

  @hasMany(() => Disease) diseases: Disease[]

  constructor(data?: Partial<DiseaseType>) {
    super(data)
  }
}

export interface DiseaseTypeRelations {
  // describe navigational properties here
}

export type DiseaseTypeWithRelations = DiseaseType & DiseaseTypeRelations
