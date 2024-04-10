import admin from 'firebase-admin'
import fs from 'fs'
import csv from 'csv-parser'

// Initialize Firebase App
admin.initializeApp({
    projectId: 'destination-sensation-beb16',
});

// Get a reference to Firestore 
const db = admin.firestore();

// Configure database connection for Firestore emulator
db.settings({ host: '127.0.0.1:8080', ssl: false });

const csvFilePath = './docs/modified_airports.csv';

// Read and import CSV data
fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
        // Set the document ID as the IATA code and import the data
        db.collection('airports').doc(row.iata).set(row);
    })
    .on('end', () => {
        console.log('Import Complete!');
    });
