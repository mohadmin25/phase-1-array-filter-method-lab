// Code your solution here
// function findMatching(name, drivers){
//     return name.filter(
//         (matchingNames) => matchingNames.toLowerCase() === drivers.toUpperCase()
//     );
// }

function findMatching(name, drivers) {
    return name.filter(
      (matchingNames) => matchingNames.toLowerCase() === drivers.toLowerCase()
    );
}

function fuzzyMatch(name, firstLatter){
    return name.filter(
        matchingNames => matchingNames.toLowerCase().indexOf(firstLatter.toLowerCase()) === 0
    )
}

function matchName (person, propertiesByName) {
    return person.filter(
        details => details.name === propertiesByName
    )
}