import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './style.css';
import { VirtualTour } from './components/VirtualTour.js';

const BASE = import.meta.env.BASE_URL;

document.querySelector('#app').innerHTML = `
  <nav id="main-navbar" class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color: #06131B; padding: 0.5rem 1rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div class="container-fluid">
      <!-- Left Logo: Exhibition Logo -> Index -->
      <a class="navbar-brand" href="#" id="nav-logo">
        <img src="${BASE}assets/icons/logo.png" alt="Exhibition Logo" class="logo-exhibition">
      </a>

      <!-- Toggler for mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Navbar Links -->
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mx-3">
            <a class="nav-link active" aria-current="page" href="#" id="nav-sala-a">SALA A</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="#" id="nav-sala-b">SALA B</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="#" id="nav-sala-c">SALA C</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#contactModal">CONTACTO</a>
          </li>
          <li class="nav-item mx-3">
             <a class="nav-link" href="#" id="nav-about">SOBRE NOSOTROS</a>
          </li>
        </ul>
      </div>

      <!-- Right Logo: Munal Logo -> Modal Trigger -->
      <div class="d-flex align-items-center">
        <button id="btn-fullscreen" class="btn btn-link p-0 me-3" aria-label="Toggle Fullscreen">
            <img src="${BASE}assets/icons/arrows-maximize.svg" alt="Fullscreen" class="icon-fullscreen">
        </button>
        <a href="#" data-bs-toggle="modal" data-bs-target="#munalInfoModal">
            <img src="${BASE}assets/icons/Munal-Logo-Vector.svg-.png" alt="Munal Logo" class="logo-munal">
        </a>
      </div>
    </div>
  </nav>

  <div id="tour-container" style="width: 100%; height: 100%;"></div>

  <!-- About View (Hidden by default) -->
  <div id="about-view" class="about-page" style="display: none; overflow-y: auto; height: 100%;">
      <!-- Hero Section -->
      <header class="py-5 text-center mt-5 about-hero">
          <div class="container">
              <h1 class="display-3 fw-bold hero-title animate-on-scroll">Sobre Nosotros</h1>
              <p class="lead text-light hero-subtitle animate-on-scroll">Preservando el arte y la historia de México para el mundo.</p>
          </div>
      </header>

      <!-- Quiénes Somos -->
      <section class="py-5 section-dark">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                      <!-- Carousel -->
                      <div id="aboutCarousel" class="carousel slide shadow-lg rounded about-carousel animate-on-scroll" data-bs-ride="carousel">
                          <div class="carousel-indicators">
                              <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          </div>
                          <div class="carousel-inner rounded">
                              <div class="carousel-item active">
                                  <img src="${BASE}assets/imgs/about/munal2.jpg" class="d-block w-100 carousel-img" alt="Vista Central">
                              </div>
                              <div class="carousel-item">
                                  <img src="${BASE}assets/imgs/about/munal3.png" class="d-block w-100 carousel-img" alt="Vista Izquierda">
                              </div>
                              <div class="carousel-item">
                                  <img src="${BASE}assets/imgs/about/munal5.jpg" class="d-block w-100 carousel-img" alt="Vista Derecha">
                              </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                          </button>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <h2 class="mb-4 section-title animate-on-scroll">Quiénes Somos</h2>
                      <p class="fs-5 about-text animate-on-scroll">
                          El Museo Nacional de Arte (MUNAL) es una institución dedicada a la conservación, exhibición, estudio y difusión de las obras de arte mexicanas producidas entre la segunda mitad del siglo XVI y la primera mitad del siglo XX.
                      </p>
                      <p class="fs-5 about-text animate-on-scroll">
                          El museo impulsa constantemente proyectos innovadores que integran tecnología, educación y participación social. A través de programas interactivos y actividades colaborativas, buscamos generar nuevas formas de acercarse al arte y fomentar el pensamiento creativo en personas de todas las edades.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <!-- Valores -->
      <section class="py-5 position-relative section-values">
          <div class="container">
              <h2 class="text-center mb-5 section-title animate-on-scroll">Nuestros Valores</h2>
              <div class="row g-4">
                  <div class="col-md-4">
                      <div class="card h-100 bg-transparent border-0 text-center p-4 animate-on-scroll">
                          <div class="mb-3">
                              <div class="value-icon-container icon-palette"></div>
                          </div>
                          <h3 class="h4 text-light mb-3">Preservación</h3>
                          <p class="text-light opacity-75">Comprometidos con el cuidado y restauración de nuestro patrimonio artístico para futuras generaciones.</p>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="card h-100 bg-transparent border-0 text-center p-4 card-bordered-lr animate-on-scroll">
                          <div class="mb-3">
                              <div class="value-icon-container icon-school"></div>
                          </div>
                          <h3 class="h4 text-light mb-3">Educación</h3>
                          <p class="text-light opacity-75">Fomentamos el aprendizaje y la apreciación del arte a través de programas educativos inclusivos.</p>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="card h-100 bg-transparent border-0 text-center p-4 animate-on-scroll">
                          <div class="mb-3">
                              <div class="value-icon-container icon-world"></div>
                          </div>
                          <h3 class="h4 text-light mb-3">Inclusión</h3>
                          <p class="text-light opacity-75">Un espacio abierto para todos, promoviendo el acceso a la cultura sin distinciones.</p>
                      </div>
                  </div>

                  <!-- Accordion for More Info -->
                  <div class="row mt-5">
                      <div class="col-lg-8 mx-auto">
                          <div class="accordion about-accordion animate-on-scroll" id="accordionValues">
                              <div class="accordion-item accordion-item-custom">
                                  <h2 class="accordion-header" id="headingOne">
                                      <button class="accordion-button collapsed accordion-button-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                          <strong>¿Cuál es nuestra Misión?</strong>
                                      </button>
                                  </h2>
                                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionValues">
                                      <div class="accordion-body accordion-body-custom">
                                          Nuestra misión es conservar, estudiar y difundir el patrimonio artístico mexicano, abarcando desde el virreinato hasta la primera mitad del siglo XX. Nos dedicamos a ofrecer experiencias educativas y estéticas significativas, promoviendo el diálogo entre el pasado y el presente para fortalecer la identidad cultural de nuestros visitantes.
                                      </div>
                                  </div>
                              </div>
                              <div class="accordion-item accordion-item-custom-top-0">
                                  <h2 class="accordion-header" id="headingTwo">
                                      <button class="accordion-button collapsed accordion-button-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          <strong>¿Cómo apoyar al museo?</strong>
                                      </button>
                                  </h2>
                                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionValues">
                                      <div class="accordion-body accordion-body-custom">
                                          Existen diversas formas de contribuir al crecimiento del museo. Puedes unirte al programa "Amigos del MUNAL" para disfrutar de beneficios exclusivos, realizar donativos para la restauración de obras, o participar en nuestros voluntariados educativos y culturales. Tu apoyo es vital para mantener viva la historia del arte en México.
                                      </div>
                                  </div>
                              </div>
                              <div class="accordion-item accordion-item-custom-top-0">
                                  <h2 class="accordion-header" id="headingThree">
                                      <button class="accordion-button collapsed accordion-button-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          <strong>Horarios y Visitas</strong>
                                      </button>
                                  </h2>
                                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionValues">
                                      <div class="accordion-body accordion-body-custom">
                                          Abrimos de Martes a Domingo de 10:00 a.m. a 5:30 p.m. Ofrecemos visitas guiadas virtuales y presenciales para grupos escolares y turistas.
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Nuestro Equipo -->
      <section class="py-5 section-dark">
          <div class="container">
              <h2 class="text-center mb-5 section-title animate-on-scroll">Nuestro Equipo</h2>
              <div class="row g-4 justify-content-center">
                  <!-- Team Member 1 -->
                  <div class="col-md-6 col-lg-3">
                      <div class="card bg-dark border-0 shadow-lg h-100 team-card animate-on-scroll">
                          <img src="${BASE}assets/imgs/about/vale.jpg" class="card-img-top team-img" alt="Guillén Hernández Valeria Guadalupe">
                          <div class="card-body text-center">
                              <h5 class="card-title text-light team-name">Guillén Hernández Valeria Guadalupe</h5>
                              <p class="card-text text-muted small">Directora General</p>
                              <div class="mt-3">
                                  <a href="https://www.instagram.com/katsu_val/" target="_blank" class="btn btn-sm btn-outline-light rounded-circle me-1 social-btn"><div class="social-icon-container icon-instagram"></div></a>
                                  <a href="https://github.com/Val05Lun" target="_blank" class="btn btn-sm btn-outline-light rounded-circle social-btn"><div class="social-icon-container icon-github"></div></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- Team Member 2 -->
                  <div class="col-md-6 col-lg-3">
                      <div class="card bg-dark border-0 shadow-lg h-100 team-card animate-on-scroll">
                          <img src="${BASE}assets/imgs/about/clove.jpg" class="card-img-top team-img" alt="Ocampo Gonzalez Jan Alexis">
                          <div class="card-body text-center">
                              <h5 class="card-title text-light team-name">Ocampo Gonzalez Jan Alexis</h5>
                              <p class="card-text text-muted small">Curador en Jefe</p>
                              <div class="mt-3">
                                  <a href="https://www.instagram.com/janocampeco/" target="_blank" class="btn btn-sm btn-outline-light rounded-circle me-1 social-btn"><div class="social-icon-container icon-instagram"></div></a>
                                  <a href="https://github.com/janogonza07" target="_blank" class="btn btn-sm btn-outline-light rounded-circle social-btn"><div class="social-icon-container icon-github"></div></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- Team Member 3 -->
                  <div class="col-md-6 col-lg-3">
                      <div class="card bg-dark border-0 shadow-lg h-100 team-card animate-on-scroll">
                          <img src="${BASE}assets/imgs/about/yo.jpg" class="card-img-top team-img" alt="Sánchez Falcón César Fernando">
                          <div class="card-body text-center">
                              <h5 class="card-title text-light team-name">Sánchez Falcón César Fernando</h5>
                              <p class="card-text text-muted small">Educación y Mediación</p>
                              <div class="mt-3">
                                  <a href="https://www.instagram.com/fernandosfn_/" target="_blank" class="btn btn-sm btn-outline-light rounded-circle me-1 social-btn"><div class="social-icon-container icon-instagram"></div></a>
                                  <a href="https://github.com/fernandosfn06" target="_blank" class="btn btn-sm btn-outline-light rounded-circle social-btn"><div class="social-icon-container icon-github"></div></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- Team Member 4 -->
                  <div class="col-md-6 col-lg-3">
                      <div class="card bg-dark border-0 shadow-lg h-100 team-card animate-on-scroll">
                          <img src="${BASE}assets/imgs/about/sebas.jpg" class="card-img-top team-img" alt="Vázquez Zarco Jesús Sebastián">
                          <div class="card-body text-center">
                              <h5 class="card-title text-light team-name">Vázquez Zarco Jesús Sebastián</h5>
                              <p class="card-text text-muted small">Museografía</p>
                              <div class="mt-3">
                                  <a href="https://www.instagram.com/its.so.naif/" target="_blank" class="btn btn-sm btn-outline-light rounded-circle me-1 social-btn"><div class="social-icon-container icon-instagram"></div></a>
                                  <a href="https://github.com/itsebasvz" target="_blank" class="btn btn-sm btn-outline-light rounded-circle social-btn"><div class="social-icon-container icon-github"></div></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Footer -->
      <footer class="py-4 text-center text-light about-footer">
          <div class="container d-flex justify-content-between align-items-center flex-column flex-md-row">
              <small class="mb-2 mb-md-0 footer-copy">&copy; 2025 Museo Nacional de Arte. Todos los derechos reservados.</small>
              <div>
                  <a href="https://www.instagram.com/munalmx/" class="text-light me-3 text-decoration-none" target="_blank">
                      <div class="footer-icon-container icon-instagram"></div>
                  </a>
                  <a href="https://www.facebook.com/munal.inba/?locale=es_LA" class="text-light me-3 text-decoration-none" target="_blank">
                      <div class="footer-icon-container icon-facebook"></div>
                  </a>
                  <a href="https://x.com/MUNALmx" class="text-light text-decoration-none" target="_blank">
                      <div class="footer-icon-container icon-twitter"></div>
                  </a>
              </div>
          </div>
      </footer>
  </div>

  <!-- Munal Info Modal -->
  <div class="modal fade" id="munalInfoModal" tabindex="-1" aria-labelledby="munalInfoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="background-color: var(--color-wall-light); color: var(--color-text-light); border: 2px solid var(--color-gold-frame);">
        <div class="modal-header" style="border-bottom: 1px solid var(--color-gold-frame);">
          <h5 class="modal-title" id="munalInfoModalLabel" style="color: var(--color-painting-yellow); font-family: 'Playfair Display', serif;">Museo Nacional de Arte</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>El Museo Nacional de Arte tiene la misión de conservar, exhibir, estudiar y difundir obras de arte producidas en México, entre la segunda mitad del siglo XVI y la primera del siglo XX.</p>
          <hr style="border-color: var(--color-gold-frame);">
          <p><strong>Ubicación:</strong><br>C. de Tacuba 8, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX</p>
          <p><strong>Teléfono:</strong><br>55 8647 5430</p>
          <p><strong>Horarios:</strong><br>
          Lunes - Cerrado<br>
          Martes a Domingo 10 a.m.–5:30 p.m.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Modal -->
  <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="background-color: var(--color-wall-light); color: var(--color-text-light); border: 2px solid var(--color-gold-frame);">
        <div class="modal-header" style="border-bottom: 1px solid var(--color-gold-frame);">
          <h5 class="modal-title" id="contactModalLabel" style="color: var(--color-painting-yellow); font-family: 'Playfair Display', serif;">Contacto</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="contactForm">
            <div class="mb-3">
              <label for="contactName" class="form-label">Nombre</label>
              <input type="text" class="form-control custom-input" id="contactName" required>
            </div>
            <div class="mb-3">
              <label for="contactEmail" class="form-label">Correo Electrónico</label>
              <input type="email" class="form-control custom-input" id="contactEmail" required>
            </div>
            <div class="mb-3">
              <label for="contactSubject" class="form-label">Asunto</label>
              <select class="form-select custom-input" id="contactSubject" required>
                <option value="" selected disabled>Selecciona una opción</option>
                <option value="general">Información General</option>
                <option value="tours">Visitas Guiadas (Presenciales/Virtuales)</option>
                <option value="tech">Reportar problema técnico</option>
                <option value="feedback">Comentarios sobre la exposición</option>
                <option value="academic">Solicitud Académica/Investigación</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="contactMessage" class="form-label">Mensaje</label>
              <textarea class="form-control custom-input" id="contactMessage" rows="3" required></textarea>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="contactNewsletter">
              <label class="form-check-label" for="contactNewsletter" style="font-size: 0.9rem;">Deseo recibir información sobre futuras exposiciones y eventos del MUNAL.</label>
            </div>
            <button type="submit" class="btn btn-outline-light w-100" style="border-color: var(--color-gold-frame); color: var(--color-painting-yellow);">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Fullscreen Invite Modal -->
  <div class="modal fade" id="fullscreenModal" tabindex="-1" aria-labelledby="fullscreenModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="background-color: var(--color-wall-light); color: var(--color-text-light); border: 2px solid var(--color-gold-frame);">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title w-100 text-center" id="fullscreenModalLabel" style="color: var(--color-painting-yellow); font-family: 'Playfair Display', serif; font-size: 1.5rem;">
            Bienvenido al MUNAL Interactivo
          </h5>
        </div>
        <div class="modal-body text-center pt-4">
          <p class="fs-5 mb-4">Para disfrutar de la mejor experiencia inmersiva, te recomendamos activar el modo de pantalla completa.</p>
          <div class="d-grid gap-3 col-10 mx-auto">
            <button type="button" class="btn btn-lg btn-outline-light" id="btn-enter-fullscreen" style="border-color: var(--color-gold-frame); color: var(--color-painting-yellow); background-color: rgba(212, 175, 55, 0.1);">
              <img src="${BASE}assets/icons/arrows-maximize.svg" alt="" style="width: 20px; height: 20px; margin-right: 8px; filter: invert(1);"> 
              Entrar en Pantalla Completa
            </button>
            <button type="button" class="btn btn-link text-light text-decoration-none opacity-75" data-bs-dismiss="modal">
              Continuar sin Pantalla Completa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Orientation Warning Overlay -->
  <div id="orientation-warning" style="display: none;">
    <div class="warning-content">
        <div class="rotate-icon">↻</div>
        <p>Por favor, gira tu dispositivo a modo horizontal para disfrutar del recorrido.</p>
    </div>
  </div>
`;

