const posts = [
  {
    title: 'Cómo estructurar mejor un proyecto frontend',
    category: 'Desarrollo',
    date: '12 mayo 2026',
    readTime: '4 min de lectura',
    excerpt: 'Aprende a organizar carpetas, componentes y estilos para que tu código sea más mantenible y escalable.',
    link: '#'
  },
  {
    title: '3 ideas para mejorar la experiencia de usuario en una landing page',
    category: 'UX',
    date: '20 abril 2026',
    readTime: '6 min de lectura',
    excerpt: 'Pequeños cambios de diseño y organización pueden mejorar mucho la claridad y la conversión.',
    link: '#'
  },
  {
    title: 'Guía rápida para optimizar rendimiento web',
    category: 'Performance',
    date: '30 marzo 2026',
    readTime: '5 min de lectura',
    excerpt: 'Usar imágenes adecuadas, reducir scripts y mejorar la estructura del sitio puede marcar una gran diferencia.',
    link: '#'
  },
  {
    title: 'Diseño limpio: menos es más en interfaces modernas',
    category: 'Diseño',
    date: '14 febrero 2026',
    readTime: '3 min de lectura',
    excerpt: 'Un diseño sencillo, ordenado y visualmente claro suele transmitir más confianza y valor.',
    link: '#'
  }
];

const featuredPosts = document.getElementById('featured-posts');
const featuredGrid = document.getElementById('featured-grid');

function renderPosts() {
  featuredGrid.innerHTML = posts.map(post => `
    <article class="post-card">
      <div class="post-top">
        <span class="post-tag">${post.category}</span>
        <span class="post-date">${post.date}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <div class="post-meta">
        <span>${post.readTime}</span>
        <a href="${post.link}">Leer más →</a>
      </div>
    </article>
  `).join('');
}

renderPosts();
