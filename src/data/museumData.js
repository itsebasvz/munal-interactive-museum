export const museumData = {
  salaA: {
    startNode: 'index',
    nodes: {
      index: {
        id: 'index',
        image: '/assets/imgs/salaA/index.jpg',
        arrows: [
          { direction: 'left', targetRoom: 'salaB', targetNode: 'index', icon: '/assets/icons/arrow-narrow-left.svg' },
          { direction: 'up', target: 'centro', icon: '/assets/icons/arrow-narrow-up.svg' },
          { direction: 'right', targetRoom: 'salaC', targetNode: 'index', icon: '/assets/icons/arrow-narrow-right.svg' }
        ]
      },
      centro: {
        id: 'centro',
        image: '/assets/imgs/salaA/centro.jpg',
        arrows: [
          { direction: 'down', target: 'index', icon: '/assets/icons/arrow-narrow-down.svg' },
          { direction: 'left', targetRoom: 'salaB', targetNode: 'index', icon: '/assets/icons/arrow-narrow-left.svg' },
          { direction: 'right', targetRoom: 'salaC', targetNode: 'index', icon: '/assets/icons/arrow-narrow-right.svg' }
        ],
        paintings: [
          // We will add painting details here later
          {
            id: 'painting_central',
            x: 50, y: 50, // Percentage coordinates
            title: 'Obras Centrales',
            description: 'Descripción de las obras centrales...',
            details: {
              author: 'Autor Desconocido',
              year: '1900',
              technique: 'Óleo sobre tela'
            }
          }
        ]
      },
      izquierda: {
        id: 'izquierda',
        image: '/assets/imgs/salaA/izquierda.jpg',
        arrows: [
          { direction: 'right', target: 'index', icon: '/assets/icons/arrow-narrow-right.svg' }
        ],
        paintings: []
      },
      derecha: {
        id: 'derecha',
        image: '/assets/imgs/salaA/derecha.jpg',
        arrows: [
          { direction: 'left', target: 'index', icon: '/assets/icons/arrow-narrow-left.svg' }
        ],
        paintings: []
      },
      centro_izquierda: {
        id: 'centro_izquierda',
        image: '/assets/imgs/salaA/centro_izquierda.jpg',
        arrows: [
          { direction: 'right', target: 'centro', icon: '/assets/icons/arrow-narrow-right.svg' },
          { direction: 'left', target: 'izquierda', icon: '/assets/icons/arrow-narrow-left.svg' } // Logic check: from center-left, left goes to left wall?
        ],
        paintings: []
      },
      // Note: 'centro-derecha.jpg' exists in assets, let's add it
      centro_derecha: {
        id: 'centro_derecha',
        image: '/assets/imgs/salaA/centro-derecha.jpg',
        arrows: [
          { direction: 'left', target: 'centro', icon: '/assets/icons/arrow-narrow-left.svg' },
          { direction: 'right', target: 'derecha', icon: '/assets/icons/arrow-narrow-right.svg' }
        ],
        paintings: []
      }
    }
  },
  salaB: {
    startNode: 'index',
    nodes: {
      index: {
        id: 'index',
        image: '/assets/imgs/salaB/planocentralB.jpg',
        arrows: [
          { direction: 'right', targetRoom: 'salaA', targetNode: 'index', icon: '/assets/icons/arrow-narrow-right.svg' }
        ]
      }
    }
  },
  salaC: {
    startNode: 'index',
    nodes: {
      index: {
        id: 'index',
        image: '/assets/imgs/salaC/planocentralC.jpg',
        arrows: [
          { direction: 'left', targetRoom: 'salaA', targetNode: 'index', icon: '/assets/icons/arrow-narrow-left.svg' }
        ]
      }
    }
  }
};
