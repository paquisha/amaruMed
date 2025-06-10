import {Entity, model} from '@loopback/repository'
import {character, email, id, phone} from './pg'

@model({
  settings: {
    indexes: {
      uniqueCompanyRuc: {
        keys: { ruc: 1 },
        options: { unique: true }
      }
    }
  }
})
export class Company extends Entity {
  @id() id?: number

  @character({ length: 50, required: true }) name: string

  @character({ length: 25 }) smallName?: string

  @character({ length: 150 }) description?: string

  @character({ length: 50 }) logo?: string

  @phone({}) telephone?: string

  @phone({}) mobile?: string

  @email({}) email?: string

  @character({ length: 100, required: true }) address: string

  @character({ length: 50 }) manager: string

  @character({ length: 10 }) ruc?: string

  @character({ length: 25, required: true }) primaryColor: string

  @character({ length: 25, required: true }) secondaryColor: string

  constructor(data?: Partial<Company>) {
    super(data)
  }
}

export interface CompanyRelations {
  // describe navigational properties here
}

export type CompanyWithRelations = Company & CompanyRelations
