import _ from 'lodash';


const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'will',
    role: 'seller',
  },
  {
    username: 'smith',
    role: 'customer',
  }
]

const test = `const rta = 1 + '1';`
typeof test;

const rta = _.groupBy(data, (item) => item.role);
console.log(rta)
