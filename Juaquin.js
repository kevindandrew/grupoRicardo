//  api del coso
async function traerDatos(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Error al obtener los datos de la API');
    }
    
    const data = await response.json();
    console.log(data);
    
    return data; 
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
}
const url = 'https://rickandmortyapi.com/api/character/';
traerDatos(url);

 
// eventos de scroll
 
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 300;

  const title = document.getElementById('hero-title');
  const background = document.getElementById('hero-bg');
  const heroContainer = document.getElementById('hero-container');

  const opacityTitle = Math.max(1 - scrollY / maxScroll, 0);
  const scaleTitle = 1 + scrollY / 500;
  title.style.opacity = opacityTitle.toFixed(2);
  title.style.transform = `scale(${scaleTitle.toFixed(3)})`;

  const opacityBg = Math.max(1 - scrollY / (maxScroll * 0.8), 0);
  background.style.opacity = opacityBg.toFixed(2);

  heroContainer.style.zIndex = scrollY > maxScroll ? '0' : '10';
});
