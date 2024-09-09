import FetchFactory from '../factory'
import type { IUser } from '~/types/model'

class AuthModule extends FetchFactory {
  private RESOURCE = '/auth'

  async login(data: { username: string, password: string }) {
    return this.call<IUser>(
      {
        method: 'POST',
        url: `${this.RESOURCE}/login`,
        body: data,
      },
    )
  }
}

export default AuthModule
