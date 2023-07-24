import { MongoDocument } from "./mongoDocument.type";

export interface User extends MongoDocument {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
