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
        paintings: [],
        infoSection: {
          title: 'Contemporáneos. Revista Mexicana de Cultura',
          artist: 'Varios Autores (González Rojo, Torres Bodet, Novo, etc.)',
          year: '1928–1931',
          technique: 'Publicación Impresa / Grabado',
          location: 'Museo Nacional de Arte (MUNAL), México',
          description: `
            <p>La revista se llamó <em>Contemporáneos. Revista Mexicana de Cultura</em>. Fue publicada en México entre 1928 y 1931, con periodicidad mensual. En total se editaron 43 números; el último corresponde a los números 42-43, fechado en noviembre-diciembre de 1931.</p>
            <p>Sus directores fueron inicialmente varios autores, entre ellos Enrique González Rojo, Jaime Torres Bodet, Bernardo Ortiz de Montellano, Salvador Novo y Gilberto Owen. Con el tiempo, Bernardo Ortiz de Montellano quedó como director único.</p>
            <p>La revista se imprimía con ilustraciones, incluyendo grabados y arte gráfico, lo cual explica que muchas portadas fueran visualmente elaboradas.</p>
            
            <h3>Contenido del número 34 (marzo de 1931)</h3>
            <p>El número 34, correspondiente a marzo de 1931, contiene un ensayo de Anton Giulio Bragaglia sobre cine y teatro. También incluye un texto titulado “Día de mercado”, que forma parte del contenido literario de esa edición. Aunque el número está documentado bibliográficamente, su portada no se encuentra digitalizada públicamente en catálogos abiertos.</p>

            <h3>Imagen y diseño de la revista</h3>
            <p>La revista <em>Contemporáneos</em> era reconocida por su alta calidad visual. Su diseño incluía:</p>
            <ul>
              <li>Papel fino</li>
              <li>Grabados</li>
              <li>Portadas a dos tintas</li>
              <li>Múltiples páginas con cuidado tipográfico</li>
            </ul>
            <p>Esto la convierte en una publicación destacada en términos de diseño editorial mexicano de inicios del siglo XX, por lo que sus portadas son consideradas de interés estético y cultural.</p>

            <h3>Archivos y digitalización</h3>
            <p>Existen índices completos de todos los números de la revista elaborados en estudios académicos y tesis universitarias. La revista aparece registrada en diversos catálogos de bibliotecas nacionales y hemerotecas. Sin embargo, no existe una digitalización pública conocida de la portada del número 34, ni aparece en las colecciones digitales abiertas del MUNAL.</p>

            <h3>Posibles razones por las que no aparece la portada del número 34</h3>
            <ul>
              <li>La portada puede existir físicamente en un archivo del MUNAL o en otra institución, pero no haber sido digitalizada.</li>
              <li>Puede estar catalogada bajo una descripción distinta, como “revista impresa”, “fondo hemerográfico” o “documento gráfico”, lo que dificulta su búsqueda.</li>
              <li>Algunos números pueden tener restricciones de derechos o limitaciones para su reproducción digital.</li>
            </ul>
          `
        }
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
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p><strong>¿Quién fue Carlos Orozco Romero? (1896–1984)</strong></p>
                <ul>
                  <li>Pintor jalisciense, uno de los más importantes artistas modernos de México.</li>
                  <li>No perteneció al muralismo: su obra es más íntima, simbólica y psicológica.</li>
                  <li>Fue parte de la Escuela Moderna Mexicana, junto con Julio Castellanos, Abraham Ángel y Carlos Mérida.</li>
                  <li>Le interesaban los retratos sobrios, con pocas distracciones, donde la expresión interna del sujeto era lo esencial.</li>
                </ul>
                <p>Su estilo era muy distinto al de Rivera, Orozco o Siqueiros: Orozco Romero prefería composiciones simples, fondos planos, y retratos que parecieran “pensar”.</p>
                <p>Fue director del Museo de Arte Moderno de México entre 1962 y 1964. Sus obras se expusieron tanto en México como en el extranjero: en concreto, participó en las bienales XXIX de Venecia en 1958 y XV de la Acuarela Internacional de Pittsburg en 1968. Sus últimas exposiciones tuvieron lugar en el Museo de Arte Contemporáneo de Monterrey, en 1978 y 1980, año en el que fue premiado con Premio Nacional de Ciencias y Artes en el área de Bellas Artes. Murió en 1984, en la Ciudad de México.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/CarlosOrozco.png" class="img-fluid rounded shadow-lg w-100" alt="Carlos Orozco Romero">
              </div>
            </div>
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
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p>El Retrato de Salvador Novo es una de las obras más icónicas del joven pintor mexicano Abraham Ángel (1905–1924). Salvador Novo, quien aparece en la pintura, fue uno de los escritores y cronistas más importantes de la literatura mexicana del siglo XX, miembro del grupo literario de “Los Contemporáneos”.</p>
                <p>La obra muestra a Novo sentado dentro de un taxi, representado con una postura elegante y una mirada directa, casi desafiante. Esta composición refleja tanto la personalidad sofisticada de Novo como el ambiente urbano y moderno que comenzaba a dominar la Ciudad de México en los años 20. El taxi —un símbolo claro de modernidad— ayuda a ubicar la obra dentro del contexto cultural del México posrevolucionario, donde lo cosmopolita comenzaba a mezclarse con las tradiciones locales.</p>
                <p>Abraham Ángel destacó por retratar a personajes de su círculo intelectual con una sensibilidad única. Aunque murió muy joven, dejó una obra breve pero intensa, en la que capturó la identidad urbana moderna de México. En El taxi, su estilo muestra colores planos, líneas definidas y un sentido íntimo del retrato, revelando tanto la presencia física del modelo como una dimensión psicológica.</p>
                <p>Este retrato es también un documento histórico: Novo tenía apenas alrededor de 18 años cuando posó para Ángel, y la pintura refleja el espíritu juvenil, intelectual y vanguardista que caracterizó a la generación de artistas y escritores de la época.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/AbrahamCard.png" class="img-fluid rounded shadow-lg w-100" alt="Abraham Ángel Card Valdés">
              </div>
            </div>
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
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p>Abraham Ángel fue un joven pintor mexicano nacido en 1905 y fallecido en 1924, a los 19 años. A pesar de su corta vida, se considera una de las figuras más prometedoras del arte moderno en México. Su estilo era muy distinto al muralismo dominante: se enfocaba en retratos íntimos, emocionales y con gran sensibilidad psicológica. Su obra completa incluye menos de 30 pinturas, lo que la hace especialmente valiosa.</p>
                <p>La mujer retratada, Esperanza Crespo (en algunos catálogos: Cristina Crespo), era hermana del crítico de arte Jorge Juan Crespo de la Serna. En este retrato, Abraham Ángel muestra a una mujer moderna para los años 20: segura, de mirada directa, con un peinado y vestimenta contemporáneos. Representa el surgimiento de una nueva identidad femenina en México.</p>
                <p>El fondo de la pintura combina un paisaje típico mexicano con elementos de modernidad, como construcciones o estructuras urbanas. Esta mezcla simboliza la transición que vivía México entre tradición y modernidad durante la década de 1920. La obra no solo retrata a una persona, sino también un momento histórico: el nacimiento de una mujer independiente en un país en transformación.</p>
                <p>Este cuadro es uno de los más conocidos de Abraham Ángel porque muestra su estilo puro: sensibilidad, introspección y una mezcla entre inocencia y modernidad. Además, es una de las últimas obras que realizó antes de su muerte, lo que le da un valor histórico y emocional adicional.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/AbrahamCard.png" class="img-fluid rounded shadow-lg w-100" alt="Abraham Ángel Card Valdés">
              </div>
            </div>
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
          { direction: 'right', target: 'centro', icon: '/assets/icons/arrow-narrow-up.svg' },
          { direction: 'down', targetRoom: 'salaA', targetNode: 'index', icon: '/assets/icons/arrow-narrow-down.svg' }
        ]
      },
      centro: {
        id: 'centro',
        image: '/assets/imgs/salaB1/planocentral.jpg',
        arrows: [
          { direction: 'down', target: 'overview', icon: '/assets/icons/arrow-narrow-down.svg' },
          { direction: 'up', target: 'centro_wall', icon: '/assets/icons/arrow-narrow-up.svg' },
          { direction: 'left', target: 'izquierda_centro', icon: '/assets/icons/arrow-narrow-left.svg' },
          { direction: 'right', target: 'derecha_central', icon: '/assets/icons/arrow-narrow-right.svg' }
        ],
        paintings: []
      },
      centro_wall: {
        id: 'centro_wall',
        image: '/assets/imgs/salaB1/centro.jpg',
        arrows: [
          { direction: 'down', target: 'centro', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Autorretrato (El Coronelazo)',
          artist: 'David Alfaro Siqueiros',
          year: '1945',
          technique: 'Piroxilina sobre masonite',
          location: 'Museo Nacional de Arte (MUNAL), Ciudad de México',
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p>El Coronelazo es uno de los autorretratos más famosos de David Alfaro Siqueiros y una de sus obras de caballete más poderosas. El nombre proviene del apodo que recibió tras su participación como teniente coronel en el Ejército Republicano durante la Guerra Civil Española, un título que Siqueiros asumió con orgullo y que marcó su identidad política y artística.</p>
                <p>En la pintura aparece Siqueiros con el puño extendido hacia adelante, un gesto enérgico que simboliza lucha, resistencia y convicción ideológica. Este autorretrato refleja su visión del arte como un arma política y social, coherente con su participación activa en movimientos revolucionarios y antifascistas.</p>
                <p>Aunque Siqueiros es conocido principalmente por sus murales monumentales, esta obra demuestra su fuerza expresiva incluso en formatos más pequeños. El uso de piroxilina, un material industrial, muestra su interés en técnicas modernas y en experimentar más allá del óleo tradicional. La composición intensifica la sensación de dinamismo y carácter combativo del artista.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/DavidSiquieros.png" class="img-fluid rounded shadow-lg w-100" alt="David Alfaro Siqueiros">
              </div>
            </div>
          `
        }
      },
      izquierda_centro: {
        id: 'izquierda_centro',
        image: '/assets/imgs/salaB1/izquierda.jpg',
        arrows: [
          { direction: 'right', target: 'centro', icon: '/assets/icons/arrow-narrow-right.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Retrato de María Asúnsolo bajando la escalera',
          artist: 'David Alfaro Siqueiros',
          year: '1935',
          location: 'Museo Nacional de Arte (MUNAL), Ciudad de México',
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p><strong>Contexto y significado</strong></p>
                <p>La obra retrata a María Asúnsolo (1904–1999), galerista, promotora cultural y mecenas fundamental en la vida artística de México en las décadas de 1930 y 1940.</p>
                <p>Este retrato —considerado por algunos especialistas como “la mejor obra de retrato” de Siqueiros— fue conservado por Asúnsolo durante casi toda su vida.</p>
                <p>Aunque Siqueiros es ampliamente conocido por sus murales, este cuadro pertenece a su etapa más temprana y muestra su capacidad para trabajar con la figura humana en formatos de caballete.</p>
                <p>Algunos críticos sugieren que la composición tiene una influencia de las vanguardias europeas: la escena de Asúnsolo descendiendo la escalera evoca una reinterpretación personal del famoso Desnudo bajando una escalera de Marcel Duchamp —lo que revela la apertura de Siqueiros a las corrientes modernas internacionales y su voluntad de experimentar con la representación del movimiento y la forma.</p>
                <p>La obra representa tanto una relación personal —laboral y de confianza entre el artista y la galerista— como una manifestación de la modernidad urbana y un momento de transición en el arte mexicano, cuando se empezaban a incorporar influencias internacionales en el contexto posrevolucionario.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/DavidSiquieros.png" class="img-fluid rounded shadow-lg w-100" alt="David Alfaro Siqueiros">
              </div>
            </div>
          `
        }
      },
      derecha_central: {
        id: 'derecha_central',
        image: '/assets/imgs/salaB1/derecha_central.jpg',
        arrows: [
          { direction: 'left', target: 'centro', icon: '/assets/icons/arrow-narrow-left.svg' }
        ],
        paintings: [
          { id: 'cuadro_izq', x: 27, y: 49, w: 23, h: 56, targetNode: 'derecha_central_izq' },
          { id: 'cuadro_der', x: 73, y: 49, w: 21, h: 48, targetNode: 'derecha_central_der' }
        ]
      },
      derecha_central_izq: {
        id: 'derecha_central_izq',
        image: '/assets/imgs/salaB1/izquierda_d.jpg',
        arrows: [
          { direction: 'down', target: 'derecha_central', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Madre Proletaria',
          artist: 'David Alfaro Siqueiros',
          year: '1929',
          technique: 'Óleo sobre tela',
          location: 'Colecciones mexicanas',
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p><strong>Movimiento:</strong> Muralismo mexicano / Arte político–revolucionario</p>
                <p>Madre Proletaria es una de las pinturas más representativas de la etapa temprana y abiertamente política de David Alfaro Siqueiros. Fue realizada en 1929, en un momento de fuerte tensión social y persecución contra los movimientos obreros y campesinos. La obra forma parte del conjunto de piezas donde Siqueiros expresa de manera directa su compromiso revolucionario.</p>
                <p>La pintura muestra a una mujer obrera —pobre, cansada, oprimida— que carga a su hijo. Su rostro refleja angustia, desesperación y lucha. A diferencia de las maternidades idealizadas del arte clásico, aquí la figura materna simboliza sufrimiento social y resistencia. La madre proletaria no es un símbolo religioso, sino político: representa al pueblo explotado y al mismo tiempo a la fuerza que sostiene la revolución.</p>
                <p>Siqueiros utiliza colores oscuros, líneas duras y un estilo expresionista que intensifica el dramatismo. La composición transmite tensión: los cuerpos parecen comprimidos, casi atrapados, reflejando las condiciones reales de las clases trabajadoras en el contexto posrevolucionario. El niño, silencioso y débil, hace evidente la herencia de la desigualdad.</p>
                <p>La obra pertenece a la etapa en que Siqueiros formaba parte activa del Partido Comunista Mexicano. Por su contenido abiertamente político, Madre Proletaria fue vista como una denuncia social directa y como un manifiesto visual en favor de la lucha obrera.</p>
                <p>Hoy es considerada una pieza clave para entender el desarrollo del arte político en México, y una de las representaciones más potentes de la maternidad desde una perspectiva social y revolucionaria.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/DavidSiquieros.png" class="img-fluid rounded shadow-lg w-100" alt="David Alfaro Siqueiros">
              </div>
            </div>
          `
        }
      },
      derecha_central_der: {
        id: 'derecha_central_der',
        image: '/assets/imgs/salaB1/derecha_d.jpg',
        arrows: [
          { direction: 'down', target: 'derecha_central', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Aurora de México',
          artist: 'David Alfaro Siqueiros',
          year: '1945',
          technique: 'Piroxilina sobre tela',
          location: 'Museo Nacional de Arte (MUNAL), Ciudad de México',
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p>Aurora de México es una obra de caballete realizada por Siqueiros en 1945, en la etapa en la que experimentaba con materiales industriales como la piroxilina para lograr efectos de brillo, textura y dinamismo que no se obtenían con el óleo tradicional. La pintura representa de manera simbólica una “aurora” o amanecer para México, interpretada como un renacimiento político, social y cultural tras las profundas transformaciones del país durante la primera mitad del siglo XX.</p>
                <p>La composición posee un fuerte carácter alegórico: la “aurora” funciona como metáfora de esperanza, reconstrucción y futuro. En este sentido, la obra se relaciona con los ideales del muralismo mexicano, donde Siqueiros, Rivera y Orozco buscaban representar a México como una nación en permanente lucha y renovación.</p>
                <p>El uso de colores intensos, contrastes marcados y texturas dinámicas refleja el estilo expresivo y enérgico característico de Siqueiros. Aunque más conocido por sus murales, esta obra demuestra su habilidad en formatos de caballete sin perder la fuerza ideológica y emocional.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/DavidSiquieros.png" class="img-fluid rounded shadow-lg w-100" alt="David Alfaro Siqueiros">
              </div>
            </div>
          `
        }
      },
      izquierda: {
        id: 'izquierda',
        image: '/assets/imgs/salaB/plano_izquierda.jpg',
        arrows: [
          { direction: 'right', target: 'overview', icon: '/assets/icons/arrow-narrow-right.svg' },
          { direction: 'down', target: 'overview', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [
          { id: 'cuadro_izq', x: 22, y: 42, w: 24, h: 50, targetNode: 'izquierda_cuadro_izq' },
          { id: 'cuadro_der', x: 75, y: 42, w: 24, h: 35, targetNode: 'izquierda_cuadro_der' }
        ]
      },
      izquierda_cuadro_izq: {
        id: 'izquierda_cuadro_izq',
        image: '/assets/imgs/salaB/izquierda.jpg',
        arrows: [
          { direction: 'down', target: 'izquierda', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Retrato de Miss Juleen Compton',
          artist: 'Diego Rivera',
          year: '1956',
          technique: 'Óleo sobre tela',
          location: 'Museo Nacional de Arte (MUNAL), Ciudad de México',
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p><strong>Procedencia:</strong> Donación realizada en 2019 por Juleen Compton (cineasta y actriz estadounidense) y su esposo Nicholas Wentworth.</p>
                <p>El Retrato de Miss Juleen Compton es una de las últimas obras de caballete que Diego Rivera realizó antes de su muerte en 1957. En esta pintura, Rivera retrata a Juleen Compton, una joven artista y cineasta estadounidense que en ese tiempo comenzaba su carrera. El cuadro destaca por su manejo suave de color, el enfoque en la expresión íntima del rostro y la atención minuciosa a los detalles del vestido y la postura.</p>
                <p>En el reverso del lienzo existe un boceto titulado Suburbios en Moscú, lo que añade valor histórico y artístico a la pieza. Esta doble obra documenta la etapa final de Rivera, marcada por su interés en temas internacionales y un retorno a técnicas más introspectivas.</p>
                <p>La pintura permaneció en manos de Compton durante décadas y nunca había sido expuesta en México hasta su donación al MUNAL. Las autoridades culturales la describieron como “un canto a la vida”, pues representa la juventud y vitalidad de la modelo en contraste con la vejez del pintor, que se encontraba en sus últimos meses de vida.</p>
                <p>Esta obra es considerada un aporte significativo al acervo nacional por su calidad, su historia y el momento vital en que fue creada.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/DiegoRivera.png" class="img-fluid rounded shadow-lg w-100" alt="Diego Rivera">
              </div>
            </div>
          `
        }
      },
      izquierda_cuadro_der: {
        id: 'izquierda_cuadro_der',
        image: '/assets/imgs/salaB/derecha.jpg',
        arrows: [
          { direction: 'down', target: 'izquierda', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'La Molendera',
          artist: 'Diego Rivera',
          year: '1924',
          technique: 'Óleo sobre tela',
          location: 'Colecciones mexicanas (Privada)',
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p><strong>Movimiento:</strong> Escuela Mexicana de Pintura / Nacionalismo posrevolucionario</p>
                <p><strong>Ubicación:</strong> Se encuentra en colecciones mexicanas (varias versiones y estudios existen; la más conocida pertenece a colección privada).</p>
                <p>La Molendera es una de las obras más representativas del periodo temprano de Diego Rivera tras su regreso a México en 1921. Forma parte de su etapa indigenista, donde retrató escenas de la vida cotidiana del pueblo mexicano después de la Revolución. La pintura muestra a una mujer indígena moliendo maíz con un metate, actividad ancestral que simboliza la fuerza, la continuidad cultural y el papel fundamental de la mujer en la vida comunitaria.</p>
                <p>La figura femenina aparece robusta y monumental, siguiendo la influencia del muralismo: proporciones grandes, formas sólidas y presencia escultórica. Rivera buscaba exaltar la dignidad del trabajo manual y la identidad indígena, distanciándose de los estilos europeos que había practicado antes.</p>
                <p>Los colores cálidos, terrosos y naturales reflejan el ambiente rural mexicano. La composición es sencilla pero poderosa: la mujer se convierte en símbolo, no solo en protagonista. La postura inclinada y repetitiva del acto de moler alude a la resistencia, la tradición y la historia milenaria del maíz en la cultura mexicana.</p>
                <p>La Molendera es considerada una obra clave porque anticipa el estilo que Rivera consolidaría en sus murales: figuras monumentales, raíces indígenas, y una profunda valoración del pueblo mexicano como cimiento de la nueva identidad nacional.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/DiegoRivera.png" class="img-fluid rounded shadow-lg w-100" alt="Diego Rivera">
              </div>
            </div>
          `
        }
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
          { direction: 'down', target: 'overview', icon: '/assets/icons/arrow-narrow-down.svg' },
          { direction: 'left', target: 'izquierda_central', icon: '/assets/icons/arrow-narrow-left.svg' },
          { direction: 'up', target: 'retratocentro', icon: '/assets/icons/arrow-narrow-up.svg' }
        ],
        paintings: []
      },
      izquierda_central: {
        id: 'izquierda_central',
        image: '/assets/imgs/salaC1/izquierda_central.jpg',
        arrows: [
          { direction: 'down', target: 'centro', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [
          { id: 'cuadro_izq', x: 50, y: 44, w: 23, h: 57, targetNode: 'izquierda_central_izq' },
          { id: 'cuadro_der', x: 81, y: 45, w: 24, h: 55, targetNode: 'izquierda_central_der' }
        ]
      },
      izquierda_central_izq: {
        id: 'izquierda_central_izq',
        image: '/assets/imgs/salaC1/izquierda.jpeg',
        arrows: [
          { direction: 'down', target: 'izquierda_central', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Cabeza flechada',
          artist: 'Félix Parra',
          year: '1875–1877',
          technique: 'Óleo sobre tela',
          location: 'Museo Nacional de Arte (MUNAL)',
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p><strong>Movimiento:</strong> Pintura histórica y académica mexicana del siglo XIX</p>
                <p>“Cabeza flechada” forma parte de la serie Los Teules, un conjunto de obras del pintor mexicano Félix Parra donde representa el encuentro violento entre los conquistadores españoles y los pueblos indígenas durante la Conquista de México. En esta pintura se observa la cabeza de un guerrero indígena que ha sido atravesada por flechas, presentada de forma dramática y directa para acentuar la brutalidad del conflicto.</p>
                <p>La palabra “teules” era usada por los pueblos indígenas para referirse a los españoles durante los primeros contactos, pues los consideraban seres superiores o “dioses”. Parra utiliza esta serie para mostrar, desde una perspectiva crítica y humanista, la tragedia y el sufrimiento indígena durante la conquista, adelantándose al indigenismo que marcaría a los artistas mexicanos del siglo XX.</p>
                <p>La obra destaca por su fuerte carga emocional y por su representación dignificada del indígena, rompiendo con la visión heroica tradicional de la Conquista. Es considerada una de las primeras aproximaciones en la pintura mexicana a una visión más empática de la historia indígena. También demuestra el dominio académico de Félix Parra y su interés por temas históricos nacionales.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/FelixParra.png" class="img-fluid rounded shadow-lg w-100" alt="Félix Parra">
              </div>
            </div>
          `
        }
      },
      izquierda_central_der: {
        id: 'izquierda_central_der',
        image: '/assets/imgs/salaC1/derecha.jpeg',
        arrows: [
          { direction: 'down', target: 'izquierda_central', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: '“El desmembrado (cadáver)” – Serie Los Teules',
          artist: 'Félix Parra',
          year: '1875–1877',
          technique: 'Óleo sobre papel o tela',
          location: 'Museo Nacional de Arte (MUNAL)',
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p><strong>Corriente:</strong> Pintura académica mexicana del siglo XIX / temática histórica</p>
                <p>“El desmembrado (cadáver)” forma parte de la serie Los Teules, en la que Félix Parra representa escenas crudas relacionadas con la Conquista de México. En esta obra se muestra el cuerpo mutilado de un indígena, presentado de manera directa y sin idealización. La pintura destaca por su dramatismo, el uso de claroscuros y la composición centrada que obliga al espectador a confrontar la violencia del acto representado.</p>
                <p>La serie Los Teules aborda el choque brutal entre los españoles y los pueblos originarios durante el siglo XVI. “Teules” era el término con el que algunos indígenas nombraron a los conquistadores, confundiéndolos inicialmente con seres divinos. Parra cuestiona esta visión y expone, mediante imágenes intensas y emotivas, las consecuencias humanas de la conquista, en particular el sufrimiento indígena.</p>
                <p>Esta obra, junto con el resto de la serie, marca un cambio importante en la pintura mexicana del siglo XIX, al presentar una visión crítica y humanista de la historia. “El desmembrado (cadáver)” es relevante por su valentía temática, ya que rompe con la tendencia académica de glorificar la conquista y en su lugar revela sus aspectos más dolorosos. Félix Parra es considerado precursor del indigenismo pictórico que, décadas más tarde, retomarían artistas como Orozco o Rivera.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/FelixParra.png" class="img-fluid rounded shadow-lg w-100" alt="Félix Parra">
              </div>
            </div>
          `
        }
      },
      retratocentro: {
        id: 'retratocentro',
        image: '/assets/imgs/salaC1/retratocentro.jpg',
        arrows: [
          { direction: 'down', target: 'centro', icon: '/assets/icons/arrow-narrow-down.svg' }
        ],
        paintings: [],
        infoSection: {
          title: 'Las indias',
          artist: 'Armando Reverón',
          year: 'c. 1947',
          technique: 'Carbón y pastel sobre cartón',
          location: 'Museo Nacional de Arte (MUNAL)',
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p><strong>Importancia:</strong> Obra clave del periodo tardío de Reverón, caracterizada por simbolismo, atmósfera onírica y experimentación técnica.</p>
                <p>Las indias es una obra realizada por el artista venezolano Armando Reverón, uno de los pintores más importantes del modernismo latinoamericano. La pieza fue creada alrededor de 1947 y está elaborada con carbón y pastel sobre cartón. Sus dimensiones aproximadas son 54 × 54 cm, y está firmada por el artista. En el reverso contiene una inscripción de autenticidad acompañada de huellas dactilares fechadas en 1969.</p>
                <p>La pintura representa figuras femeninas que evocan un imaginario indígena y simbólico, característico de la etapa tardía de Reverón. En esta fase, el artista producía obras de fuerte carga emocional, atmosférica y onírica, influenciado por su vida casi aislada en “El Castillete”, su taller en Macuto. Las figuras muestran un tratamiento difuminado y expresivo, típico de su experimentación con texturas, luces y materiales no tradicionales.</p>
                <p>La obra formó parte de la retrospectiva de Reverón en el Museo de Bellas Artes de Caracas en 1955 y posteriormente pasó a colecciones privadas. Se considera una pieza representativa del periodo final del artista, donde su pintura se volvió más introspectiva, simbólica y fusionada con elementos de fantasía.</p>
                <p><strong>Datos principales:</strong></p>
                <ul>
                  <li><strong>Dimensiones:</strong> Aproximadamente 54 × 54 cm</li>
                </ul>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/ArmandoJulio.png" class="img-fluid rounded shadow-lg w-100" alt="Armando Reverón">
              </div>
            </div>
          `
        }
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
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p><em>Vendedora de pinole</em> es una pintura de caballete realizada por Diego Rivera en 1936. La obra muestra a una mujer sentada junto a un recipiente que contiene pinole, un alimento tradicional elaborado con maíz molido. A través de esta escena sencilla, Rivera exalta la vida cotidiana, el trabajo humilde y las tradiciones mexicanas.</p>
                <p>La composición utiliza colores terrosos y una iluminación suave que resaltan la serenidad y dignidad de la figura representada. Aunque Rivera es más conocido por sus murales, esta pintura demuestra su sensibilidad para retratar a las clases trabajadoras con profundo respeto y humanidad.</p>
                <p><strong>Datos principales:</strong></p>
                <ul>
                  <li><strong>Dimensiones:</strong> 81.4 × 60.7 cm</li>
                  <li><strong>Tema:</strong> Vida cotidiana, tradición, trabajo popular</li>
                </ul>
                <p>La obra forma parte del enfoque realista y social que caracteriza gran parte del trabajo de Rivera, mostrando la identidad y cultura mexicana a través de personajes comunes y escenas tradicionales.</p>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/DiegoRivera.png" class="img-fluid rounded shadow-lg w-100" alt="Diego Rivera">
              </div>
            </div>
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
          colClass: 'col-lg-10',
          description: `
            <div class="row align-items-center">
              <div class="col-lg-9">
                <p>El <em>Retrato de Ana María Güido Corral</em> es una obra realizada por Diego Rivera, recientemente incorporada al acervo del Museo Nacional de Arte (MUNAL) en 2023. Este retrato forma parte de una colección familiar que perteneció a la pintora Ana María Icaza de Xirau y a su esposo, el filósofo Ramón Xirau. La donación incluyó diversos retratos de los antepasados de la familia, entre ellos el de Ana María Güido Corral, madre de la pintora.</p>
                <p>La obra destaca dentro del conjunto por su valor histórico y por ser un ejemplo del trabajo de Rivera en retratos íntimos y familiares, menos conocidos que sus murales pero igualmente significativos. Su incorporación al MUNAL contribuye a preservar la memoria visual de una familia ligada a la vida cultural e intelectual de México.</p>
                <p><strong>Datos adicionales:</strong></p>
                <ul>
                  <li><strong>Colección:</strong> Donación de la familia Xirau–Icaza (2023)</li>
                  <li><strong>Importancia:</strong> Obra íntima dentro de la tradición de retratos familiares; enriquecimiento del patrimonio artístico mexicano.</li>
                </ul>
              </div>
              <div class="col-lg-3">
                <img src="/assets/imgs/salaA/DiegoRivera.png" class="img-fluid rounded shadow-lg w-100" alt="Diego Rivera">
              </div>
            </div>
          `
        }
      }
    }
  }
};
