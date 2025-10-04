# API de Geolocalização – PWA Example

Este projeto demonstra como consumir a **API de Geolocalização do navegador** dentro de uma aplicação **React + Vite + Tailwind**, configurada como **PWA** (Progressive Web App).

---

## 📌 Sobre a API de Geolocalização

A **Geolocation API** é nativa dos navegadores modernos e permite obter a posição atual do usuário (latitude, longitude e precisão).

No código, utilizamos o método:

```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
```

* **successCallback** → Função chamada ao obter a localização com sucesso.
* **errorCallback** → Função chamada em caso de erro (ex.: usuário negou permissão).
* **options** → Parâmetros adicionais (ex.: `enableHighAccuracy`, `timeout`).

---

## ⚙️ Como funciona neste projeto

No arquivo `src/app.jsx`:

1. O usuário clica em **Obter localização**.
2. A aplicação chama `navigator.geolocation.getCurrentPosition`.
3. Se permitido, retorna:

   * Latitude
   * Longitude
   * Precisão (em metros)
4. Esses dados são exibidos na tela e também no mapa do **OpenStreetMap**.

---

## 🚀 Como rodar

1. Instale as dependências:

   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```
3. Acesse:

   ```
   http://localhost:5173
   ```

> ⚠️ A API de Geolocalização só funciona em **HTTPS** (ou em `http://localhost` para desenvolvimento).

---

## 📱 Recursos de PWA incluídos

* `manifest.json` → define nome, ícones e cores do app.
* `service-worker.js` → adiciona cache offline básico.
* Estrutura compatível com validação do **PWA Builder**.

---

## 📊 Exemplo de resposta

Quando o usuário permite acesso à localização, a API retorna um objeto como:

```json
{
  "coords": {
    "latitude": -8.0558,
    "longitude": -34.8811,
    "accuracy": 15
  },
  "timestamp": 1696432200000
}
```

---

## 📚 Referências

* [MDN – Geolocation API](https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation_API)
* [OpenStreetMap](https://www.openstreetmap.org/)
* [PWABuilder](https://www.pwabuilder.com/)
