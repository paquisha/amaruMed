import {inject} from '@loopback/core'
import {DefaultCrudRepository} from '@loopback/repository'
import {AmaruMedPgcDataSource} from '../datasources'
import {Cros, CrosRelations} from '../models'

export class CrosRepository extends DefaultCrudRepository<
  Cros,
  typeof Cros.prototype.id,
  CrosRelations
> {
  constructor(@inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource) {
    super(Cros, dataSource)
  }
}
