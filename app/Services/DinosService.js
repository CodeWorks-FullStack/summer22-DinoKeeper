import { ProxyState } from "../AppState.js";



class DinosService{
  escape(dino) {
    console.log('escaped', dino);
    ProxyState.escapedDinos.push(dino)
    console.log(ProxyState.escapedDinos);
  }
  feed(name) {
   console.log('feeding', name, 'from the service');
  //  NOTE find the one dino that has the matching name that was passed from the click
   let dino = ProxyState.dinos.find(d => d.name == name)
   console.log(dino);
   dino.hunger += 15
   if(dino.hunger > 100){
    dino.hunger = 100
   }
  }

  makeMoney(){
    let dinos = ProxyState.dinos
    dinos.forEach(d => {
      switch(d.status){
        case 'happy':
          ProxyState.money += 100
          break
        case 'hungry':
          ProxyState.money += 60
          break
        case 'angry': 
        ProxyState.money += 75
        break
      }
    })
  }
  catch(name) {
    let dinoIndex = ProxyState.escapedDinos.findIndex(d => d.name == name)
    let dino = ProxyState.escapedDinos.find(d => d.name == name)
    ProxyState.escapedDinos.splice(dinoIndex, 1)
    dino.escaped = false
    dino.hunger = 75
    ProxyState.money -= 1000
    console.log('we recaptured', name);
  }
}

export const dinosService = new DinosService()