// Add event listener for Sala A
// (Moved to bottom with other listeners)

const tour = new VirtualTour('tour-container');

// SPA Navigation Logic
let aboutInitialized = false;

function initAboutPage() {
  if (aboutInitialized) return;

  // Scroll Animation Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  // Parallax Effect for Hero
  const heroSection = document.querySelector('.about-hero');
  if (heroSection) {
    const aboutView = document.getElementById('about-view');
    aboutView.addEventListener('scroll', () => {
      const scrollPosition = aboutView.scrollTop;
      if (scrollPosition < window.innerHeight) {
        heroSection.style.backgroundPositionY = `${70 + scrollPosition * 0.1}%`;
        heroSection.style.backgroundPosition = `center ${50 + scrollPosition * 0.05}%`;
      }
    });
  }

  aboutInitialized = true;
}

function showAbout() {
  document.getElementById('tour-container').style.display = 'none';
  document.getElementById('about-view').style.display = 'block';

  // Update Navbar
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  document.getElementById('nav-about').classList.add('active');

  initAboutPage();
}

function showTour(room, node) {
  document.getElementById('about-view').style.display = 'none';
  document.getElementById('tour-container').style.display = 'block';

  // Update Navbar
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  if (room === 'salaA') document.getElementById('nav-sala-a').classList.add('active');
  if (room === 'salaB') document.getElementById('nav-sala-b').classList.add('active');
  if (room === 'salaC') document.getElementById('nav-sala-c').classList.add('active');

  if (room && node) {
    tour.navigate({ targetRoom: room, targetNode: node });
  }
}

