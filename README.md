# PWA-Uso-de-recurso-de-Hardware-API
Aplicação mobile. Atividade de CODING da Faculdade Senac
# TravelSnap - PWA React (Câmera + Geolocalização + Wikipedia)

## Descrição
TravelSnap é um Progressive Web App (PWA) que permite capturar fotos com a câmera, obter a geolocalização do dispositivo e buscar pontos de interesse próximos usando a Wikipedia (GeoSearch API). O app funciona offline graças ao service worker e pode ser instalado como aplicativo nativo em dispositivos mobile.

## Funcionalidades
- Captura de fotos com a câmera do dispositivo.
- Obtenção de geolocalização (latitude e longitude).
- Consulta de pontos de interesse próximos via Wikipedia GeoSearch API.
- Download das fotos capturadas.
- Suporte offline básico com service worker.
- Instalável como PWA (manifest.json incluído).

## Pré-requisitos
- Node.js e npm instalados.
- Navegador moderno com suporte a PWA, câmera e geolocalização.
- Para testes de hardware (câmera/geolocalização), preferencialmente rodar em `http://localhost` ou servidor HTTPS.

## Instalação e execução
1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd travelsnap
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute em modo desenvolvimento:
   ```bash
   npm run dev
   ```
   Abra `http://localhost:5173` no navegador.

4. Para testar o PWA build:
   ```bash
   npm run build
   npm run preview
   ```

## Estrutura de arquivos
```
public/
  index.html
  manifest.json
  sw.js
src/
  main.jsx
  App.jsx
  styles.css
package.json
```

## Uso
1. Clique em **Abrir câmera** para iniciar a câmera do dispositivo.
2. Clique em **Tirar foto** para capturar a imagem.
3. Clique em **Obter localização** para anexar coordenadas à foto.
4. Clique em **Buscar no Wikipedia** para listar pontos de interesse próximos.
5. Clique em **Baixar** para salvar a foto no dispositivo.

## Testando como PWA
- O app é instalável no dispositivo como um aplicativo nativo.
- Para validar no [PWA Builder](https://www.pwabuilder.com/), suba o build do projeto em um hosting (ex.: Netlify, Vercel ou GitHub Pages).

## Melhorias futuras
- Persistência offline das fotos usando IndexedDB.
- Cache avançado de assets com Workbox.
- Suporte para seleção de imagens da galeria do dispositivo.
- Interface de permissões amigável e tratamento de erros mais detalhado.

## Licença
MIT License

