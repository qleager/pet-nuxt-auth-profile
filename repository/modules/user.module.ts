import FetchFactory from '../factory'
import type { IUser } from '~/types/model'

class UserModule extends FetchFactory {
  private RESOURCE = '/user/'

  async me() {
    return this.call<IUser>(
      {
        method: 'GET',
        url: `${this.RESOURCE}/me`,
      },
    )
  }
}

export default UserModule
