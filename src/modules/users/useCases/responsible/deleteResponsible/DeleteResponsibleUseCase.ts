@injectable()
class DelteResponsibleUseCase {
  constructo(
    @inject()
    private responsibleRepository: IResponsibleRepository
  ) {}

  async execute(id: string): Promise<string> {}
}
