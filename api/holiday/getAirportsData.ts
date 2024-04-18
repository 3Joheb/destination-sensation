import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore'; // Add this import for Firestore

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


interface dataSchema {
    city?: string,
    country: string,
    iata: string,
    iso: string,
    name: string,
    subd: string
}

/**
 * Retrieves an airport document from Firestore.
 * @param {string[]} iataCodes - The IATA codes of the airport.
 * @returns {Promise<object[]>} The airport document data or null if not found.
 */
export default async (iataCodes: string[]): Promise<Array<dataSchema | null>> => {

    try {
        const airportRefs = iataCodes.map(iataCode => doc(db, 'airports', iataCode));
        const airportSnapshots = await Promise.all(airportRefs.map(airportRef => getDoc(airportRef)));

        const airports = airportSnapshots.map((airportSnapshot) => {
            if (!airportSnapshot.exists()) {
                return null
            } else {
                return airportSnapshot.data()
            }
        })

        return airports as dataSchema[]
    } catch (error) {
        console.error('Error fetching airport from Firestore:', error);
        throw error;
    }
};