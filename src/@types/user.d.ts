interface IUser {
  id: string
  name: string
  email: string
}

interface ICreateUser {
  name: string
  email: string
  password: string
}

interface IUserWithToken {
  user: IUser,
  token: string
}

interface IAuthentication {
  email: string
  password?: string
}

interface ISocialAuthentication {
  provider: string
  email: string
  accessToken: string
  user?: any;
}