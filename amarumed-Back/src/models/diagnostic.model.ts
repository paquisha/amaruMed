import {model} from '@loopback/repository'
import {Audit} from './audit.model'
import {id, integer} from './pg'

@model({
  settings: {
    foreignKeys: {
      fkDiagnosticMedRec: {
        name: 'fk_diagnostic_medrec',
        entity: 'MedicalRecord',
        entityKey: 'id',
        foreignKey: 'medicalrecordid'
      },
      fkDiagnosticDisease: {
        name: 'fk_diagnostic_disease',
        entity: 'Disease',
        entityKey: 'id',
        foreignKey: 'diseaseid'
      }
    }
  },
  indexes: {
    uniqueDiagnosticCombination: {
      keys: { medicalRecordId: 1, diseaseId: 1 },
      options: { unique: true }
    }
  }
})
export class Diagnostic extends Audit {
  @id() id?: number

  @integer() medicalRecordId: number

  @integer() diseaseId: number

  constructor(data?: Partial<Diagnostic>) {
    super(data)
  }
}

export interface DiagnosticRelations {
  // describe navigational properties here
}

export type DiagnosticWithRelations = Diagnostic & DiagnosticRelations
