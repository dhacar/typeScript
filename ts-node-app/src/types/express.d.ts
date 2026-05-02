import { Request } from "express";

export interface GoodbyeQuery {
  name?: string;
}

export interface GoodbyeRequest extends Request {
  query: GoodbyeQuery;
}