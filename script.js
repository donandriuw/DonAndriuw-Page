const audio = document.getElementById("miMusica");
const btn = document.getElementById("btnMusica");

function controlarMusica() {
  if (audio.paused) {
    audio.play().catch(() => {
      btn.innerHTML = "🎵 Toca para activar la música";
    });
    btn.innerHTML = "✨ Pausar Música";
  } else {
    audio.pause();
    btn.innerHTML = "🎵 Play Music";
  }
}

audio.volume = 0.6;
audio.play().catch(() => {
  btn.innerHTML = "🎵 Toca para activar la música";
});

const misRedes = [
  {
    nombre: "Youtube",
    enlace: "https://www.youtube.com/@DonAndriuw",
    icono: "▶",
    etiqueta: "Canal",
    fondo:
      "linear-gradient(135deg, rgba(255, 45, 45, 0.5), rgba(115, 0, 17, 0.7)), url('https://i.pinimg.com/736x/91/65/a5/9165a504eca1e3f58f974c8731100e2f.jpg')",
  },
  {
    nombre: "Discord",
    enlace: "https://discord.gg/YhGtUpzzgP",
    icono: "◈",
    etiqueta: "Comunidad",
    fondo:
      "linear-gradient(135deg, rgba(88, 101, 242, 0.5), rgba(30, 35, 92, 0.8)), url('https://i.pinimg.com/736x/3f/81/24/3f8124f2684170c94a3d3da4df5028af.jpg')",
  },
  {
    nombre: "Tiktok",
    enlace: "https://www.tiktok.com/@don_andriuw",
    icono: "♪",
    etiqueta: "Contenido",
    fondo:
      "linear-gradient(135deg, rgba(255, 67, 152, 0.52), rgba(47, 10, 37, 0.8)), url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80')",
  },
  {
    nombre: "X/Twitter",
    enlace: "https://x.com/DonAndriuw",
    icono: "✦",
    etiqueta: "Actualización",
    fondo:
      "linear-gradient(135deg, rgba(98, 111, 119, 0.5), rgba(19, 22, 25, 0.8)), url('https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80')",
  },
];

const caja = document.getElementById("caja-redes");

misRedes.forEach((red) => {
  const boton = document.createElement("a");
  boton.href = red.enlace;
  boton.className = "link-btn";
  boton.target = "_blank";
  boton.rel = "noopener noreferrer";
  boton.style.backgroundImage = red.fondo;
  boton.innerHTML = `
    <span class="icono" aria-hidden="true">${red.icono}</span>
    <span class="texto">
      <span class="nombre">${red.nombre}</span>
      <span class="etiqueta">${red.etiqueta}</span>
    </span>
  `;

  caja.appendChild(boton);
});
