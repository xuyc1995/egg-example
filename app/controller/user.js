'use strict';

const Controller = require('app').Controller;

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;
    const list = await ctx.service.user.find();
    console.log(list);
    // await ctx.render('/test-list.tpl', { list: list })
  }
}

module.exports = UserController;
