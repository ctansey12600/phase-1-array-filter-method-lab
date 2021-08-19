function findMatching(array, string){
   let result = array.filter(function(drivers){
        return drivers.toLowerCase() === `${string}`.toLowerCase()
    })
    return result
}

function fuzzyMatch(array, string){
    let result = array.filter(function(drivers){
        return drivers.startsWith(`${string}`)
    })
    return result
}

function matchName(array, string){
    let result = array.filter(function(drivers){
        return drivers.name === `${string}`
    })
    return result
}