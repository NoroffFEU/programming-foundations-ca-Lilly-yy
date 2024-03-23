const dog = {
  name: "Dio",
  breed: {
    name: "Belgian Shepherd",
    type: "Tervueren",
    breeder: "Kennel Woodshine",
  },
  birthday: "September 1, 2020",
  fluffy: true,
  inTraining: true,
  hobbies: ["search and rescue training", "playing fetch", "cuddling", "doing tricks"],
  tricks: [
    {
      name: "fetch",
      execute: function() {
        console.log(`${dog.name} is fetching the ball!`);
      }
    },
    {
      name: "spin",
      execute: function() {
        console.log(`${dog.name} is spinning around!`);
      }
    },
    {
      name: "sit",
      execute: function() {
        console.log(`${dog.name} is sitting down!`);
      }
    },
    {
      name: "lay down",
      execute: function() {
        console.log(`${dog.name} is laying down!`);
      }
    },
    {
      name: "bear",
      execute: function() {
        console.log(`${dog.name} is sitting up like a bear.`);
      }
    },
    {
        name: "find man",
        execute: function() {
          console.log(`${dog.name} starts looking for a person that is hidden.`);
        }
      },
  ],


};


window.onload = function() {
    const breedInfoElement = document.getElementById('breedInfo');
    breedInfoElement.textContent = `${dog.breed.name} (${dog.breed.type}) - Breeder: ${dog.breed.breeder}`;
  
    const hobbiesListElement = document.getElementById('hobbiesList');
    dog.hobbies.forEach(hobby => {
      const listItem = document.createElement('li');
      listItem.textContent = hobby;
      hobbiesListElement.appendChild(listItem);
    });
  };

function showTrick(trickName) {
    const imageElement = document.getElementById('trickImage');
  
    switch (trickName) {
            case 'fetch':
              imageElement.src = "images/fetch.jpg";
              imageElement.alt = "Dio fetching";
              break;
            case 'spin':
              imageElement.src = "images/spin.jpg";
              imageElement.alt = "Dio spinning";
              break;
            case 'sit':
              imageElement.src = "images/sit.jpg";
              imageElement.alt = "Dio sitting";
              break;
            case 'lay down':
              imageElement.src = "images/laydown.jpg";
              imageElement.alt = "Dio laying down";
              break;
            case 'bear':
              imageElement.src = "images/bear.jpg";
              imageElement.alt = "Dio sitting like a bear";
              break;
            case 'bow':
                imageElement.src = "images/bow.jpg";
                imageElement.alt = "Dio bow down";
                break;
            case 'find man':
              imageElement.src = "images/findman.jpg";
              imageElement.alt = "Dio searching for a hidden person";
              break;
          }
          imageElement.style.display = "block";
      }
    
      