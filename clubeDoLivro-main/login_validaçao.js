// Elementos do formulário

const loginForm = document.getElementById('form-login');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('senha');

// Adicione um ouvinte de evento ao formulário quando ele for enviado

loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Impedir o envio do formulário

  // Obtenha os valores inseridos pelo usuário

  const loginValue = loginInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Valide o login e senha

  if (loginValue === '') {
    alert('Por favor, insira seu login.');
    return;
  }

  if (passwordValue === '') {
    alert('Por favor, insira sua senha');
    return;
  }

  // Se todos os campos forem válidos, pode enviar o formulário
  
  // loginForm.submit();

});
