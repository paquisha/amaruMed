import { DefaultCrudRepository } from '@loopback/repository'
import { Specialist, SpecialistRelations } from '../models'
import { AmaruMedPgcDataSource } from '../datasources'
import { inject } from '@loopback/core'

export class SpecialistRepository extends DefaultCrudRepository<
  Specialist,
  typeof Specialist.prototype.id,
  SpecialistRelations
> {
  constructor(@inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource) {
    super(Specialist, dataSource)
  }
}
