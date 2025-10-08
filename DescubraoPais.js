const result = document.getElementById('result');
const voiceBtn = document.getElementById('voiceBtn');

function displayCountry(data) {
  if(data.error) {
    result.innerHTML = `<p>${data.error}</p>`;
  } else {
    result.innerHTML = `
      <h3>${data.name} (${data.officialName})</h3>
      <p>Capital: ${data.capital}</p>
      <p>Região: ${data.region}</p>
      <img src="${data.flag}" alt="Bandeira de ${data.name}" width="100">
    `;
  }
}

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
    .then(data => displayCountry(data))
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
  .then(data => displayCountry(data))
  .catch(err => console.error(err));
});
