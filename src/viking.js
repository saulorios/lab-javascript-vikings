// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

//Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(name, health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
       
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        // if((this.health = 50) && (this.health = 75)){
            return `${this.name} has received ${damage} points of damage`
            // if(this.health < 60){
              return `${this.name} has died in act of combat`
            // }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{

    attack(){
        return this.strength
    }

    receiveDamage(damage){

        this.health = this.health - damage
            // if((this.health == 50) && (this.health = 75)){
                return `A Saxon has received ${damage} points of damage`
            // }
            if(this.health == 0){
                return `A Saxon has died in combat`
            }
       
    }
}
       

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        
    }
    saxonAttack() {

    }
    showStatus() {
        if(Saxon === 0){
            return "Vikings have won the war of the century!"
        }
    }
}
