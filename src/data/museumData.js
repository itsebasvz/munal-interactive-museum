export const museumData = {
  salaA: {
    startNode: 'index',
    nodes: {
      index: {
        id: 'index',
        image: '/assets/imgs/salaA/index.jpg',
        arrows: [
          { direction: 'left', targetRoom: 'salaB', targetNode: 'overview', icon: '/assets/icons/arrow-narrow-left.svg' },
          { direction: 'up', target: 'centro', icon: '/assets/icons/arrow-narrow-up.svg' },
          { direction: 'right', targetRoom: 'salaC', targetNode: 'overview', icon: '/assets/icons/arrow-narrow-right.svg' }
        ]
      },
      centro: {
        id: 'centro',
        image: '/assets/imgs/salaA/centro.jpg',
        arrows: [
          { direction: 'down', target: 'index', icon: '/assets/icons/arrow-narrow-down.svg' },
          { direction: 'left', targetRoom: 'salaB', targetNode: 'overview', icon: '/assets/icons/arrow-narrow-left.svg' },
          { direction: 'right', targetRoom: 'salaC', targetNode: 'overview', icon: '/assets/icons/arrow-narrow-right.svg' }
        ],
        paintings: [
          {
            id: 'grabados',
            x: 10, y: 48, w: 8, h: 25,
            targetNode: 'izquierda',
            title: 'Grabados',
            description: 'Colección de grabados...',
            details: { author: 'Varios', year: 'Siglo XX', technique: 'Grabado' }
          },
          {
            id: 'retrato_azul',
            x: 37, y: 50, w: 14, h: 35,
            targetNode: 'centro_izquierda',
            title: 'Retrato Azul',
            description: 'Retrato de mujer en tonos azules...',
            details: { author: 'Desconocido', year: '1920', technique: 'Óleo' }
          },
          {
            id: 'retrato_vestido',
            x: 62, y: 50, w: 18, h: 38,
            targetNode: 'centro_derecha',
            title: 'Retrato con Vestido',
            description: 'Mujer con vestido amplio...',
            details: { author: 'Desconocido', year: '1915', technique: 'Óleo' }
          },
          {
            id: 'retrato_hombre',
            x: 87, y: 50, w: 12, h: 30,
            targetNode: 'derecha',
            title: 'Retrato de Hombre',
            description: 'Retrato formal de caballero...',
            details: { author: 'Desconocido', year: '1930', technique: 'Óleo' }
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
        paintings: [],
        infoSection: {
          title: 'Retrato del poeta Jorge Cuesta (1949)',
          artist: 'Carlos Orozco Romero',
          year: '1949',
          technique: 'Óleo sobre tela',
          location: 'Museo Nacional de Arte (MUNAL), México',
          description: `
            <p><strong>¿Quién fue Carlos Orozco Romero? (1896–1984)</strong></p>
            <ul>
              <li>Pintor jalisciense, uno de los más importantes artistas modernos de México.</li>
              <li>No perteneció al muralismo: su obra es más íntima, simbólica y psicológica.</li>
              <li>Fue parte de la Escuela Moderna Mexicana, junto con Julio Castellanos, Abraham Ángel y Carlos Mérida.</li>
              <li>Le interesaban los retratos sobrios, con pocas distracciones, donde la expresión interna del sujeto era lo esencial.</li>
            </ul>
            <p>Su estilo era muy distinto al de Rivera, Orozco o Siqueiros: Orozco Romero prefería composiciones simples, fondos planos, y retratos que parecieran “pensar”.</p>
          `
        }
      },
      centro_izquierda: {
        id: 'centro_izquierda',
        image: '/assets/imgs/salaA/centro_izquierda.jpg',
        arrows: [
          { direction: 'right', target: 'centro', icon: '/assets/icons/arrow-narrow-right.svg' },
          { direction: 'left', target: 'izquierda', icon: '/assets/icons/arrow-narrow-left.svg' } // Logic check: from center-left, left goes to left wall?
        ],
        paintings: [],
        infoSection: {
          title: 'Retrato de Salvador Novo (popularmente conocido como “El taxi”)',
          artist: 'Abraham Ángel Card Valdes',
          year: '1922',
          technique: 'Óleo sobre cartón',
          location: 'Museo Nacional de Arte (MUNAL), Ciudad de México',
          description: `
            <p>El Retrato de Salvador Novo es una de las obras más icónicas del joven pintor mexicano Abraham Ángel (1905–1924). Salvador Novo, quien aparece en la pintura, fue uno de los escritores y cronistas más importantes de la literatura mexicana del siglo XX, miembro del grupo literario de “Los Contemporáneos”.</p>
            <p>La obra muestra a Novo sentado dentro de un taxi, representado con una postura elegante y una mirada directa, casi desafiante. Esta composición refleja tanto la personalidad sofisticada de Novo como el ambiente urbano y moderno que comenzaba a dominar la Ciudad de México en los años 20. El taxi —un símbolo claro de modernidad— ayuda a ubicar la obra dentro del contexto cultural del México posrevolucionario, donde lo cosmopolita comenzaba a mezclarse con las tradiciones locales.</p>
            <p>Abraham Ángel destacó por retratar a personajes de su círculo intelectual con una sensibilidad única. Aunque murió muy joven, dejó una obra breve pero intensa, en la que capturó la identidad urbana moderna de México. En El taxi, su estilo muestra colores planos, líneas definidas y un sentido íntimo del retrato, revelando tanto la presencia física del modelo como una dimensión psicológica.</p>
            <p>Este retrato es también un documento histórico: Novo tenía apenas alrededor de 18 años cuando posó para Ángel, y la pintura refleja el espíritu juvenil, intelectual y vanguardista que caracterizó a la generación de artistas y escritores de la época.</p>
          `
        }
      },
      // Note: 'centro-derecha.jpg' exists in assets, let's add it
      centro_derecha: {
        id: 'centro_derecha',
        image: '/assets/imgs/salaA/centro-derecha.jpg',
        arrows: [
          { direction: 'left', target: 'centro', icon: '/assets/icons/arrow-narrow-left.svg' },
          { direction: 'right', target: 'derecha', icon: '/assets/icons/arrow-narrow-right.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Retrato de Esperanza Crespo (también conocido como Retrato de Cristina Crespo)',
          artist: 'Abraham Ángel Card Valdés',
          year: 'c. 1924',
          technique: 'Óleo sobre cartón',
          location: 'Museo Nacional de Arte (MUNAL), México',
          description: `
            <p>Abraham Ángel fue un joven pintor mexicano nacido en 1905 y fallecido en 1924, a los 19 años. A pesar de su corta vida, se considera una de las figuras más prometedoras del arte moderno en México. Su estilo era muy distinto al muralismo dominante: se enfocaba en retratos íntimos, emocionales y con gran sensibilidad psicológica. Su obra completa incluye menos de 30 pinturas, lo que la hace especialmente valiosa.</p>
            <p>La mujer retratada, Esperanza Crespo (en algunos catálogos: Cristina Crespo), era hermana del crítico de arte Jorge Juan Crespo de la Serna. En este retrato, Abraham Ángel muestra a una mujer moderna para los años 20: segura, de mirada directa, con un peinado y vestimenta contemporáneos. Representa el surgimiento de una nueva identidad femenina en México.</p>
            <p>El fondo de la pintura combina un paisaje típico mexicano con elementos de modernidad, como construcciones o estructuras urbanas. Esta mezcla simboliza la transición que vivía México entre tradición y modernidad durante la década de 1920. La obra no solo retrata a una persona, sino también un momento histórico: el nacimiento de una mujer independiente en un país en transformación.</p>
            <p>Este cuadro es uno de los más conocidos de Abraham Ángel porque muestra su estilo puro: sensibilidad, introspección y una mezcla entre inocencia y modernidad. Además, es una de las últimas obras que realizó antes de su muerte, lo que le da un valor histórico y emocional adicional.</p>
          `
        }
      }
    }
  },
  salaB: {
    startNode: 'overview',
    nodes: {
      overview: {
        id: 'overview',
        image: '/assets/imgs/salaB/planocentralB.jpg',
        arrows: [
          { direction: 'left', target: 'izquierda', icon: '/assets/icons/arrow-narrow-up.svg' },
          { direction: 'down', targetRoom: 'salaA', targetNode: 'index', icon: '/assets/icons/arrow-narrow-down.svg' }
        ]
      },
      izquierda: {
        id: 'izquierda',
        image: '/assets/imgs/salaB/plano_izquierda.jpg',
        arrows: [
          { direction: 'right', target: 'overview', icon: '/assets/icons/arrow-narrow-right.svg' }
        ],
        paintings: []
      }
    }
  },
  salaC: {
    startNode: 'overview',
    nodes: {
      overview: {
        id: 'overview',
        image: '/assets/imgs/salaC/planocentralC.jpg',
        arrows: [
          { direction: 'down', targetRoom: 'salaA', targetNode: 'index', icon: '/assets/icons/arrow-narrow-down.svg' },
          { direction: 'left', target: 'centro', icon: '/assets/icons/arrow-narrow-up.svg' },
          { direction: 'right', target: 'derecha', icon: '/assets/icons/arrow-narrow-up.svg' }
        ]
      },
      centro: {
        id: 'centro',
        image: '/assets/imgs/salaC1/centro.jpg',
        arrows: [
          { direction: 'down', target: 'overview', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: []
      },
      derecha: {
        id: 'derecha',
        image: '/assets/imgs/salaC/planoderecha.jpg',
        arrows: [
          { direction: 'left', target: 'overview', icon: '/assets/icons/arrow-narrow-left.svg' }
        ],
        paintings: [
          {
            id: 'cuadro_izq',
            x: 14, y: 50, w: 15, h: 33,
            targetNode: 'derecha_cuadro_izq'
          },
          {
            id: 'cuadro_der',
            x: 84, y: 50, w: 25, h: 55,
            targetNode: 'derecha_cuadro_der'
          }
        ]
      },
      derecha_cuadro_izq: {
        id: 'derecha_cuadro_izq',
        image: '/assets/imgs/salaC/izquierda.jpg',
        arrows: [
          { direction: 'down', target: 'derecha', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Vendedora de pinole',
          artist: 'Diego Rivera',
          year: '1936',
          technique: 'Óleo sobre tela',
          location: 'Museo Nacional de Arte (MUNAL), Ciudad de México',
          description: `
            <p><em>Vendedora de pinole</em> es una pintura de caballete realizada por Diego Rivera en 1936. La obra muestra a una mujer sentada junto a un recipiente que contiene pinole, un alimento tradicional elaborado con maíz molido. A través de esta escena sencilla, Rivera exalta la vida cotidiana, el trabajo humilde y las tradiciones mexicanas.</p>
            <p>La composición utiliza colores terrosos y una iluminación suave que resaltan la serenidad y dignidad de la figura representada. Aunque Rivera es más conocido por sus murales, esta pintura demuestra su sensibilidad para retratar a las clases trabajadoras con profundo respeto y humanidad.</p>
            <p><strong>Datos principales:</strong></p>
            <ul>
              <li><strong>Dimensiones:</strong> 81.4 × 60.7 cm</li>
              <li><strong>Tema:</strong> Vida cotidiana, tradición, trabajo popular</li>
            </ul>
            <p>La obra forma parte del enfoque realista y social que caracteriza gran parte del trabajo de Rivera, mostrando la identidad y cultura mexicana a través de personajes comunes y escenas tradicionales.</p>
          `
        }
      },
      derecha_cuadro_der: {
        id: 'derecha_cuadro_der',
        image: '/assets/imgs/salaC/derecha.jpg',
        arrows: [
          { direction: 'down', target: 'derecha', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Retrato de Ana María Güido Corral',
          artist: 'Diego Rivera',
          year: 'No especificado públicamente',
          technique: 'Óleo sobre tela',
          location: 'Museo Nacional de Arte (MUNAL), Ciudad de México',
          description: `
            <p>El <em>Retrato de Ana María Güido Corral</em> es una obra realizada por Diego Rivera, recientemente incorporada al acervo del Museo Nacional de Arte (MUNAL) en 2023. Este retrato forma parte de una colección familiar que perteneció a la pintora Ana María Icaza de Xirau y a su esposo, el filósofo Ramón Xirau. La donación incluyó diversos retratos de los antepasados de la familia, entre ellos el de Ana María Güido Corral, madre de la pintora.</p>
            <p>La obra destaca dentro del conjunto por su valor histórico y por ser un ejemplo del trabajo de Rivera en retratos íntimos y familiares, menos conocidos que sus murales pero igualmente significativos. Su incorporación al MUNAL contribuye a preservar la memoria visual de una familia ligada a la vida cultural e intelectual de México.</p>
            <p><strong>Datos adicionales:</strong></p>
            <ul>
              <li><strong>Colección:</strong> Donación de la familia Xirau–Icaza (2023)</li>
              <li><strong>Importancia:</strong> Obra íntima dentro de la tradición de retratos familiares; enriquecimiento del patrimonio artístico mexicano.</li>
            </ul>
          `
        }
      }
    }
  }
};
