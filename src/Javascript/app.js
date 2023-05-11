let copyrightYear = document.querySelector("[data-year]");
let currentYear = new Date().getFullYear();
copyrightYear.textContent = `${currentYear}`;