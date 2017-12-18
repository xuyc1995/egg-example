'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  async find() {
    const user = await this.app.mysql.get('info');
    return user;
  }
}
module.exports = UserService;
