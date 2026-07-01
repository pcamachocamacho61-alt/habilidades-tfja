import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DATABASE ?? "habilidades";

if (!uri) {
throw new Error(
"No se encontró MONGODB_URI. Revisa el archivo .env.local."
);
}

declare global {
var mongodbClientPromise: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri, {
appName: "habilidades-tfja",
});

const clientPromise =
global.mongodbClientPromise ?? client.connect();

if (process.env.NODE_ENV !== "production") {
global.mongodbClientPromise = clientPromise;
}

export async function getMongoClient(): Promise<MongoClient> {
return clientPromise;
}

export async function getDatabase(): Promise<Db> {
const connectedClient = await clientPromise;
return connectedClient.db(databaseName);
}