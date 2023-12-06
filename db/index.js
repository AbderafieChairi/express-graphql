import mongoose from 'mongoose';

const db_url = 'mongodb://127.0.0.1/test'
mongoose.connect(db_url, { useNewUrlParser: true })
    .then(() => {
        console.log('Connection established');
    })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

export default db;