import {MongoClient} from 'mongodb'

let dbConnection;

export const connectDb = (funct) => {  
	MongoClient.connect('mongodb://127.0.0.1:27017/The_Hall_Sthena').then((client) => {
		dbConnection = client.db();
		return funct();
		
	}).catch(err => {
		console.log(err);
		return funct(err);
	})
}

export const getDb = () => dbConnection