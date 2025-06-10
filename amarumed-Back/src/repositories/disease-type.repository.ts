import {Getter, inject} from '@loopback/core'
import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository
} from '@loopback/repository'
import {AmaruMedPgcDataSource} from '../datasources'
import {Disease, DiseaseType, DiseaseTypeRelations} from '../models'
import {DiseaseRepository} from './disease.repository'

export class DiseaseTypeRepository extends DefaultCrudRepository<
  DiseaseType,
  typeof DiseaseType.prototype.id,
  DiseaseTypeRelations
> {
  public readonly diseases: HasManyRepositoryFactory<
    Disease,
    typeof DiseaseType.prototype.id
  >

  constructor(
    @inject('datasources.amarumedPGC') dataSource: AmaruMedPgcDataSource,
    @repository.getter('DiseaseRepository')
    protected diseaseRepositoryGetter: Getter<DiseaseRepository>
  ) {
    super(DiseaseType, dataSource)
    this.diseases = this.createHasManyRepositoryFactoryFor(
      'diseases',
      diseaseRepositoryGetter
    )
    this.registerInclusionResolver('diseases', this.diseases.inclusionResolver)
  }
}
