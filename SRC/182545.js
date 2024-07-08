function encrypt(str, n) {
  // تبدیل رشته به آرایه
  let txt = str.split("");

  // آرایه ای که قراره جواب ریخته شه توش
  const result = [];

  // تمامی اعداد با محور بر حسب آ سر و کار دارند
  const pivot = "a".charCodeAt(0);

  // اگر عدد بزرگ بود، فلگ تورو میشود
  let flag = false;

  // بررسی تمامی اعداد وارد شده در قالب آرایه
  txt.forEach((element) => {
    // اگر عنصر مورد بررسی خالی بود، همون وارد بشه
    if (element === " ") {
      result.push(element);
    } else {
      // عنصر اگر بزرگ بود باید کوچک بشه و در نهایت باز بزرگ بشود
      if (element === element.toUpperCase()) {
        flag = true;
        element = element.toLowerCase();
      }
      // عدد عنصر در بازه ی 0 تا 25
      let number = element.charCodeAt(0) - pivot;

      // عدد را شیفت میدهیم
      number += n;

      // اگر عدد بیشتر از 26 شد باید چرخشی طور شیفت بدهد
      while (number > 26) {
        number -= 26;
      }

      // عدد را باز به کاراکتر تبدیل میکنیم
      let char = String.fromCharCode(number + pivot);

      // اگر عدد بزرگ بود، به بزرگ باز تبدیل میشود
      if (flag) {
        char = char.toUpperCase();
      }
      // عنصر تبدیل شده در آرایه نتیجه ریخته میشود
      result.push(char);

      // فلگ به پیش فرض خود بر میگردد
      flag = false;
    }
  });

  // تبدیل آرایه نهایی به رشته
  return result.join("");
}

function decrypt(str, n) {
  // تبدیل رشته به آرایه
  let txt = str.split("");

  // آرایه ای که قراره جواب ریخته شه توش
  const result = [];

  // تمامی اعداد با محور بر حسب آ سر و کار دارند
  const pivot = "a".charCodeAt(0);

  // اگر عدد بزرگ بود، فلگ تورو میشود
  let flag = false;

  // بررسی تمامی اعداد وارد شده در قالب آرایه
  txt.forEach((element) => {
    // اگر عنصر مورد بررسی خالی بود، همون وارد بشه
    if (element === " ") {
      result.push(element);
    } else {
      // عنصر اگر بزرگ بود باید کوچک بشه و در نهایت باز بزرگ بشود
      if (element === element.toUpperCase()) {
        flag = true;
        element = element.toLowerCase();
      }
      // عدد عنصر در بازه ی 0 تا 25
      let number = element.charCodeAt(0) - pivot;

      // عدد را شیفت میدهیم
      number -= n;

      // اگر عدد منفی شد باید چرخشی طور شیفت بدهد
      while (number < 0) {
        number += 26;
      }

      // عدد را باز به کاراکتر تبدیل میکنیم
      let char = String.fromCharCode(number + pivot);

      // اگر عدد بزرگ بود، به بزرگ باز تبدیل میشود
      if (flag) {
        char = char.toUpperCase();
      }
      // عنصر تبدیل شده در آرایه نتیجه ریخته میشود
      result.push(char);

      // فلگ به پیش فرض خود بر میگردد
      flag = false;
    }
  });

  // تبدیل آرایه نهایی به رشته
  return result.join("");
}

export { encrypt, decrypt };
