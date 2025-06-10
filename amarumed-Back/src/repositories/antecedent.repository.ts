import {inject} from '@loopback/core'
import {DefaultCrudRepository} from '@loopback/repository'
import {AmaruMedPgcDataSource} from '../datasources'
import {Antecedent, AntecedentRelations} from '../models'

export class AntecedentRepository extends DefaultCrudRepository<
  Antecedent,
  typeof Antecedent.prototype.id,
  AntecedentRelations
> {
  constructor(@inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource) {
    super(Antecedent, dataSource)
  }
}
