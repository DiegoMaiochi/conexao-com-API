document.addEventListener('DOMContentLoaded', function () {
  const accessForm = document.getElementById('accessForm');
  if (accessForm) {
    accessForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const email = document.getElementById('userEmail').value;
      const senha = document.getElementById('userPassword').value;
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = '';

      try {
        const corpoRequisicao = {
          email: email,
          senha: senha
        };

        console.log('Enviando acesso:', corpoRequisicao);

        const resposta = await fetch('https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com/Autenticacao/autenticar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(corpoRequisicao)
        });

        const contentType = resposta.headers.get('Content-Type') || '';
        let dados;

        if (contentType.includes('application/json')) {
          dados = await resposta.json();
        } else {
          dados = await resposta.text();
        }

        console.log('Status:', resposta.status);
        console.log('Resposta:', dados);

        if (resposta.ok && typeof dados === 'object' && dados.token && dados.dataExpiracao) {
          localStorage.setItem('email', email);
          localStorage.setItem('dataExpiracao', dados.dataExpiracao);
          localStorage.setItem('token', dados.token);

          window.location.href = 'telaBemVindo.html';
        } else {
          if (typeof dados === 'string') {
            errorMessage.textContent = dados;
          } else if (dados.errors) {
            const erros = Object.values(dados.errors).flat().join(' ');
            errorMessage.textContent = erros;
          } else {
            errorMessage.textContent = dados?.title || 'Falha ao autenticar.';
          }
        }

      } catch (error) {
        errorMessage.textContent = 'Erro na requisição. Tente novamente mais tarde.';
        console.error('Erro ao tentar acessar:', error);
      }
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const email = document.getElementById('registerEmail').value;
      const senha = document.getElementById('registerPassword').value;
      const senhaConfirmada = document.getElementById('confirmPassword').value;
      const registerError = document.getElementById('registerError');
      registerError.textContent = '';

      if (senha !== senhaConfirmada) {
        registerError.textContent = 'As senhas não coincidem.';
        return;
      }

      const corpoRequisicao = {
        email: email,
        senha: senha,
        senhaConfirmada: senhaConfirmada
      };

      console.log('Enviando registro:', corpoRequisicao);

      try {
        const resposta = await fetch('https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com/Autenticacao/registar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(corpoRequisicao)
        });

        const contentType = resposta.headers.get('Content-Type') || '';
        let dados;

        if (contentType.includes('application/json')) {
          dados = await resposta.json();
        } else {
          dados = await resposta.text();
        }

        console.log('Status:', resposta.status);
        console.log('Resposta:', dados);

        if (resposta.ok) {
          alert('Seu registro foi realizado com sucesso!');
          window.location.href = 'index.html';
        } else {
          if (typeof dados === 'string') {
            registerError.textContent = dados;
          } else if (dados.errors) {
            const erros = Object.values(dados.errors).flat().join(' ');
            registerError.textContent = erros;
          } else {
            registerError.textContent = dados?.title || 'Falha ao registrar. Tente novamente.';
          }
        }

      } catch (error) {
        registerError.textContent = 'Erro na requisição. Tente novamente mais tarde.';
        console.error('Erro ao registrar:', error);
      }
    });
  }
});