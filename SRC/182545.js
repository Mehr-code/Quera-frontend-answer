function encrypt(str, n) {
  //encrypt function
}

function decrypt(str, n) {
  let txt = str.split("");
  const result = [];
  const pivot = "a".charCodeAt(0);
  txt.forEach((element) => {
    if (element === element.toLowerCase()) {
      let number = element.charCodeAt(0) - pivot;
      console.log(number);
      number = Math.abs(number - n) % 26;
      console.log(number);
      result.push(String.fromCharCode(number + pivot));
    }
  });
  console.log(result);
}

decrypt("b", 20);

// export { encrypt, decrypt };
