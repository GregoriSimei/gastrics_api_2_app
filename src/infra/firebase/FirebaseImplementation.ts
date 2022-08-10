import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export class FirebaseImplementation {
  // example
  async getCities(dbInstance: any) {
    const citiesCol = collection(dbInstance, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }
}
