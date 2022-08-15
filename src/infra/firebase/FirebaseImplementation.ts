import fs from 'firebase-admin';
import serviceAccount from '../../../gastrics-183e8-firebase-adminsdk-uqcuj-0a4c87d3ce.json';
import { ICompany } from '../../application/dtos/ICompany';
import { ICompanyRepository } from '../../application/repositories/ICompanyRepository';

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

fs.initializeApp({
  credential: fs.credential.cert(params),
});

const db = fs.firestore();
export class FirebaseImplementation implements ICompanyRepository {
  async create(company: ICompany): Promise<any> {
    const companiesDB = db.collection('companies');
    const response = await companiesDB.doc().set(company);
    return response;
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  update(id: string, data: object): Promise<ICompany> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<any | null> {
    const company = await db.collection('companies').doc(id).get();
    return company;
  }
}
