const getImagen = async () =>{
    try {
        const apiKey = 'GZV8qrz9mC68vuz8FhPRpyFgLHT04hJM';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await res.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
    }
    
}

getImagen();