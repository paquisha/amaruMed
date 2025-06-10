import {model} from '@loopback/repository'
import {Audit} from './audit.model'
import {character, id} from './pg'

@model()
export class MedicalSpecialty extends Audit {
  @id() id?: number

  @character({ length: 75, required: true }) name: string

  @character({ length: 150 }) description: string

  constructor(data?: Partial<MedicalSpecialty>) {
    super(data)
  }
}

export interface MedicalSpecialtyRelations {
  // describe navigational properties here
}

export type MedicalSpecialtyWithRelations = MedicalSpecialty & MedicalSpecialtyRelations
