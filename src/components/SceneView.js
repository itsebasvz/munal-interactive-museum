export class SceneView {
    constructor(tour) {
        this.tour = tour;
    }

    createSceneElement(nodeData) {
        const container = document.createElement('div');
        container.className = 'scene-container';
        container.style.backgroundImage = `url(${nodeData.image})`;

        // Navigation Arrows
        if (nodeData.arrows) {
            const isIndex = nodeData.id === 'index';
            let arrowContainer = container;

            if (isIndex) {
                arrowContainer = document.createElement('div');
                arrowContainer.className = 'index-nav-container';
                container.appendChild(arrowContainer);

                // 3-slot logic: Left, Up, Right
                const slots = ['left', 'up', 'right'];

                slots.forEach(direction => {
                    const arrowData = nodeData.arrows.find(a => a.direction === direction);
                    const slotEl = document.createElement('div');
                    slotEl.className = 'nav-slot';

                    if (arrowData) {
                        const arrowEl = document.createElement('div');
                        arrowEl.className = 'nav-arrow-index';

                        if (arrowData.icon) {
                            const img = document.createElement('img');
                            img.src = arrowData.icon;
                            img.className = 'nav-arrow-img';
                            arrowEl.appendChild(img);
                        } else {
                            arrowEl.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`;
                        }

                        arrowEl.addEventListener('click', (e) => {
                            e.stopPropagation();
                            this.tour.navigate(arrowData);
                        });

                        slotEl.appendChild(arrowEl);
                    }

                    arrowContainer.appendChild(slotEl);
                });

            } else {
                // Standard non-index behavior
                nodeData.arrows.forEach(arrow => {
                    const arrowEl = document.createElement('div');
                    arrowEl.className = `nav-arrow arrow-${arrow.direction}`;

                    // Determine icon source: explicit icon or fallback based on direction
                    let iconSrc = arrow.icon;
                    if (!iconSrc) {
                        // Fallback mapping
                        const directionMap = {
                            'up': 'arrow-narrow-up.svg',
                            'down': 'arrow-narrow-down.svg',
                            'left': 'arrow-narrow-left.svg',
                            'right': 'arrow-narrow-right.svg'
                        };
                        iconSrc = `/assets/icons/${directionMap[arrow.direction] || 'arrow-narrow-up.svg'}`;
                    }

                    const img = document.createElement('img');
                    img.src = iconSrc;
                    img.className = 'nav-arrow-img'; // Use same class for consistent styling
                    // Adjust size for non-index arrows if needed, or rely on CSS
                    // The CSS .nav-arrow-img has width 80px, which might be too big for the 60px container
                    // We might need a specific class or override
                    img.style.width = '40px';
                    img.style.height = '40px';

                    arrowEl.appendChild(img);

                    arrowEl.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.tour.navigate(arrow);
                    });

                    container.appendChild(arrowEl);
                });
            }
        }

        // Painting Hotspots
        if (nodeData.paintings) {
            nodeData.paintings.forEach(painting => {
                const hotspot = document.createElement('div');
                hotspot.className = 'painting-hotspot';
                hotspot.style.left = `${painting.x}%`;
                hotspot.style.top = `${painting.y}%`;
                hotspot.style.width = '10%'; // Default size, maybe configurable
                hotspot.style.height = '15%';
                hotspot.style.transform = 'translate(-50%, -50%)';

                hotspot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.tour.openDetail(painting.id);
                });

                container.appendChild(hotspot);
            });
        }

        return container;
    }
}
