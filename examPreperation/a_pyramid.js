function solution(size, increment) {
    let totalHeight = Math.ceil(size / 2)
    let [stone, marble, lazuli] = [0, 0, 0]
    for (let i = 1; i <= totalHeight - 1; i++) {
        let currentStone = (size - 2) * (size - 2)
        if(i % 5 === 0) {
            lazuli += (size * size - currentStone)
        } else {
            marble += (size * size - currentStone)
        }
        stone += currentStone
        size-=2
    }
    console.log('Stone required: ' + Math.ceil(stone * increment))
    console.log('Marble required: ' + Math.ceil(marble * increment))
    console.log('Lapis Lazuli required: ' + Math.ceil(lazuli * increment))
    console.log('Gold required: ' + Math.ceil(size * size * increment))
    console.log('Final pyramid height: ' + Math.floor(totalHeight * increment))
}

// solution(11, 1)
// solution(11, 0.75)
// solution(12, 1)
// solution(23, 0.5)