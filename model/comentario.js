document.addEventListener('DOMContentLoaded', () => {
    const feedbacksDiv = document.getElementById('feedbacks');
    const form = document.getElementById('commentForm');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
  
    // Pega os comentários salvos no localStorage ou array inicial
    let comments = JSON.parse(localStorage.getItem('comments')) || [
      {
        name: "Gilberto Souza",
        rating: 5,
        comment: "Amei a comida, hamburguer bem recheado!",
        avatar: "../assets/avatar1.png"
      },
      {
        name: "Paulo Queiroz",
        rating: 5,
        comment: "Ótima qualidade de comida, gostei muito!",
        avatar: "../assets/avatar2.png"
      }
    ];
  
    let commentsToShow = 2; // Quantos mostrar inicialmente
  
    // Função para criar o HTML de estrelas
    function createStars(rating) {
      let starsHTML = '';
      for(let i=0; i<5; i++) {
        starsHTML += i < rating 
          ? '<i class="fa-solid fa-star"></i>' 
          : '<i class="fa-regular fa-star"></i>';
      }
      return starsHTML;
    }
  
    // Função para criar o elemento de feedback
    function createFeedback(commentObj) {
      const div = document.createElement('div');
      div.classList.add('feedback');
      div.innerHTML = `
        <img src="${commentObj.avatar || '../assets/default-avatar.png'}" alt="Avatar" class="feedback-avatar">
        <div class="feedback-content">
          <p>
            ${commentObj.name}
            <span>${createStars(commentObj.rating)}</span>
          </p>
          <p>${commentObj.comment}</p>
        </div>
      `;
      return div;
    }
  
    // Renderiza os comentários na tela, limitando pela variável commentsToShow
    function renderComments() {
      feedbacksDiv.innerHTML = '';
      const toDisplay = comments.slice(0, commentsToShow);
      toDisplay.forEach(c => feedbacksDiv.appendChild(createFeedback(c)));
  
      if (commentsToShow >= comments.length) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'inline-block';
      }
    }
  
    // Evento do botão "Ver mais Avaliações"
    loadMoreBtn.addEventListener('click', () => {
      commentsToShow += 2;
      renderComments();
    });
  
    // Quando o formulário for enviado
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const rating = parseInt(form.rating.value);
      const comment = form.comment.value.trim();
  
      if (!name || !rating || !comment) return alert('Por favor, preencha todos os campos!');
  
      // Novo comentário
      const newComment = {
        name,
        rating,
        comment,
        avatar: '../assets/default-avatar.png' // pode mudar para um avatar padrão
      };
  
      // Adiciona no array e salva no localStorage
      comments.unshift(newComment);
      localStorage.setItem('comments', JSON.stringify(comments));
  
      // Reseta o formulário
      form.reset();
  
      // Atualiza a visualização e mostra no topo
      commentsToShow = Math.max(2, commentsToShow + 1);
      renderComments();
    });
  
    // Inicializa a renderização
    renderComments();
  });
  


  const stars = document.querySelectorAll('#star-rating i');
const ratingInput = document.getElementById('rating');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = parseInt(star.getAttribute('data-value'));
    ratingInput.value = value;

    // Atualiza visual das estrelas
    stars.forEach(s => {
      if (parseInt(s.getAttribute('data-value')) <= value) {
        s.classList.remove('fa-regular');
        s.classList.add('fa-solid', 'star-filled');
      } else {
        s.classList.remove('fa-solid', 'star-filled');
        s.classList.add('fa-regular');
      }
    });
  });
});
