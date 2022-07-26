import { Dino } from "./Models/Dinosaur.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // NOTE all you data still goes here
  /** @type {import('./Models/Value').Value[]} */
  values = []

  money = 0

  /** @type {import('./Models/Dinosaur').Dino[]} */
dinos = [
  new Dino('T-rex', 'Chomper', '🦖', true, 10),
  new Dino('Pterodactyl', 'Petree', '🐦', true),
  new Dino('Brontosaurus', 'little-foot', '🦕', true),
  new Dino('Triceratops', 'Cera', '🦏', false),
  new Dino('Saurolophus', 'Ducky', '🦎', false),
  new Dino('Stegosaurus', 'Spike', '🐢', false)
]

/** @type {import('./Models/Dinosaur').Dino[]} */
escapedDinos =[]

  // 
}

export const ProxyState = new Proxy(new AppState(), {
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
