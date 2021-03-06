import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('users')
  this.route('items')
  this.route('create-item', {path: '/items/create-item'})
  this.route('update-item', {path: '/items/update-item/:item_id'})
  this.route('delete-item', {path: '/items/delete-item/:item_id'})
})

export default Router
