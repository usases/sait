document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращает перезагрузку страницы

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Проверка имени пользователя и пароля
  if (username === "admin" && password === "admin") {
    window.location.href = "home.html"; // Перенаправление на главную страницу
  } else {
    alert("Неверное имя пользователя или пароль!");
  }
});