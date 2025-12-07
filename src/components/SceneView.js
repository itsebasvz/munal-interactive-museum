export class SceneView {
    constructor(tour) {
        this.tour = tour;
    }

    createSceneElement(nodeData) {
        const container = document.createElement('div');
        container.className = 'scene-container';
        // Background image is now set conditionally at the end or inside the wrapper

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
                        const BASE = import.meta.env.BASE_URL;
                        iconSrc = `${BASE}assets/icons/${directionMap[arrow.direction] || 'arrow-narrow-up.svg'}`;
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

                    if (arrow.rotation) {
                        arrowEl.style.transform = `rotate(${arrow.rotation}deg)`;
                    }

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
                if (painting.className) {
                    hotspot.classList.add(painting.className);
                }
                hotspot.style.left = `${painting.x}%`;
                hotspot.style.top = `${painting.y}%`;
                hotspot.style.width = `${painting.w || 10}%`;
                hotspot.style.height = `${painting.h || 15}%`;
                hotspot.style.transform = 'translate(-50%, -50%)';

                hotspot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (painting.targetNode) {
                        this.tour.navigate({ target: painting.targetNode });
                    } else {
                        this.tour.openDetail(painting.id);
                    }
                });

                container.appendChild(hotspot);
            });
        }

        if (nodeData.infoSection) {
            // Create a scrollable wrapper
            const scrollWrapper = document.createElement('div');
            scrollWrapper.className = 'scroll-wrapper';

            // 1. The Scene Background (First "Page")
            const sceneBackground = document.createElement('div');
            sceneBackground.className = 'scene-background';
            sceneBackground.style.backgroundImage = `url(${nodeData.image})`;

            // Move arrows/hotspots into sceneBackground instead of container
            // We need to re-parent the children we just added to container
            while (container.firstChild) {
                sceneBackground.appendChild(container.firstChild);
            }

            // Add scroll hint arrow
            const scrollHint = document.createElement('div');
            scrollHint.className = 'scroll-hint';
            scrollHint.innerHTML = '<span>↓</span>';
            sceneBackground.appendChild(scrollHint);

            scrollWrapper.appendChild(sceneBackground);

            // 2. The Info Section (Second "Page")
            const infoContainer = document.createElement('div');
            infoContainer.className = 'info-section container-fluid';
            infoContainer.innerHTML = `
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 ${nodeData.infoSection.colClass || 'col-lg-6'} info-content animate-on-scroll">
                        <h2 class="info-title mb-4 animate-on-scroll">${nodeData.infoSection.title}</h2>
                        <div class="info-meta mb-4 animate-on-scroll">
                            <p><strong>Artista:</strong> ${nodeData.infoSection.artist}</p>
                            <p><strong>Año:</strong> ${nodeData.infoSection.year}</p>
                            <p><strong>Técnica:</strong> ${nodeData.infoSection.technique}</p>
                            <p><strong>Ubicación:</strong> ${nodeData.infoSection.location}</p>
                        </div>
                        <div class="info-description animate-on-scroll">
                            ${nodeData.infoSection.description}
                        </div>
                    </div>
                </div>
            `;
            scrollWrapper.appendChild(infoContainer);

            container.appendChild(scrollWrapper);
            container.classList.add('has-scroll');

            // --- Parallax & Animation Logic ---

            // Parallax Effect
            scrollWrapper.addEventListener('scroll', () => {
                const scrollTop = scrollWrapper.scrollTop;
                // Move background at half speed
                sceneBackground.style.transform = `translateY(${scrollTop * 0.5}px)`;
                // Optional: Fade out scroll hint
                scrollHint.style.opacity = Math.max(0, 1 - scrollTop / 300);
            });

            // Intersection Observer for Fade-in Animations
            const observerOptions = {
                root: scrollWrapper,
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Animate only once
                    }
                });
            }, observerOptions);

            // Observe elements after they are added to DOM
            // We need a slight delay or just observe the children of the newly created element
            // Since we haven't returned container yet, we can observe the elements we just created.
            const animatedElements = infoContainer.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => observer.observe(el));

        } else {
            container.style.backgroundImage = `url(${nodeData.image})`;
        }

        return container;
    }
}
