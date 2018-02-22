console.log("hello!");
console.log('1');
$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  console.log('3')
  peopleResponse.forEach(function(person) {
    console.log('4')
    // console.log(peopleResponse.findIndex(person))
    console.log(person.name);
    console.log('5')
  });
  console.log('6')
});
console.log('2')
