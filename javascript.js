
// Part 1:Growing Pains

const PI = 3.1415;
const area = PI * radius * radius;
const radius = 5;
const spacePerPlant = 0.8;
const maxPlants = (area / spacePerPlant);  

// Starting with 20 plants, doubling every week
let plantCount = 20 * (2 ** weeks);  

    if (plantCount > maxPlants * 0.8) {
        console.log("After ${weeks} weeks: Prune the plants.");
    } else if (plantCount > maxPlants * 0.5) {
        console.log("After ${weeks} weeks: Monitor the plants");
    } else {
        console.log("After ${weeks} weeks: Plant more plants");
    }

// 1 week
plantGrowth(1); 
 // 2 weeks
plantGrowth(2); 
// 3 weeks
plantGrowth(3);  

//Part 2: Thinking Bigger
