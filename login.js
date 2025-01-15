document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращает перезагрузку страницы

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Получение сохраненных данных из LocalStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("Пользователь не зарегистрирован!");
    return;
  }

  // Проверка имени пользователя и пароля
  if (username === storedUser.username && password === storedUser.password) {
    alert("Вы успешно вошли в систему!");
    window.location.href = "home.html"; // Перенаправление на главную страницу
  } else {
    alert("Неверное имя пользователя или пароль!");
  }
});