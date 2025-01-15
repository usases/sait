document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращает перезагрузку страницы

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Проверка совпадения паролей
  if (password !== confirmPassword) {
    alert("Пароли не совпадают!");
    return;
  }

  // Сохранение данных в LocalStorage
  const userData = {
    username: username,
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(userData));
  alert("Регистрация прошла успешно!");

  // Перенаправление на страницу входа
  window.location.href = "login.html";
});