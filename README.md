# Museo Interactivo Virtual (MUNAL)

Este proyecto es una experiencia de recorrido virtual interactivo para el Museo Nacional de Arte (MUNAL), desarrollado con tecnologías web modernas. Permite a los usuarios navegar por diferentes salas, ver obras de arte en detalle y obtener información sobre el museo.

## 🚀 Características Principales

*   **Recorrido Virtual 360° (Simulado):** Navegación entre diferentes salas (Sala A, Sala B, Sala C) y perspectivas dentro de cada sala.
*   **Navegación Intuitiva:** Flechas direccionales para moverse por el espacio y cambiar de vista.
*   **Transiciones Suaves:** Efectos de "Zoom" al entrar a una sala y "Deslizamiento" al moverse lateralmente.
*   **Puntos de Interés (Hotspots):** Áreas interactivas sobre las pinturas que permiten acercarse a una vista detallada o ver información específica.
*   **Vistas de Detalle:** Acercamientos a obras específicas con navegación dedicada.
*   **Optimización Móvil:** Detección de orientación de dispositivo con pantalla de advertencia para sugerir modo horizontal (landscape).
*   **Interfaz de Usuario (UI) Personalizada:**
    *   Barra de navegación con logotipos institucionales.
    *   Modal de información con horarios y ubicación.
    *   Estilo visual coherente con la identidad del museo.

## 🛠️ Tecnologías Utilizadas

*   **Vite:** Entorno de desarrollo rápido y empaquetador.
*   **JavaScript (Vanilla):** Lógica del recorrido y manejo del estado sin frameworks pesados.
*   **HTML5 & CSS3:** Estructura y estilos, incluyendo animaciones CSS y diseño responsivo.
*   **Bootstrap 5:** Componentes de UI como el Navbar y Modales.

## 📦 Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    cd munal-interactive-museum
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar en desarrollo:**
    ```bash
    npm run dev
    ```
    Esto iniciará un servidor local (generalmente en `http://localhost:5173`).

4.  **Construir para producción:**
    ```bash
    npm run build
    ```
    Genera los archivos estáticos en la carpeta `dist`.

5.  **Previsualizar producción:**
    ```bash
    npm run preview
    ```

## 📂 Estructura del Proyecto

*   `src/`: Código fuente.
    *   `components/`: Clases JavaScript (`VirtualTour.js`, `SceneView.js`, etc.).
    *   `data/`: Datos del museo (`museumData.js`) que definen las salas y conexiones.
    *   `style.css`: Estilos globales y animaciones.
    *   `main.js`: Punto de entrada de la aplicación.
*   `public/`: Activos estáticos.
    *   `assets/imgs/`: Imágenes de las salas y obras.
    *   `assets/icons/`: Iconos de navegación y logotipos.

## 📱 Notas de Desarrollo

*   El proyecto utiliza un sistema de coordenadas basado en porcentajes para ubicar los hotspots sobre las imágenes de fondo, asegurando que se mantengan en posición relativa en diferentes tamaños de pantalla.
*   Se ha implementado una lógica de "fallback" para los iconos de las flechas, asegurando que siempre haya un indicador visual de navegación.
