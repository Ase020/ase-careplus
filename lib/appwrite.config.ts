import * as sdk from "node-appwrite";

export const {
  API_KEY,
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  DOCTOR_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
