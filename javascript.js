
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

function requiredSpace(initialPlants, weeks) {
    let plantCount = initialPlants * (2 ** weeks); 
    return plantCount * spacePerPlant;  
}
// Calculate space needed for 100 plants over 10 weeks
let spaceNeeded = requiredSpace(100, 10);  
console.log(`After 10 weeks, you will need ${spaceNeeded.toFixed(2)} square meters of space.`);



//Part 3: Errors in Judgement
try {
    const plantCount = 100 * (2 ** 10);  // Replaced Math.pow with **
    const totalSpaceNeeded = plantCount * spacePerPlant;
    
    if (totalSpaceNeeded > area) {
        throw new Error(`The required space (${totalSpaceNeeded.toFixed(2)} m²) exceeds the garden's capacity (${area.toFixed(2)} m²).`);
    } else {
        console.log(`The garden can hold the plants. Total space needed: ${totalSpaceNeeded.toFixed(2)} m².`);
    }
} catch (error) {
    console.log(`Error: ${error.message}`);
}