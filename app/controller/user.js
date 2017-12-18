'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;
    const lists = await ctx.service.user.find();
    console.log(lists);
    await ctx.render('info.tpl', { list: lists });
  }
}

module.exports = UserController;
