export class Player {
    name;
    level;
    points;
    
    constructor(name,level,points) {
      this.name=name;
      this.level=level;
      this.points=points;
      
    }
  info(){
    return (`${this.name} has reached Level ${this.level}, points ${this.points}!`)
   }
  levelUp(){
    this.level=this.level+1;
   }
   winPoints(){
    this.points+=1;
    if(this.points>=5){
        this.levelUp()
         this.points-=5;
      } 
   }

  }
  
  const player1= new Player("Tara",6,4);
  player1.winPoints();
  console.log(player1.info());
  //player1.levelUp();
  //console.log(player1.info());