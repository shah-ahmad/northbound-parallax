const layers = document.querySelectorAll('.layer');

function moveLayers() {
  const distance = window.scrollY;

  layers.forEach((layer) => {
    const speed = Number(layer.dataset.speed);
    layer.style.translate = `0 ${distance * speed}px`;
  });
}

window.addEventListener('scroll', moveLayers);
moveLayers();
