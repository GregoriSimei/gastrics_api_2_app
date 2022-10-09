export interface IDeleteCompany {
    execute(id: string, cnpj:string): Promise<boolean>;
}
