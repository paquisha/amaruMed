import {model} from '@loopback/repository'
import {Audit} from './audit.model'
import {boolean, id, integer, text} from './pg'

/**
 * REGIONAL PHYSICAL EXAM
 */
@model({
  settings: {
    foreignKeys: {
      fkRPEMedRec: {
        name: 'fk_rpe_medrec',
        entity: 'MedicalRecord',
        entityKey: 'id',
        foreignKey: 'medicalrecordid'
      }
    }
  }
})
export class Rpe extends Audit {
  @id() id?: number

  @boolean({ default: false }) head?: boolean

  @boolean({ default: false }) neck?: boolean

  @boolean({ default: false }) chest?: boolean

  @boolean({ default: false }) abdomen?: boolean

  @boolean({ default: false }) pelvis?: boolean

  @boolean({ default: false }) extremities?: boolean

  @text() observations?: string

  @integer({ required: true }) medicalRecordId?: number

  constructor(data?: Partial<Rpe>) {
    super(data)
  }
}

export interface RpeRelations {
  // describe navigational properties here
}

export type RpeWithRelations = Rpe & RpeRelations
