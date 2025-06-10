import {inject} from '@loopback/core'
import {DefaultCrudRepository} from '@loopback/repository'
import {AmaruMedPgcDataSource} from '../datasources'
import {Diagnostic, DiagnosticRelations} from '../models'

export class DiagnosticRepository extends DefaultCrudRepository<
  Diagnostic,
  typeof Diagnostic.prototype.id,
  DiagnosticRelations
> {
  constructor(@inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource) {
    super(Diagnostic, dataSource)
  }
}
