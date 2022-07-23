import axios, { AxiosResponse } from "axios";
import { Person } from "./types/person";
axios.defaults.baseURL = "http://localhost:4000";

const responseBody = <T>(response: AxiosResponse<T>): T => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

export const PersonsApis = {
  list: () => requests.get<Person[]>("/persons"),
  create: (payload: Person) =>
    requests.post<void>(`/persons/add`, payload),
};
