fetch("count.json")
  .then((response) => {
    // بررسی موفقیت‌آمیز بودن پاسخ
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // تبدیل پاسخ به فرمت JSON
  })
  .then((data) => {
    // برداشتن مقدار count از داده‌ها
    const count = data.count;
    // نمایش مقدار استخراج شده در صفحه وب
    const output = document.getElementById("likes");
    output.innerHTML = `${count}`;
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
