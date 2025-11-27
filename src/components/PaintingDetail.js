export class PaintingDetail {
    constructor() {
        this.overlay = null;
        this.content = null;
    }

    mount(parentElement) {
        this.overlay = document.createElement('div');
        this.overlay.className = 'detail-overlay';

        this.overlay.innerHTML = `
      <div class="detail-content">
        <button class="close-btn">&times;</button>
        <h2 class="detail-title"></h2>
        <div class="detail-info"></div>
      </div>
    `;

        this.overlay.querySelector('.close-btn').addEventListener('click', () => {
            this.hide();
        });

        // Close on click outside
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.hide();
            }
        });

        parentElement.appendChild(this.overlay);
        this.content = this.overlay.querySelector('.detail-content');
    }

    show(painting) {
        if (!this.overlay) return;

        const titleEl = this.overlay.querySelector('.detail-title');
        const infoEl = this.overlay.querySelector('.detail-info');

        titleEl.textContent = painting.title;

        // Build detail HTML
        let detailsHtml = `<p>${painting.description}</p>`;
        if (painting.details) {
            detailsHtml += `
        <div style="margin-top: 2rem; border-top: 1px solid var(--color-gold-frame); padding-top: 1rem;">
          <p><strong>Autor:</strong> ${painting.details.author}</p>
          <p><strong>Año:</strong> ${painting.details.year}</p>
          <p><strong>Técnica:</strong> ${painting.details.technique}</p>
        </div>
      `;
        }
        infoEl.innerHTML = detailsHtml;

        this.overlay.classList.add('active');
    }

    hide() {
        if (this.overlay) {
            this.overlay.classList.remove('active');
        }
    }
}
