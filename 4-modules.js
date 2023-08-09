// Modules
//  an 8elw na brw kati gia Modules => paw sto nodejs.org -> modules -> version pou exw -> psaaxnw auto pou 8elw

// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`hello there, ${name}`) // SOS `` k oxi ''
// }



// const names = require('./') // SOS xekinaw me ./ h opou einai ka8e fora !
// console.log(names);

const names = require('./2-names');
// const {john, peter} = require('./2-names'); // 2 ways: destructure & props
const sayHi = require('./3-utils');
const data = require('./5-alternative-flavor')
// console.log(data);

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
// sayHi(john)
// sayHi(peter)

// can also just say Require that storing it to a variable
require('./6-mind-grenade')