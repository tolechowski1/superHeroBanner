window.onload = cycle;
const banners = [
{
    src: 'images/superheroBanners/superhero1.png',
    url: 'https://www.google.com/',
    caption: 'Superhero 1' 
},
{
    src: 'images/superheroBanners/superhero2.png',
    url: 'https://www.amazon.com/',
    caption: 'Superhero 2'
},
{
    src: 'images/superheroBanners/superhero3.png',
    url: 'http://nasa.com/',
    caption: 'Superhero 3'
},
{
    src: 'images/superheroBanners/superhero4.png',
    url: 'https://www.space.com/',
    caption: 'Superhero 4'
},
{
    src: 'images/superheroBanners/superhero5.png',
    url: 'https://www.cnn.com/',
    caption: 'Superhero 5'
},
{
    src: 'images/superheroBanners/superhero6.png',
    url: 'https://www.etsy.com/',
    caption: 'Superhero 6'
}
];
let bnrCntr = 0;

function cycle() {
    bnrCntr = bnrCntr + 1;
    if (bnrCntr == banners.length) 
       bnrCntr = 0;

    let cycler_image = document.getElementById('cycler_image');
    let cycler_text = document.getElementById('cycler_text');
    let cycler_link = document.getElementById('cycler_link');

    cycler_image.src = banners[bnrCntr].src;
    cycler_text.innerHTML = banners[bnrCntr].caption;
    cycler_link.href = banners[bnrCntr].url;
    
    if (banners[bnrCntr].url.length > 0) {
        cycler_image.style.cursor = 'pointer';
        cycler_image.onclick = function() {
            window.location.href = banners[bnrCntr].url;
        }
    } else {
        ban.style.cursor = 'default';
        ban.onclick = function() {};
    }
    setTimeout(cycle, 3000);
}
