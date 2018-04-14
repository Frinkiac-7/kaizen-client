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
    editItem (item) {
      console.log('')
      console.log('Invoking editItem')
      console.log('item is', item)
      item.save()
      // this.sendAction('editEntry', model)
    }
  }
})
