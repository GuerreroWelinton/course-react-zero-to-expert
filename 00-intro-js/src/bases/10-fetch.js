const apiKey = 'gGgZZxGyghuZajDQT9xOW0RhOdiYlesS';

const requestHttp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// * Una promesa pueda estar dentro de otra

// ! No se recomienda hacerla así
// requestHttp
//   .then((res) => {
//     res.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch(console.warn);

// * Para eso se encadenan así
requestHttp
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);

// TODO: Práctica personal

// * Con appendChild() solo puedo ingresar un nodo
// * Con append() se puede ingresar más de un nodo o texto separados por coma

// * appendChild() devuelve el nodo que se insertó
// * append() devuelve undefined

// const apiKey = 'gGgZZxGyghuZajDQT9xOW0RhOdiYlesS';

// const requestHttp = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`);

// requestHttp
//   .then((res) => res.json())
//   .then(({ data }) => {
//     const { username } = data;
//     const { webp: url } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;

//     const picture = document.createElement('picture');
//     const pictureTag = picture.appendChild(img);
//     console.log(pictureTag);

//     const span = document.createElement('span');
//     span.textContent = username;

//     document.body.append(username, 'Texto', picture);
//   })
//   .catch(console.warn);
