import Route from '@ember/routing/route'

export default Route.extend({
  // model () {
    // go get the necessary list
    // return this.get('store').findAll('item')
  model (params) {
    console.log('params is', params)
    console.log('params', params.item_id)
    // console.log('return is', this.get('store').findRecord('item', params.item_id))
      // go get the necessary list
    return this.get('store').findRecord('item', params.item_id)
  // }
  },
  actions: {
    deleteItem (item) {
      console.log('')
      console.log('Invoking deleteItem')
      console.log('item is', item)
      item.destroyRecord()
      // this.sendAction('editEntry', model)
    }
  }
})
