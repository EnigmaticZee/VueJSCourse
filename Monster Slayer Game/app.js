new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
        count: 0
    },
    methods:{
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.count = 0;
        },
        attack(){
            this.playerAttacks(3,10);
            if (this.checkWin()){
                return;
            };
            this.monsterAttacks();
        },
        sAttack(){
            this.playerAttacks(10,20);
            if (this.checkWin()){
                return;
            };
            this.monsterAttacks();
        },
        heal(){
            console.log("Works");
            if (this.count < 3){
                console.log("Here");
                if (this.playerHealth <= 80){
                    this.playerHealth += 10;
                    this.turns.unshift({
                        isPlayer: true,
                        text: 'Player heals for 10'
                    });
                    this.count++;
                }
            }
            else {
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Refill Over'
                });
            }
        },
        giveUp(){
            this.gameIsRunning = false;
            alert("Try Harder Next Time");
            this.turns = []
        },
        calcDamage(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        playerAttacks(min, max){
            var damage = this.calcDamage(min,max);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            })
        },
        monsterAttacks(){
            damage = this.calcDamage(5,12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits monster for ' + damage
            });
            if (this.checkWin());
        },
        checkWin(){
            if (this.monsterHealth <= 0){
                if (confirm("You Won, Start again?")){
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0){
                if (confirm("You Lost, Start again?")){
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})