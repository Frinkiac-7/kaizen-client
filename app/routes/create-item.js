import Route from '@ember/routing/route'

export default Route.extend({
  // model () {
  //   return this.get('store').createRecord('item', {})
  // },
  name: '',
  description: '',
  price: 0,
  category: '',
  actions: {
    createNewItem (name, description, price, category) {
    // createNewItem (model) {
      const record = {
        name: name,
        description: description,
        price: price,
        category: category
      }
      // console.log('createNewItem invoked')
      // console.log('model is', model)
      // console.log('model.name is', model.name)
      console.log('price is', price)
      console.log('record is', record)
      console.log('record.name is', record.name)
      console.log('record.price is', record.price)
      console.log('record.price is type', typeof record.price)
      this.get('store').createRecord('item', record).save()
      // this.get('store').createRecord('item', model).save()
    }
  }
})
