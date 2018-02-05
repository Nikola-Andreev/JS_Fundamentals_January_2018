function solution(str) {
    let valid = /^<message((?:\s[a-z]+="[a-zA-Z0-9 .]+")+)>((?:.|\n)+)<\/message>$/g.exec(str)
    if(valid) {
        let to = /to="([a-zA-Z0-9 .]+)"/g.exec(valid[1])
        let from = /from="([a-zA-Z0-9 .]+)"/g.exec(valid[1])
        if(from !== null && to !== null) {
            let result = `<article>\n  <div>From: <span class="sender">${from[1]}</span></div>\n`
            result += `  <div>To: <span class="recipient">${to[1]}</span></div>\n  <div>\n`
            valid[2].split(/\n/).forEach(w => result += `    <p>${w}</p>\n`)
            result += '  </div>\n</article>'
            console.log(result)
        } else {
            console.log('Missing attributes')
        }
    } else {
        console.log('Invalid message format')
    }
}

solution('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>')
//solution('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>')
//solution('<message from="Alice" timestamp="1497254112">Same old, same old</message>')
//solution('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\n' +
//    'Let\'s go out for a beer</message>')
//solution('<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>')
//solution('<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>')