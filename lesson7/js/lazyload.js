window.onload = () => {
    console.log('READY'); 
    console.log(document.querySelectorAll('.myImage'));
    console.log(document.querySelectorAll('img[data-src]'));
}
 let loadingImag = document.querySelectorAll("img[data-src]");
 const imageOptions = {
     threshold: 1,
     rootMargin: "0px 0px 50px 0px"
 };

 const loadImages = (image) => {
     image.setAttribute('src', image.getAttribute('data-src'));
     image.onload = () => {
         image.removeAttribute('data-src');
     };
 };

 if('IntersectionObserver' in window) {
     const imgObserver = new IntersectionObserver((items, imgObserver) => {
         items.forEach((item) => {
             if(item.isIntersecting) {
                 loadImages(item.target);
                 imageObserver.unobserve(item.target);
             }
         });
     }, imageOptions);
     loadingImag.forEach((img) => {
         imageObserver.observe(img);
     });
 } else {
     loadingImag.forEach((img) => {
         loadImages(img);
     });
 }