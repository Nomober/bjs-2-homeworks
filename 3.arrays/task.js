function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index] )
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter((user) => user.gender === gender).map(userAge => userAge.age).reduce((acc, age, index, array) => acc + age/array.length, 0)
}