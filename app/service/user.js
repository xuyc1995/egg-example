'use strict';

const Service = require('app').Service;
class UserService extends Service {
  async find() {
    const user = await this.app.mysql.get('info', { id: 1 });
    console.log(user);
    return { user };
  }
}
module.exports = UserService;
