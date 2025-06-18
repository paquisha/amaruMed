import { DefaultCrudRepository } from '@loopback/repository'
import { AmaruMedPgcDataSource } from '../datasources'
import { Rpe, RpeRelations } from '../models'
import { inject } from '@loopback/core'

export class RpeRepository extends DefaultCrudRepository<
  Rpe,
  typeof Rpe.prototype.id,
  RpeRelations
> {
  constructor(@inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource) {
    super(Rpe, dataSource)
  }
}