// Wire up Navbar Links
document.getElementById('nav-sala-a').addEventListener('click', (e) => {
  e.preventDefault();
  showTour('salaA', 'index');
  closeMobileMenu();
});

document.getElementById('nav-logo').addEventListener('click', (e) => {
  e.preventDefault();
  showTour('salaA', 'index');
  closeMobileMenu();
});

document.getElementById('nav-sala-c').addEventListener('click', (e) => {
  e.preventDefault();
  showTour('salaC', 'centro');
  closeMobileMenu();
});

document.getElementById('nav-sala-b').addEventListener('click', (e) => {
  e.preventDefault();
  showTour('salaB', 'centro');
  closeMobileMenu();
});

document.getElementById('nav-about').addEventListener('click', (e) => {
  e.preventDefault();
  showAbout();
  closeMobileMenu();
});

function closeMobileMenu() {
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse.classList.contains('show')) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
    bsCollapse.hide();
  }
}

// Handle Deep Linking from About Page (Legacy support or direct links)
const urlParams = new URLSearchParams(window.location.search);
const targetRoom = urlParams.get('room');

if (targetRoom) {
  setTimeout(() => {
    switch (targetRoom) {
      case 'salaA':
        showTour('salaA', 'index');
        break;
      case 'salaB':
        showTour('salaB', 'centro');
        break;
      case 'salaC':
        showTour('salaC', 'centro');
        break;
    }
    window.history.replaceState({}, document.title, window.location.pathname);
  }, 100);
}

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
  // Close modal
  const contactModalEl = document.getElementById('contactModal');
  const contactModal = bootstrap.Modal.getInstance(contactModalEl);
  contactModal.hide();
  e.target.reset();
});

