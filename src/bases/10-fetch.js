const apiKey = 'GZV8qrz9mC68vuz8FhPRpyFgLHT04hJM';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then((response) => response.json())
.then(({data}) =>{
    // console.log(data.images.original.url);
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn);

