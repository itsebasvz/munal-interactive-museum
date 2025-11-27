import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import { VirtualTour } from './components/VirtualTour.js';

document.querySelector('#app').innerHTML = `
  <nav class="navbar fixed-top navbar-expand-lg" style="background-color: #06131B; padding: 0.5rem 1rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div class="container-fluid">
      <!-- Left Logo: Exhibition Logo -> Index -->
      <a class="navbar-brand" href="/">
        <img src="/assets/icons/logo.png" alt="Exhibition Logo" class="logo-exhibition">
      </a>
      
      <!-- Right Logo: Munal Logo -> Modal Trigger -->
      <div class="d-flex ms-auto">
        <a href="#" data-bs-toggle="modal" data-bs-target="#munalInfoModal">
            <img src="/assets/icons/Munal-Logo-Vector.svg-.png" alt="Munal Logo" class="logo-munal">
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

  <!-- Orientation Warning Overlay -->
  <div id="orientation-warning" style="display: none;">
    <div class="warning-content">
        <div class="rotate-icon">↻</div>
        <p>Por favor, gira tu dispositivo a modo horizontal para disfrutar del recorrido.</p>
    </div>
  </div>
`;

const tour = new VirtualTour('tour-container');
