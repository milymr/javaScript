const video = document.querySelector('video');
const filtro = document.querySelector('#filtro');
const capturar = document.querySelector('#capturar');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert('Erro ao acessar a câmera: ' + err);
  });
  
  filtro.addEventListener('change', () => {
    video.style.filter = filtro.value;
  });
  capturar.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  
    ctx.filter = filtro.value;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imagem = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imagem;
    link.download = 'foto.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  const tarefas = document.querySelectorAll('.tarefa');
const colunas = document.querySelectorAll('.tarefas');
tarefas.forEach(tarefa => {
    tarefa.addEventListener('dragstart', () => {
      tarefa.classList.add('arrastando');
    });
  
    tarefa.addEventListener('dragend', () => {
      tarefa.classList.remove('arrastando');
    });
  });
  colunas.forEach(coluna => {
    coluna.addEventListener('dragover', (e) => {
      e.preventDefault();
      const tarefaArrastando = document.querySelector('.arrastando');
      coluna.appendChild(tarefaArrastando);
    });
  });