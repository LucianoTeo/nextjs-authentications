import { AxiosError } from "axios";
import { apiUrl } from "../../lib/axios";

async function authenticateUser(data: IAuthentication): Promise<IUserWithToken | undefined> {
  try {
    const response = await apiUrl.post<IUserWithToken>('auth', data);
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message)
   }
  }
}

export { authenticateUser}