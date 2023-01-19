
import { AxiosError } from "axios";
import { apiUrl } from "../../lib/axios";

async function createUser(data: IUser): Promise<IUser | undefined> {
  try {
    const response = await apiUrl.post<IUser>('user', data);
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message)
   }
  }
}

async function me(token: string): Promise<IUser | undefined> {
  try {
    const response = await apiUrl.get<IUser>(`users`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message)
   }
  }
}

async function listUser(id: string): Promise<IUser | undefined> {
  try {
    const response = await apiUrl.get<IUser>(`users/${id}`);
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message)
   }
  }
}

async function deleteUser(id: string) {
  try {
    const response = await apiUrl.delete(`users/${id}`);
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message)
   }
  }
}

async function listUsers(): Promise<IUser[] | undefined> {
  try {
    const response = await apiUrl.get<IUser[]>('/users');
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message)
   }
  }
}

export { createUser, listUser, deleteUser, listUsers, me }