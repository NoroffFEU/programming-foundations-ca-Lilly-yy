const dog = {
    name: "Dio",
    breed: "Belgian Tervuren",
    age: 3.5,
    birthday: "September 1, 2020",
    fluffy: true,
    inTraining: true,
    hobbies: ["search and rescue training", "playing fetch", "cuddling", "doing tricks" ],
    fetch: function() {
      console.log(`${this.name} is fetching the ball!`);
    },
    spin: function() {
      console.log(`${this.name} spins around!`);
    },
    sit: function() {
      console.log(`${this.name} sits down.`);
    },
    layDown: function() {
      console.log(`${this.name} lays down.`);
    },
    bear: function() {
        console.log(`${this.name} sits up like a bear.`);
      },
    report: function() {
      console.log(`${this.name} is in training for search and rescue.`);
    }
  }
  