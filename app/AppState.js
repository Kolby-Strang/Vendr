import { Snack } from "./models/Snack.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  snacks = [
    new Snack({ name: 'Triangle Chips', price: 2, id: 'A1', img: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80' }),
    new Snack({ name: 'StrongAid', price: 4, id: 'A2', img: 'https://images.unsplash.com/photo-1648313021325-d81f28d57824?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' }),
    new Snack({ name: 'Protein', price: 30, id: 'A3', img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' }),

    new Snack({ name: 'Chocolate Milk', price: 3, id: 'B1', img: 'https://images.unsplash.com/photo-1581445732587-1d78fd405616?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' }),
    new Snack({ name: 'Cookie', price: 1.5, id: 'B2', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' }),
    new Snack({ name: 'Strawberry', price: .25, id: 'B3', img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80' }),

    new Snack({ name: 'Pepsi', price: 2.25, id: 'C1', img: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1858&q=80' }),
    new Snack({ name: 'Dr. Pepper', price: 4, id: 'C2', img: 'https://images.unsplash.com/photo-1678741856694-69d23cdccc5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80' }),
    new Snack({ name: 'Mtn Dew', price: 1.5, id: 'C3', img: 'https://i5.walmartimages.com/asr/cd7be1e3-7490-4446-85e7-754a209f8538_1.9fd6e920d3f7aeb6ca088f9dfd93c560.jpeg' })
  ]

  mySnacks = []

  money = 0

  code = ''

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
