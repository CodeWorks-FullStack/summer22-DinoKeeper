


export class Dino{
  // NOTE model classes need a constructor to build the blueprint of the dino
  constructor(species, name, emoji, carnivore, weight, height){
    this.species = species,
    this.name = name,
    this.emoji = emoji,
    this.carnivore = carnivore,
    // NOTE the or works as an optional value
    this.weight = weight || 'not specified'
    // NOTE when creating a dino, you cannot set the hunger and status, they are automatically started at 100 and happy
    this.hunger = 100
    this.status = 'happy'
    this.escaped = false
  }


  get Template(){
    return `
    <div id="${this.name}" class="col-4 border border-5 border-secondary p-0"> 
      <div class="pen">
          <marquee behavior="alternate" direction="right" scrolldelay="${Math.random()*1000}">
            <marquee behavior="alternate" direction="up" scrolldelay="${Math.random()*1000}">
              <h2 class="animal happy" onclick="app.dinosController.feed('${this.name}')">
                ${this.emoji}
              </h2>
            </marquee>
          </marquee>
        </div>
        <div class="progress">
          <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style="width: ${this.hunger}%"
            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${this.hunger}</div>
        </div>
        <p class="bg-dark text-light text-center m-0"><b>${this.name} | ${this.species} | <span class="status">${this.status}</span></b></p>
    </div>`
  }

  get escapedTemplate(){
    return `
    <div class="escaped">
      <marquee behavior="alternate" direction="${Math.random() > .5 ? 'right': 'left'}" scrolldelay="150" scrollammount="10">
        <marquee behavior="alternate" direction="${Math.random() > .5 ? 'down': 'up'}" scrolldelay="30">
          <marquee behavior="alternate" direction="${Math.random() > .5 ? 'left': 'right'}" scrolldelay="10" scrollammount="20">
          <marquee behavior="alternate" direction="${Math.random() > .5 ? 'up': 'down'}" scrolldelay="80" scrollammount="15">
          <h2 class="animal happy" onclick="app.dinosController.catch('${this.name}')">
            ${this.emoji}
          </h2>
       </marquee>
       </marquee>
      </marquee>
    </marquee>
  </div>
    `
  }

}
// new Dino('Cat-rex','Lori', '🐱‍🐉', true)
// new Dino('Cat-rex','Lori', '🐱‍🐉', true, 5)
