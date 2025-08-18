// const getImagePromise = () => new Promise((resolve) => resolve('http://localhost:5173/'));
// const getImagePromise = async () => 'http://localhost:5173/';
// getImagePromise().then(console.log);

// * El await nos permite trabajar todo el código como si fuera síncrono

const getImage = async () => {
  try {
    const apiKey = 'gGgZZxGyghuZajDQT9xOW0RhOdiYlesS';
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await res.json();

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (err) {
    console.warn(err);
  }
};

getImage();

// const getSticker = async () => {
//   try {
//     const apiKey = 'gGgZZxGyghuZajDQT9xOW0RhOdiYlesS';
//     const res = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`);
//     const { data } = await res.json();

//     const { username } = data;
//     const { webp: url, width } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;
//     img.title = 'Sticker de giphy';
//     img.style.width = `${width}px`;

//     const span = document.createElement('span');
//     span.textContent = username;
//     span.style.color = '#2fa58bff';

//     const div = document.createElement('div');
//     Object.assign(div.style, {
//       display: 'flex',
//       alignItems: 'center',
//       flexDirection: 'column',
//       gap: '16px',
//       border: '1px solid black',
//       borderRadius: '8px',
//       padding: '16px',
//       width: 'auto',
//     });
//     div.append(span, img);

//     document.body.append(div);
//   } catch (err) {
//     console.warn(err);
//   }
// };

// getSticker();
