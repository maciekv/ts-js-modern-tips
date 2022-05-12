// formatting object in console log
const item = {
  pathname: 'pathname',
  search: 'search',
  state: {
    foo: 'foo',
    active: true,
  },
  hash: 'to_jest_stosikowy_hash!123',
  id: 123123,
};

console.log(item);
/*
   {pathname: "pathname", search: "search", state: {…}, hash: "to_jest_stosikowy_hash!123"…}
*/

console.log(JSON.stringify(item, null, 4));
/*
 {
    "pathname": "pathname",
    "search": "search",
    "state": {
        "foo": "foo",
        "active": true
    },
    "hash": "to_jest_stosikowy_hash!123",
    "id": 123123
}  
 */

// conditionally add properties
const isValid = true;
const age = 55;
const person = {
  id: '12fs',
  name: 'John',
  ...((isValid && { active: true }) as {}), // typescript 4.x
  // ...(isValid && {active: true}) // typescript 3.x ,
};

console.log('person', person);

// destructuring with alias
const device = {
  name: 'iPhone',
  model: '17 ProMax',
};
const { model: version } = device;

console.log('version', version);
