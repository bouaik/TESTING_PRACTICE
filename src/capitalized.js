const capitalized = (str) => {
  if (str === "") return ""
  const firstLetter = str[0].toUpperCase();
  return firstLetter + str.slice(1);
};

export default capitalized;