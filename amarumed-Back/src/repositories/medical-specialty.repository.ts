import { DefaultCrudRepository } from '@loopback/repository'
import { MedicalSpecialtyRelations } from '../models'
import { AmaruMedPgcDataSource } from '../datasources'
import { MedicalSpecialty } from '../models'
import { inject } from '@loopback/core'

export class MedicalSpecialtyRepository extends DefaultCrudRepository<
  MedicalSpecialty,
  typeof MedicalSpecialty.prototype.id,
  MedicalSpecialtyRelations
> {
  constructor(@inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource) {
    super(MedicalSpecialty, dataSource)
  }
}
