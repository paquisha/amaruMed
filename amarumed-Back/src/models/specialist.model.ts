import {model} from '@loopback/repository'
import {Audit} from './audit.model'
import {id, integer} from './pg'

@model({
  settings: {
    foreignKeys: {
      fkSpecialistMedSPE: {
        name: 'fk_specialist_medspe',
        entity: 'MedicalSpecialty',
        entityKey: 'id',
        foreignKey: 'medicalspecialtyid'
      },
      fkSpecialistMedic: {
        name: 'fk_specialist_medic',
        entity: 'Medic',
        entityKey: 'id',
        foreignKey: 'medicid'
      }
    }
  }
})
export class Specialist extends Audit {
  @id() id?: number

  @integer({ required: true }) medicId?: number

  @integer({ required: true }) medicalSpecialtyId?: number

  constructor(data?: Partial<Specialist>) {
    super(data)
  }
}

export interface SpecialistRelations {
  // describe navigational properties here
}

export type SpecialistWithRelations = Specialist & SpecialistRelations
