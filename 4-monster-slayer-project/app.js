function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      roundCounter: 0,
      surrendered: false,
      logs: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.roundCounter % 3 !== 0;
    },
    results() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        return "Draw";
      } else if (this.playerHealth > 0 && this.monsterHealth <= 0) {
        return "You win";
      } else if ((this.playerHealth <= 0 && this.monsterHealth > 0) || this.surrendered) {
        return "You loose";
      } else {
        return "";
      }
    },
  },
  methods: {
    getActionTypeClass(actionType) {
      return actionType === "attack" ? "log--damage" : "log--heal";
    },
    getActionByClass(actionBy) {
      return actionBy === "player" ? "log--player" : "log--monster";
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.roundCounter = 0;
      this.surrendered = false;
      this.logs = [];
    },
    attackMonster() {
      this.roundCounter++;
      const damage = generateRandomInt(5, 12);
      this.monsterHealth -= damage;
      this.addLog("player", "attack", damage);
      this.attackPlayer();
    },
    specialAttackMonster() {
      this.roundCounter++;
      const damage = generateRandomInt(10, 25);
      this.monsterHealth -= damage;
      this.addLog("player", "attack", damage);
      this.attackPlayer();
    },
    healPlayer() {
      this.roundCounter++;
      const heal = Math.min(100, generateRandomInt(8, 20));
      this.playerHealth += heal;
      this.addLog("player", "heal", heal);
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = generateRandomInt(8, 15);
      this.playerHealth -= damage;
      this.addLog("monster", "attack", damage);
    },
    addLog(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    surrender() {
      this.surrendered = true;
    },
  },
}).mount("#game");
