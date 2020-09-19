const capitalized = (str) => {
    const firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1);
  }
  
console.log(capitalized('start'))

export default capitalized 