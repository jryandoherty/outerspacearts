window.addEventListener('load', () => {
  const images = document.querySelectorAll('img');

  images.forEach(image => {
    const imageUrl = image.src;

    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => createImageBitmap(blob))
      .then(imageBitmap => {
        const canvas = document.createElement('canvas');
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        const context = canvas.getContext('2d');
        context.drawImage(imageBitmap, 0, 0);

        canvas.toBlob(webpBlob => {
          const webpUrl = URL.createObjectURL(webpBlob);
          image.src = webpUrl;
        }, 'image/webp');
      })
      .catch(error => {
        console.error('Error converting image:', error);
      });
  });
});
