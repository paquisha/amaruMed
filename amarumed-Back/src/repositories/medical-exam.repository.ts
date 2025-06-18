import { DefaultCrudRepository } from '@loopback/repository'
import { AmaruMedPgcDataSource } from '../datasources'
import { MedicalExamRelations } from '../models'
import { MedicalExam } from '../models'
import { inject } from '@loopback/core'

export class MedicalExamRepository extends DefaultCrudRepository<
  MedicalExam,
  typeof MedicalExam.prototype.id,
  MedicalExamRelations
> {
  constructor(@inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource) {
    super(MedicalExam, dataSource)
  }
}
