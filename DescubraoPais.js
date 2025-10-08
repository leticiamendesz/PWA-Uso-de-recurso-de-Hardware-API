const result = document.getElementById('result');
const voiceBtn = document.getElementById('voiceBtn');

// Voz
voiceBtn.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'pt-BR';
  recognition.start();

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    
    fetch("http://localhost:3000/identify/text", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ text: spokenText })
    })
    .then(res => res.json())
    .then(data => result.innerText = "País detectado: " + data.country)
    .catch(err => console.error(err));
  };
});

// Foto
document.getElementById('uploadBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('photoInput');
  if(fileInput.files.length === 0) return alert("Escolha uma foto!");

  const fileName = fileInput.files[0].name;
  
  fetch("http://localhost:3000/identify/image", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ fileName })
  })
  .then(res => res.json())
  .then(data => result.innerText = "País detectado: " + data.country)
  .catch(err => console.error(err));
});
