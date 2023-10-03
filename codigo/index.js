const body = document.querySelector('body');
const topBar = `<div class="top-bar">
<div class="container-layout">
  <div class="top-bar-content">
    <a href="./index.html">
      <div class='item'>
      <i class='bx bx-left-arrow-alt'></i>
        <span>
        Voltar
        </span>
      </div>
    </a>
    <a href="./index.html">
      <div class='item'>
        <i class="bx bxs-home "></i>
        <span>
        Home
        </span>
      </div>
    </a>
    <a href="./aula.html" >
      <div class='item '>
      <i class='bx bxs-graduation'></i>
        <span>
        Aulas
        </span>
      </div>
    </a>
  </div>
</div>
</div>`;
body.insertAdjacentHTML('beforeend', topBar);