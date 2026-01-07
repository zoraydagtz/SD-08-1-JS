export class Player {
    name;
    level;
     constructor(name,level) {
      this.name=name;
      this.level=level;
    }
  info(){
    return (`${this.name} has reached Level ${this.level}!`)
   }
  levelUp(){
    this.level=this.level+1;
   }
    
  }
  const player1= new Player("Tara",6);
  console.log(player1.info());
  player1.levelUp();
  console.log(player1.info());