import {model} from '@loopback/repository'
import {Audit} from './audit.model'
import {character, id, integer} from './pg'

@model({
  settings: {
    foreignKeys: {
      fkPatientAntecedent: {
        name: 'fk_antecedent_patient',
        entity: 'Patient',
        entityKey: 'id',
        foreignKey: 'patientid'
      }
    }
  }
})
export class Antecedent extends Audit {
  @id() id?: number

  @character({ length: 200 }) personal?: string

  @character({ length: 200 }) surgical?: string

  @character({ length: 200 }) family?: string

  @character({ length: 200 }) professional?: string

  @character({ length: 200 }) habits?: string

  @character({ length: 200 }) clinician?: string

  @character({ length: 200 }) trauma?: string

  @character({ length: 200 }) allergy?: string

  @character({ length: 200 }) ago?: string

  @integer({ required: true }) patientId: number

  constructor(data?: Partial<Antecedent>) {
    super(data)
  }
}

export interface AntecedentRelations {
  // describe navigational properties here
}

export type AntecedentWithRelations = Antecedent & AntecedentRelations