// Handle Fullscreen Toggle
document.addEventListener('click', (e) => {
  const btn = e.target.closest('#btn-fullscreen');
  if (btn) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
});

// Show Fullscreen Invite on Load
function showFullscreenInvite() {
  if (!document.fullscreenElement) {
    const modalEl = document.getElementById('fullscreenModal');
    if (modalEl) {
      const fullscreenModal = new bootstrap.Modal(modalEl);
      fullscreenModal.show();
    }
  }
}

if (document.readyState === 'complete') {
  setTimeout(showFullscreenInvite, 500);
} else {
  window.addEventListener('load', () => setTimeout(showFullscreenInvite, 500));
}

// Handle "Enter Fullscreen" button in modal
document.getElementById('btn-enter-fullscreen').addEventListener('click', () => {
  document.documentElement.requestFullscreen().then(() => {
    const fullscreenModalEl = document.getElementById('fullscreenModal');
    const fullscreenModal = bootstrap.Modal.getInstance(fullscreenModalEl);
    fullscreenModal.hide();
  }).catch(err => {
    console.error(`Error attempting to enable fullscreen: ${err.message}`);
    // Still hide modal if error (e.g. user denied)
    const fullscreenModalEl = document.getElementById('fullscreenModal');
    const fullscreenModal = bootstrap.Modal.getInstance(fullscreenModalEl);
    fullscreenModal.hide();
  });
});
