const drivers = [
    { name: 'Bobby',
      hometown: 'Pittsburgh' },
    { name: 'Sammy',
      hometown: 'New York' } ,
    { name: 'Sally',
      hometown: 'Cleveland' },
    { name: 'Annette',
      hometown: 'Los Angeles' },
    { name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]


function findMatching(drivers,string){
    const matches= drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase());
    return (matches);
}


function fuzzyMatch(drivers,string){
    const matches= drivers.filter(drivers => drivers[0] === string[0]);
    return (matches)
}


function matchName(drivers,string){
   const matches= drivers.filter(drivers => drivers.name === string)
   return (matches)
    
}


findMatching(drivers,"Bobby")
fuzzyMatch(drivers,"Billigus")
matchName(drivers,"Bobby")

