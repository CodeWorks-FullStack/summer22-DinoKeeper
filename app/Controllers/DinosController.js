import { ProxyState } from "../AppState.js";
import { dinosService } from "../Services/DinosService.js";


// Private goes out of controller
function _drawDinos(){
  let dinos = ProxyState.dinos
  console.log('drawing dinos', dinos);
  let template = ''
  dinos.forEach( d => template += d.Template)
  document.getElementById('dinos').innerHTML = template
}

function _updateDinos(){
  let dinos = ProxyState.dinos
  dinos.forEach(d => {
    if(d.hunger > 50){
      d.status = 'happy'
     } else if(d.hunger > 0){
      d.status = 'hungry'
     } else {
      d.status = 'angry'
     }
    let dinoPen = document.getElementById(d.name)
    let bar = dinoPen?.querySelector('.progress-bar')
    let status = dinoPen?.querySelector('.status')
    status.innerText= d.status
    bar.innerText = d.hunger
    bar.style.width = d.hunger + '%'
  })
}

function _hunger(){
  let dinos = ProxyState.dinos
  dinos.forEach(d => {
    d.hunger -= 10
    if(d.hunger < 0){
      d.hunger = 0
      _escape(d)
    }
  })
  _updateDinos()
}

function _escape(dino){
  if(dino.escaped != true){
    dino.escaped = true
    console.warn(dino.name, 'has escaped');
    dinosService.escape(dino)
    // keeps escaped dino from re-drawing every time another escapes
    if(ProxyState.escapedDinos.length < 2){
      _drawEscapees()
    }
  }
}

function _drawEscapees(){
  let escapee = ProxyState.escapedDinos[0]
  if(escapee){
    console.log('drawing escapess');
    document.getElementById('escaped-dino').innerHTML = escapee.escapedTemplate
  } else{
    document.getElementById('escaped-dino').innerHTML = ''
  }
}

// NOTE make money is small enough, doesnt hurt to draw here
function _makeMoney(){
  dinosService.makeMoney()
  document.getElementById('money').innerText = ProxyState.money
}

// Public goes in controller
export class DinosController{
  constructor(){
    console.log('Dino Controller loaded');
    _drawDinos()
    setInterval(_hunger, 1000)
    setInterval(_makeMoney, 5000)
  }

  feed(name){
    dinosService.feed(name)
    _updateDinos()
  }

  catch(name){
    dinosService.catch(name)
    _drawEscapees()
  }
}