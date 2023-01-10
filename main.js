function generateKey(length, characters) {
  if (length < 1) return "Length < 1";
  let result = "";

  while (length) {
    result += characters[Math.floor(Math.random() * characters.length)];
    length--;
  }

  return result;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

if (characters.length) {
  const key = generateKey(15, characters);
  console.log(key);
}
