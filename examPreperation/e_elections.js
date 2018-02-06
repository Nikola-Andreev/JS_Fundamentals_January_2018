function solve(arr) {
    let result = {}
    for (let obj of arr) {
        let system = obj['system']
        let candidate = obj['candidate']
        if(result.hasOwnProperty(system)) {
            if(result[system].hasOwnProperty(candidate)) {
                result[system][candidate] += obj['votes']
            } else {
                result[system][candidate] = obj['votes']
            }
        } else {
            result[system] = {}
            result[system][candidate] = obj['votes']
        }
    }
    let totalSum = 0
    for (let key in result) {
        let winner = Object.keys(result[key]).sort((a,b) => result[key][b] - result[key][a])[0]
        let total = 0
        for (let innerKey in result[key]) {
            total += result[key][innerKey]
        }
        result[key] = {}
        result[key]['name'] = winner
        result[key]['votes'] = total
        totalSum += total
    }
    let players = {}
    for (let key in result) {
        if(players.hasOwnProperty(result[key]['name'])) {
            players[result[key]['name']] += result[key]['votes']
        } else {
            players[result[key]['name']] = result[key]['votes']
        }
    }
    let sortedPlayers = Object.keys(players).sort((a,b) => players[b] - players[a])
    let sortedPercentages = Object.values(players).sort((a,b) => b - a).map(a => Math.floor(a / totalSum * 100))
    let sortedSystems = Object.keys(result).sort((a,b) => result[b]['votes'] - result[a]['votes'])
    if(sortedPercentages[0] > 50) {
        console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`)
        if(sortedPercentages.length > 1) {
            console.log(`Runner up: ${sortedPlayers[1]}`)
            for (let key of sortedSystems) {
                if(result[key]['name'] === sortedPlayers[1]) {
                    console.log(key + ': ' + result[key]['votes'])
                }
            }
        } else {
            console.log(`${sortedPlayers[0]} wins unopposed!`)
        }
    } else {
        console.log(`Runoff between ${sortedPlayers[0]} with ${sortedPercentages[0]}% and ${sortedPlayers[1]} with ${sortedPercentages[1]}%`)
    }
}

// solve([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
//     { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
//     { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
//     { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
//     { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
//     { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ])

// solve([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
//     { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
//     { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
//     { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
//     { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
//     { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
//     { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ])

// solve([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
//     { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
//     { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ])