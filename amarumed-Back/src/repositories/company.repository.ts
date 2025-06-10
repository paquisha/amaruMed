import {inject} from '@loopback/core'
import {DefaultCrudRepository} from '@loopback/repository'
import {AmaruMedPgcDataSource} from '../datasources'
import {Company, CompanyRelations} from '../models'

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.id,
  CompanyRelations
> {
  constructor(@inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource) {
    super(Company, dataSource)
  }
}
