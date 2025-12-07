import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import { VirtualTour } from './components/VirtualTour.js';

const BASE = import.meta.env.BASE_URL;

document.querySelector('#app').innerHTML = `
  <nav id="main-navbar" class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color: #06131B; padding: 0.5rem 1rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div class="container-fluid">
      <!-- Left Logo: Exhibition Logo -> Index -->
      <a class="navbar-brand" href=".">
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
             <a class="nav-link" href="about.html">SOBRE NOSOTROS</a>
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

  <!-- Orientation Warning Overlay -->
  <div id="orientation-warning" style="display: none;">
    <div class="warning-content">
        <div class="rotate-icon">↻</div>
        <p>Por favor, gira tu dispositivo a modo horizontal para disfrutar del recorrido.</p>
    </div>
  </div>
`;

// Add event listener for Sala A
// We need to wait for the DOM to be updated, but since this script runs after DOM is ready (mostly), it should be fine.
// However, since we just set innerHTML, we can attach listeners immediately.
setTimeout(() => {
  const navSalaA = document.getElementById('nav-sala-a');
  if (navSalaA) {
    navSalaA.addEventListener('click', (e) => {
      e.preventDefault();
      // Reset tour to Sala A
      // We need access to the tour instance. It's created below.
      // We can expose a method on the tour or just reload/navigate.
      // Since 'tour' is a const, we can access it if we move the listener after creation or use a global.
      // But 'tour' is created at the end of this file.
      // Let's just use the tour instance which will be available in the scope if we move this logic down or use a global event.
      // Actually, the simplest way is to call tour.navigate({ targetRoom: 'salaA', targetNode: 'index' });
      // But tour is not defined yet.
    });
  }
}, 0);

const tour = new VirtualTour('tour-container');

// Wire up Navbar Links
document.getElementById('nav-sala-a').addEventListener('click', (e) => {
  e.preventDefault();
  tour.navigate({ targetRoom: 'salaA', targetNode: 'index' });
  // Close mobile menu if open
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse.classList.contains('show')) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
    bsCollapse.hide();
  }
});

document.getElementById('nav-sala-c').addEventListener('click', (e) => {
  e.preventDefault();
  tour.navigate({ targetRoom: 'salaC', targetNode: 'centro' });
  // Close mobile menu if open
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse.classList.contains('show')) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
    bsCollapse.hide();
  }
});

document.getElementById('nav-sala-b').addEventListener('click', (e) => {
  e.preventDefault();
  tour.navigate({ targetRoom: 'salaB', targetNode: 'centro' });
  // Close mobile menu if open
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse.classList.contains('show')) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
    bsCollapse.hide();
  }
});

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
const btnFullscreen = document.getElementById('btn-fullscreen');
if (btnFullscreen) {
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });
}
