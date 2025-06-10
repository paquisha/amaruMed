import {hasMany, model} from '@loopback/repository'
import {MedicalRecord} from './medical-record.model'
import {MedicalSpecialty} from './medical-specialty.model'
import {character} from './pg'

import {Audit} from './audit.model'
import {address, dni, email, filename, id, integer, passport, phone} from './pg'
import {Specialist} from './specialist.model'

@model({
  settings: {
    foreignKeys: {
      fkMedicUser: {
        name: 'fk_medic_user',
        entity: 'tuser',
        entityKey: 'id',
        foreignKey: 'userid'
      }
    },
    indexes: {
      uniqueMedicUser: {
        keys: { userId: 1 },
        options: { unique: true }
      }
    }
  }
})
export class Medic extends Audit {
  @id() id?: number

  @dni() dni?: string

  @passport() passport?: string

  @character({ required: true, length: 25 }) lastName: string

  @character({ required: true, length: 25 }) firstName: string

  @filename() image?: string

  @phone() telephone?: string

  @phone() mobile?: string

  @email() email?: string

  @address({ required: true }) address: string

  @character({ length: 15 }) regProfessional?: string

  @integer() userId?: number

  @hasMany(() => MedicalRecord) medicalRecords: MedicalRecord[]

  @hasMany(() => MedicalSpecialty, { through: { model: () => Specialist } })
  medicalSpecialties: MedicalSpecialty[]

  constructor(data?: Partial<Medic>) {
    super(data)
  }
}

export interface MedicRelations {
  // describe navigational properties here
}

export type MedicWithRelations = Medic & MedicRelations
