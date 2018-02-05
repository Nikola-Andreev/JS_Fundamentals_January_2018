function solution(arr) {
    let store = []
    for (let item of arr) {
        if(typeof item === 'number') {
            store.push(item)
        } else {
            if(store.length > 1) {
                let num1 = store.pop()
                let num2 = store.pop()
                switch (item) {
                    case '+': store.push(num1 + num2);break
                    case '-': store.push(num2 - num1);break
                    case '*': store.push(num1 * num2);break
                    case '/': store.push(num2 / num1);break
                    default:break
                }
            } else {
                console.log('Error: not enough operands!')
                return
            }
        }
    }
    store.length > 1 ? console.log('Error: too many operands!') : console.log(store[0])
}

solution([3, 4, '+'])
solution([5, 3, 4, '*', '-'])
solution([7, 33, 8, '-'])
solution([15, '/'])
solution([31, 2, '+', 11, '/'])
solution([-1, 1, '+', 101, '*', 18, '+', 3, '/'])