import {Getter, inject} from '@loopback/core'
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository
} from '@loopback/repository'
import {AmaruMedPgcDataSource} from '../datasources'
import {Disease, DiseaseRelations, DiseaseType} from '../models'
import {DiseaseTypeRepository} from './disease-type.repository'

export class DiseaseRepository extends DefaultCrudRepository<
  Disease,
  typeof Disease.prototype.id,
  DiseaseRelations
> {
  public readonly diseaseType: BelongsToAccessor<DiseaseType, typeof Disease.prototype.id>

  constructor(
    @inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource,
    @repository.getter('DiseaseTypeRepository')
    protected diseaseTypeRepositoryGetter: Getter<DiseaseTypeRepository>
  ) {
    super(Disease, dataSource)
    this.diseaseType = this.createBelongsToAccessorFor(
      'diseaseType',
      diseaseTypeRepositoryGetter
    )
    this.registerInclusionResolver('diseaseType', this.diseaseType.inclusionResolver)
  }
}
