import { TopicConcept } from './types';

export const module2Topics: TopicConcept[] = [
  {
    id: 'tema_4_sustantivo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Las Categorías Gramaticales',
    moduleNameHy: 'Մոդուլ 2. Քերականական կարգեր (խոսքի մասեր)',
    number: 4,
    titleEs: 'El sustantivo o nombre',
    titleHy: 'Գոյական անուն (El sustantivo)',
    definitionEs: 'El sustantivo es una palabra variable que nombra a personas, animales, lugares, objetos, sentimientos o ideas abstractas. Tiene género (masculino/femenino) y número (singular/plural).',
    definitionHy: 'Գոյականը փոփոխական բառ է, որն անվանում է անձեր, կենդանիներ, վայրեր, առարկաներ, զգացմունքներ կամ վերացական գաղափարներ: Ունի սեռ (արական/իգական) և թիվ (եզակի/հոգնակի):',
    simpleExplanationEs: 'Es la palabra que le da nombre a todo lo que existe y podemos pensar o ver: amigo, perro, Madrid, mesa, alegría, justicia.',
    simpleExplanationHy: 'Դա այն բառն է, որը տալիս է անուն այն ամենին, ինչ գոյություն ունի և ինչ կարող ենք մտածել կամ տեսնել՝ ընկեր, շուն, Մադրիդ, սեղան, ուրախություն, արդարություն:',
    howToRecognizeEs: 'Puedes ponerle delante un artículo («el», «la», «los», «las»). Se clasifica en: Común / Propio (Madrid), Concreto (mesa) / Abstracto (amor), Individual (oveja) / Colectivo (rebaño).',
    howToRecognizeHy: 'Կարող ես առաջ դնել արտիկլ («el», «la»): Լինում է հասարակ/հատուկ, թանձրացական (տեսանելի)/վերացական (զգացմունք/միտք), եզակի/հավաքական (rebaño - հոտ):',
    purposeEs: 'Es el núcleo fundamental del grupo nominal y del sujeto.',
    purposeHy: 'Գոյականական խմբի և ենթակայի հիմնական միջուկն է:',
    examples: [
      { es: 'Mi hermano estudia en el instituto de Valencia.', hy: 'Իմ եղբայրը սովորում է Վալենսիայի դպրոցում։', highlight: 'hermano (común), instituto (común), Valencia (propio)' },
      { es: 'El perro corretea feliz por el jardín verde.', hy: 'Շունը ուրախ վազվզում է կանաչ այգում։', highlight: 'perro (animal, común), jardín (lugar, común)' },
      { es: 'La amistad y la paz son tesoros muy valiosos.', hy: 'Ընկերությունն ու խաղաղությունը շատ թանկ գանձեր են։', highlight: 'amistad (abstracto), paz (abstracto), tesoros (concreto)' },
      { es: 'El rebaño descansaba a la sombra de los robles.', hy: 'Հոտը հանգստանում էր կաղնիների ստվերում։', highlight: 'rebaño (sustantivo colectivo)' },
      { es: 'Compré un libro nuevo y tres cuadernos de dibujo.', hy: 'Գնեցի մի նոր գիրք և նկարչության երեք տետր։', highlight: 'libro, cuadernos (objetos)' },
      { es: 'Cervantes escribió una novela inolvidable.', hy: 'Սերվանտեսը գրեց անմոռանալի մի վեպ։', highlight: 'Cervantes (propio), novela (común)' }
    ],
    frequentMistakesEs: 'Confundir un sustantivo abstracto («la belleza») con un adjetivo («bello»). El sustantivo admite «la/el» delante («la belleza»); el adjetivo califica («chica bella»).',
    frequentMistakesHy: 'Շփոթել վերացական գոյականը («la belleza» - գեղեցկություն) ածականի հետ («bello» - գեղեցիկ)։ Գոյականի առաջ կարելի է դնել la/el:',
    confusionsEs: 'Sustantivo colectivo (rebaño, jauría, enjambre) está en singular pero nombra un grupo.',
    confusionsHy: 'Հավաքական գոյականը եզակի թվով է, բայց նշանակում է խումբ (օր. rebaño - հոտ):',
    memoryTrickEs: 'Si puedes decir «El/La [palabra]», casi seguro es un sustantivo: El coche, La libertad.',
    memoryTrickHy: 'Եթե կարող ես ասել «El/La [բառ]», դա գրեթե միշտ գոյական է՝ El coche, La libertad:',
    checkpointQuestions: [
      {
        id: 'cp_4_1',
        questionEs: '¿Qué palabra es un sustantivo abstracto?',
        questionHy: 'Ո՞ր բառն է վերացական գոյական:',
        options: [
          { id: 'a', textEs: 'Valentía', textHy: 'Քաջություն (Valentía)', isCorrect: true },
          { id: 'b', textEs: 'Valiente', textHy: 'Քաջ (ածական)', isCorrect: false },
          { id: 'c', textEs: 'Pared', textHy: 'Պատ', isCorrect: false },
          { id: 'd', textEs: 'Correr', textHy: 'Վազել', isCorrect: false }
        ],
        explanationEs: '«Valentía» nombra una idea/cualidad que no se toca con las manos, es un sustantivo abstracto.',
        explanationHy: '«Valentía»-ն անվանում է միտք/հատկանիշ, որը չենք կարող շոշափել, ուստի վերացական գոյական է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_4_1',
        frontEs: '¿Cuál es la diferencia entre un sustantivo común y uno propio?',
        frontHy: 'Ո՞րն է հասարակ և հատուկ գոյականների տարբերությունը:',
        backEs: 'El común nombra a cualquier ser de su clase (ciudad, río, niño); el propio individualiza y se escribe con mayúscula (Madrid, Ebro, Pablo).',
        backHy: 'Հասարակը անվանում է իր տեսակի ցանկացած էակ (քաղաք, գետ), իսկ հատուկը առանձնացնում է և գրվում մեծատառով (Մադրիդ, Պաբլո):'
      }
    ]
  },
  {
    id: 'tema_5_pronombre',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Las Categorías Gramaticales',
    moduleNameHy: 'Մոդուլ 2. Քերականական կարգեր (խոսքի մասեր)',
    number: 5,
    titleEs: 'El pronombre',
    titleHy: 'Դերանուն (El pronombre)',
    definitionEs: 'El pronombre es una palabra que sustituye a un sustantivo o grupo nominal para evitar repeticiones o señalar a los participantes en la comunicación. NUNCA acompaña a un sustantivo; va solo.',
    definitionHy: 'Դերանունը փոխարինում է գոյականին, որպեսզի խուսափենք կրկնություններից կամ ցույց տանք խոսակցության մասնակիցներին: Այն ԵՐԲԵՔ չի ուղեկցում գոյականին, այլ հանդես է գալիս նրա ՓՈԽԱՐԵՆ:',
    simpleExplanationEs: 'En vez de decir «Pedro estudia porque Pedro quiere aprobar», dices «Pedro estudia porque ÉL quiere aprobar». «Él» es un pronombre.',
    simpleExplanationHy: 'Ասելու փոխարեն «Պետրոսը սովորում է, որովհետև Պետրոսը ուզում է հանձնել», ասում ենք «Պետրոսը սովորում է, որովհետև ՆԱ ուզում է»։ «Él»-ը դերանուն է։',
    howToRecognizeEs: 'Regla de oro: si acompaña a un sustantivo («Mi libro»), es determinante. Si va SOLO («El mío», «Él vino»), es pronombre. Clases: personales (yo, tú, él...), demostrativos (este, ese, aquel), posesivos (el mío), indefinidos (alguien, nadie).',
    howToRecognizeHy: 'Ոսկե կանոն՝ եթե գոյականի կողքին է («Mi libro»), DETERMINANTE է։ Եթե ՄԵՆԱԿ Է («Él vino», «alguien»), PRONOMBRE է։ Լինում են՝ անձնական, ցուցական, ստացական, անորոշ:',
    purposeEs: 'Evita repeticiones innecesarias y da agilidad al discurso.',
    purposeHy: 'Խուսափում է ավելորդ կրկնություններից և խոսքը դարձնում ճկուն։',
    examples: [
      { es: 'Ellos llegaron antes de que empezara la función.', hy: 'Նրանք հասան ներկայացման սկսվելուց առաջ։', highlight: 'Ellos (pronombre personal sujeto)' },
      { es: 'Yo te llamé, pero tú no me respondiste.', hy: 'Ես քեզ զանգեցի, բայց դու ինձ չպատասխանեցիր։', highlight: 'Yo, te, tú, me (pronombres personales)' },
      { es: '¿Quién ha dejado esto aquí sobre la mesa?', hy: 'Ո՞վ է սա թողել այստեղ սեղանի վրա։', highlight: 'Quién (interrogativo), esto (demostrativo neutro)' },
      { es: 'Alguien ha llamado a la puerta; nadie contesta.', hy: 'Ինչ-որ մեկը թակեց դուռը. ոչ ոք չի պատասխանում։', highlight: 'Alguien, nadie (pronombres indefinidos)' },
      { es: 'Este libro es genial, pero aquel no me gustó.', hy: 'Այս գիրքը հիանալի է, բայց այն մեկը ինձ դուր չեկավ։', highlight: 'aquel (pronombre demostrativo, va solo sin sustantivo)' },
      { es: 'Nosotros somos los primeros de la fila.', hy: 'Մենք հերթի առաջիններն ենք։', highlight: 'Nosotros (pronombre personal)' }
    ],
    frequentMistakesEs: 'Confundir determinante demostrativo con pronombre. «Este niño» -> determinante. «Este es rápido» -> pronombre.',
    frequentMistakesHy: 'Շփոթել ցուցական determinante-ը դերանվան հետ։ «Este niño» = determinante: «Este es...» = pronombre:',
    confusionsEs: '«Él» (con tilde) es pronombre personal. «El» (sin tilde) es artículo determinante.',
    confusionsHy: '«Él» (շեշտով) = դերանուն (նա): «El» (առանց շեշտի) = արտիկլ determinante (el coche):',
    memoryTrickEs: '«Pronombre = En lugar del nombre (SOLO)». «Determinante = Acompaña al nombre».',
    memoryTrickHy: '«Pronombre = Գոյականի փոխարեն (ՄԵՆԱԿ)»: «Determinante = Գոյականի հետ (ՈՒՂԵԿՑՈՂ)»:',
    checkpointQuestions: [
      {
        id: 'cp_5_1',
        questionEs: 'En «Mi casa es grande, pero la tuya es enorme», ¿qué es «tuya»?',
        questionHy: '«Mi casa es grande, pero la tuya es enorme» նախադասության մեջ ի՞նչ է «tuya»-ն:',
        options: [
          { id: 'a', textEs: 'Un pronombre posesivo', textHy: 'Ստացական դերանուն (pronombre posesivo)', isCorrect: true },
          { id: 'b', textEs: 'Un determinante', textHy: 'Որոշիչ (determinante)', isCorrect: false },
          { id: 'c', textEs: 'Un adjetivo calificativo', textHy: 'Որակական ածական', isCorrect: false },
          { id: 'd', textEs: 'Un sustantivo', textHy: 'Գոյական', isCorrect: false }
        ],
        explanationEs: '«Tuya» va solo, sustituyendo a «casa», precedido de artículo; por tanto es pronombre.',
        explanationHy: '«Tuya»-ն մենակ է՝ փոխարինելով «casa» բառին, ուստի դերանուն է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_5_1',
        frontEs: '¿Cómo distingues un determinante de un pronombre?',
        frontHy: 'Ինչպե՞ս տարբերել determinante-ը pronombre-ից:',
        backEs: 'El determinante ACOMPAÑA a un sustantivo («este niño»); el pronombre VA SOLO y SUSTITUYE al sustantivo («este vino ayer»).',
        backHy: 'Determinante-ը ուղեկցում է գոյականին («este niño»), իսկ pronombre-ը մենակ է և փոխարինում է գոյականին («este vino ayer»):'
      }
    ]
  },
  {
    id: 'tema_6_adjetivo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Las Categorías Gramaticales',
    moduleNameHy: 'Մոդուլ 2. Քերականական կարգեր (խոսքի մասեր)',
    number: 6,
    titleEs: 'El adjetivo',
    titleHy: 'Ածական (El adjetivo)',
    definitionEs: 'El adjetivo es una palabra variable que acompaña al sustantivo para expresar una cualidad, estado o propiedad de este. Concuerda obligatoriamente en género y número con el sustantivo al que modifica.',
    definitionHy: 'Ածականը փոփոխական բառ է, որը ուղեկցում է գոյականին՝ արտահայտելով նրա որակը, վիճակը կամ հատկանիշը: Պարտադիր համաձայնում է գոյականի հետ սեռով և թվով:',
    simpleExplanationEs: 'Responde a la pregunta «¿Cómo es?» o «¿Cómo está?». Ejemplo: perro rápido, casa blanca, sopa caliente.',
    simpleExplanationHy: 'Պատասխանում է «Ինչպիսի՞ն է» հարցին՝ արագ շուն, սպիտակ տուն, տաք ապուր։',
    howToRecognizeEs: 'Cambia el sustantivo de género o número; si la palabra cambia con él, es un adjetivo («chico listo» -> «chica lista» -> «chicas listas»).',
    howToRecognizeHy: 'Փոխիր գոյականի թիվը կամ սեռը. եթե բառը նույնպես փոխվում է, դա ածական է («chico listo» -> «chica lista»):',
    purposeEs: 'Aporta detalles, colores, tamaños y matices precisos a los textos.',
    purposeHy: 'Ճշգրիտ մանրամասներ, գույներ և չափեր է հաղորդում տեքստերին։',
    examples: [
      { es: 'Un camino estrecho y pedregoso subía a la montaña.', hy: 'Նեղ և քարքարոտ ճանապարհը բարձրանում էր սարով։', highlight: 'estrecho, pedregoso (adjetivos calificativos masculinos singulares)' },
      { es: 'Las estrellas lejanas brillaban en la noche oscura.', hy: 'Հեռավոր աստղերը շողում էին մութ գիշերում։', highlight: 'lejanas (femenino plural), oscura (femenino singular)' },
      { es: 'Este examen es más fácil que el anterior.', hy: 'Այս քննությունը ավելի հեշտ է, քան նախորդը։', highlight: 'fácil (grado comparativo de superioridad)' },
      { es: 'Una película interesantísima nos mantuvo despiertos.', hy: 'Մի չափազանց հետաքրքիր ֆիլմ մեզ արթուն պահեց։', highlight: 'interesantísima (grado superlativo absoluto)' },
      { es: 'Los soldados valientes defendieron la muralla.', hy: 'Քաջ զինվորները պաշտպանեցին պարիսպը։', highlight: 'valientes' },
      { es: 'Comió una manzana verde y crujiente.', hy: 'Նա կերավ կանաչ ու խռթխռթան խնձոր։', highlight: 'verde, crujiente' }
    ],
    frequentMistakesEs: 'Confundir adjetivo con adverbio. El adjetivo CONCUERDA («Ellas corren rápidas» o «autos rápidos»). El adverbio es INVARIABLE («Ellas corren rápido» = velozmente).',
    frequentMistakesHy: 'Շփոթել ածականը մակբայի հետ։ Ածականը ՀԱՄԱՁԱՅՆՈՒՄ Է (տղա արագ, աղջիկներ արագներ)։ Մակբայը ԵՐԲԵՔ ՉԻ ՓՈԽՎՈՒՄ:',
    confusionsEs: 'En español hay adjetivos de dos terminaciones (alto/alta) y de una sola terminación (feliz, fácil, azul).',
    confusionsHy: 'Իսպաներենում կան ածականներ, որոնք ունեն երկու վերջավորություն (alto/alta), և որոնք ունեն միայն մեկ վերջավորություն երկու սեռի համար (feliz, azul):',
    memoryTrickEs: '¿Cambia con el plural del sustantivo? Sí -> Adjetivo (casas blancas). No -> Adverbio (muy blancas).',
    memoryTrickHy: 'Գոյականի հոգնակիի հետ փոխվո՞ւմ է։ Այո -> Ածական։ Ոչ -> Մակբայ։',
    checkpointQuestions: [
      {
        id: 'cp_6_1',
        questionEs: '¿En qué concuerda siempre el adjetivo con el sustantivo?',
        questionHy: 'Ինչո՞վ է ածականը միշտ համաձայնում գոյականի հետ:',
        options: [
          { id: 'a', textEs: 'En género y número', textHy: 'Սեռով և թվով (género y número)', isCorrect: true },
          { id: 'b', textEs: 'En tiempo y persona', textHy: 'Ժամանակով և դեմքով', isCorrect: false },
          { id: 'c', textEs: 'En modo y voz', textHy: 'Եղանակով', isCorrect: false },
          { id: 'd', textEs: 'No concuerda nunca', textHy: 'Երբեք չի համաձայնում', isCorrect: false }
        ],
        explanationEs: 'El adjetivo siempre adopta el mismo género (masculino/femenino) y número (singular/plural) que el sustantivo al que acompaña.',
        explanationHy: 'Ածականը միշտ ընդունում է նույն սեռը և թիվը, ինչ իր ուղեկցած գոյականը:'
      }
    ],
    flashcards: [
      {
        id: 'fc_6_1',
        frontEs: '¿Cuáles son los tres grados del adjetivo?',
        frontHy: 'Որո՞նք են ածականի համեմատության երեք աստիճանները:',
        backEs: 'Positivo (alto), Comparativo (más alto que, tan alto como, menos alto que) y Superlativo (altísimo, el más alto).',
        backHy: 'Դրական (alto), Համեմատական (más alto que), Գերադրական (altísimo, el más alto):'
      }
    ]
  },
  {
    id: 'tema_7_verbo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Las Categorías Gramaticales',
    moduleNameHy: 'Մոդուլ 2. Քերականական կարգեր (խոսքի մասեր)',
    number: 7,
    titleEs: 'El verbo',
    titleHy: 'Բայ (El verbo)',
    definitionEs: 'El verbo es la clase de palabra variable que expresa acciones, estados o procesos situados en el tiempo. Consta de raíz y desinencias verbales que aportan persona, número, tiempo y modo.',
    definitionHy: 'Բայը փոփոխական բառ է, որն արտահայտում է գործողություն, վիճակ կամ գործընթաց ժամանակի մեջ: Կազմված է արմատից (raíz) և վերջավորությունից (desinencias), որոնք ցույց են տալիս դեմք, թիվ, ժամանակ և եղանակ:',
    simpleExplanationEs: 'Es el motor del predicado. Dice lo que alguien hace (correr, estudiar), lo que le pasa (crecer) o cómo está (ser, estar, parecer).',
    simpleExplanationHy: 'Ստորոգյալի շարժիչն է։ Ասում է՝ ինչ է անում մեկը (վազել, սովորել), ինչ է պատահում (մեծանալ) կամ ինչ վիճակում է (լինել, գտնվել)։',
    howToRecognizeEs: 'Formas no personales: Infinitivo (-ar, -er, -ir: cantar, comer, vivir), Participio (-ado, -ido: cantado), Gerundio (-ando, -iendo: cantando). Formas personales: conjugadas (canto, comerás, vivieron).',
    howToRecognizeHy: 'Անդեմ ձևեր՝ Ինֆինիտիվ (-ar, -er, -ir), Հարակատար դերբայ (-ado, -ido), Համակատար/անկատար (-ando, -iendo): Դիմավոր ձևեր՝ խոնարհված (canto, comió, viviremos):',
    purposeEs: 'Constituye el núcleo imprescindible del predicado y de la oración.',
    purposeHy: 'Նախադասության և ստորոգյալի պարտադիր կորիզն է։',
    examples: [
      { es: 'Los alumnos estudiaron toda la tarde para el examen.', hy: 'Աշակերտները ամբողջ կեսօր սովորեցին քննության համար։', highlight: 'estudiaron (pretérito perfecto simple, 3.ª plural)' },
      { es: 'Mañana saldremos temprano hacia la montaña.', hy: 'Վաղը վաղ դուրս կգանք դեպի սար։', highlight: 'saldremos (futuro simple, 1.ª plural)' },
      { es: 'Mi abuela está contenta con la visita familiar.', hy: 'Տատիկս ուրախ է ընտանեկան այցելությունից։', highlight: 'está (verbo copulativo de estado)' },
      { es: 'El árbol crecía cerca del río cristalino.', hy: 'Ծառը աճում էր բյուրեղյա գետի մոտ։', highlight: 'crecía (proceso, pretérito imperfecto)' },
      { es: 'Quiero cantar una canción tradicional.', hy: 'Ուզում եմ երգել ավանդական մի երգ։', highlight: 'Quiero (conjugado), cantar (infinitivo)' },
      { es: 'Hemos terminado todos los ejercicios a tiempo.', hy: 'Մենք ժամանակին ավարտեցինք բոլոր վարժությունները։', highlight: 'Hemos terminado (forma compuesta)' }
    ],
    frequentMistakesEs: 'No reconocer formas compuestas («he comido», «había dicho») como UN SOLO verbo.',
    frequentMistakesHy: 'Բաղադրյալ ժամանակաձևերը («he comido», «había dicho») չճանաչել որպես ՄԵԿ բայական ձև։',
    confusionsEs: 'El infinitivo (bailar) es un verbo, no un sustantivo, aunque a veces funcione como tal.',
    confusionsHy: 'Անորոշ դերբայը (bailar) բայ է, ոչ թե գոյական, թեև կարող է կատարել գոյականի դեր:',
    memoryTrickEs: 'Si puedes conjugarlo con «Yo, tú, él...», es un verbo: Yo salto, tú saltas.',
    memoryTrickHy: 'Եթե կարող ես խոնարհել՝ «Yo, tú, él...», ուրեմն դա բայ է՝ Yo como, tú comes:',
    checkpointQuestions: [
      {
        id: 'cp_7_1',
        questionEs: '¿Cuál de las siguientes formas es un verbo en forma no personal?',
        questionHy: 'Հետևյալներից ո՞րն է բայի անդեմ ձև (forma no personal):',
        options: [
          { id: 'a', textEs: 'Escribiendo (gerundio)', textHy: 'Escribiendo (դերբայ - gerundio)', isCorrect: true },
          { id: 'b', textEs: 'Escribió', textHy: 'Escribió (գրեց)', isCorrect: false },
          { id: 'c', textEs: 'Escribirás', textHy: 'Escribirás (կգրես)', isCorrect: false },
          { id: 'd', textEs: 'Escribimos', textHy: 'Escribimos (գրում ենք)', isCorrect: false }
        ],
        explanationEs: 'Los infinitivos, gerundios y participios son las tres formas no personales del verbo.',
        explanationHy: 'Infinitivo, gerundio և participio-ն բայի երեք անդեմ ձևերն են:'
      }
    ],
    flashcards: [
      {
        id: 'fc_7_1',
        frontEs: '¿Cuáles son las tres formas no personales del verbo?',
        frontHy: 'Որո՞նք են բայի երեք անդեմ ձևերը (formas no personales):',
        backEs: 'Infinitivo (-ar, -er, -ir), Gerundio (-ando, -iendo) y Participio (-ado, -ido).',
        backHy: 'Infinitivo (ել, ալ), Gerundio (ելիս, անդո/իենդո) և Participio (ած/ածո):'
      }
    ]
  },
  {
    id: 'tema_8_adverbio',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Las Categorías Gramaticales',
    moduleNameHy: 'Մոդուլ 2. Քերականական կարգեր (խոսքի մասեր)',
    number: 8,
    titleEs: 'El adverbio',
    titleHy: 'Մակբայ (El adverbio)',
    definitionEs: 'El adverbio es una palabra INVARIABLE (no tiene género ni número) que complementa o modifica a un verbo, a un adjetivo o a otro adverbio, indicando circunstancias.',
    definitionHy: 'Մակբայը ԱՆՓՈՓՈԽ խոսքի մաս է (չունի սեռ և թիվ), որը լրացնում կամ փոփոխում է բային, ածականին կամ մեկ այլ մակբայի՝ ցույց տալով հանգամանքներ:',
    simpleExplanationEs: 'Explica DÓNDE (aquí, lejos), CUÁNDO (hoy, ayer), CÓMO (bien, despacio), CUÁNTO (mucho, poco), o expresa afirmación (sí), negación (no, jamás) o duda (quizá). ¡Y nunca cambia a femenino o plural!',
    simpleExplanationHy: 'Բացատրում է՝ ՈՐՏԵՂ (այստեղ), ԵՐԲ (այսօր), ԻՆՉՊԵՍ (լավ, դանդաղ), ՈՐՔԱՆ (շատ, քիչ), կամ հաստատում (այո), ժխտում (ոչ) կամ կասկած (գուցե)։ Ու ԵՐԲԵՔ չի փոխվում հոգնակիի կամ իգականի։',
    howToRecognizeEs: 'Prueba a cambiar la frase a plural: si la palabra se queda exactamente igual, es adverbio («Ellas leen mucho» -> «Él lee mucho»).',
    howToRecognizeHy: 'Փորձիր նախադասությունը դարձնել հոգնակի. եթե բառը մնում է նույնությամբ, դա մակբայ է («Ella habla rápido», «Ellas hablan rápido»)։',
    purposeEs: 'Aporta circunstancias precisas de tiempo, lugar, modo o cantidad a las acciones.',
    purposeHy: 'Գործողություններին հաղորդում է տեղի, ժամանակի, ձևի կամ քանակի հստակ հանգամանքներ։',
    examples: [
      { es: 'El tren llegó muy tarde a la estación.', hy: 'Գնացքը շատ ուշ հասավ կայարան։', highlight: 'muy (adv. cantidad modifica a adv), tarde (adv. tiempo modifica a verbo)' },
      { es: 'Pon los libros aquí, encima de la mesa.', hy: 'Դիր գրքերը այստեղ, սեղանի վրա։', highlight: 'aquí, encima (adverbios de lugar)' },
      { es: 'El alumno resolvió el problema fácilmente.', hy: 'Աշակերտը հեշտությամբ լուծեց խնդիրը։', highlight: 'fácilmente (adverbio de modo terminado en -mente)' },
      { es: 'Ellos comieron bastante durante la fiesta.', hy: 'Նրանք բավականին կերան երեկույթի ընթացքում։', highlight: 'bastante (adverbio de cantidad que modifica al verbo comieron)' },
      { es: 'Sí, vendré mañana sin falta.', hy: 'Այո, վաղը անպայման կգամ։', highlight: 'Sí (afirmación), mañana (tiempo)' },
      { es: 'Jamás olvidaré aquel viaje a Granada.', hy: 'Երբեք չեմ մոռանա այդ ճամփորդությունը Գրանադա։', highlight: 'Jamás (adverbio de negación/tiempo)' }
    ],
    frequentMistakesEs: 'Confundir «mucho» determinante («muchos libros» -> varía) con «mucho» adverbio («trabaja mucho» -> invariable).',
    frequentMistakesHy: 'Շփոթել «mucho» determinante-ը («muchos libros» - փոխվում է) «mucho» մակբայի հետ («trabaja mucho» - չի փոխվում):',
    confusionsEs: 'Las palabras terminadas en «-mente» (rápidamente, alegremente) son casi siempre adverbios de modo.',
    confusionsHy: '«-mente»-ով վերջացող բառերը գրեթե միշտ ձևի մակբայներ են (clara-mente, rápida-mente):',
    memoryTrickEs: 'El adverbio es «inmortal y solitario»: no tiene género ni número, nunca lleva «s» de plural.',
    memoryTrickHy: 'Մակբայը անփոփոխ է՝ չունի իգական կամ հոգնակի («s» չի ավելանում)։',
    checkpointQuestions: [
      {
        id: 'cp_8_1',
        questionEs: 'En «Ellas caminan muy despacio», ¿qué categoría tiene «despacio»?',
        questionHy: '«Ellas caminan muy despacio» նախադասության մեջ ի՞նչ է «despacio»-ն:',
        options: [
          { id: 'a', textEs: 'Un adverbio de modo', textHy: 'Ձևի մակբայ (adverbio de modo)', isCorrect: true },
          { id: 'b', textEs: 'Un adjetivo calificativo', textHy: 'Որակական ածական', isCorrect: false },
          { id: 'c', textEs: 'Un sustantivo', textHy: 'Գոյական', isCorrect: false },
          { id: 'd', textEs: 'Una preposición', textHy: 'Նախդիր', isCorrect: false }
        ],
        explanationEs: 'Indica CÓMO caminan y es invariable; por tanto es adverbio de modo.',
        explanationHy: 'Ցույց է տալիս, թե ԻՆՉՊԵՍ են քայլում, և անփոփոխ է. ուստի ձևի մակբայ է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_8_1',
        frontEs: '¿A qué tres tipos de palabras puede modificar un adverbio?',
        frontHy: 'Ո՞ր երեք տեսակի բառերին կարող է լրացնել մակբայը:',
        backEs: 'A un verbo («corre rápido»), a un adjetivo («muy inteligente») o a otro adverbio («bastante cerca»).',
        backHy: 'Բային («corre rápido»), ածականին («muy inteligente») կամ մեկ այլ մակբայի («bastante cerca»):'
      }
    ]
  },
  {
    id: 'tema_9_10_determinante_articulo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Las Categorías Gramaticales',
    moduleNameHy: 'Մոդուլ 2. Քերականական կարգեր (խոսքի մասեր)',
    number: 9,
    titleEs: 'El determinante y el artículo',
    titleHy: 'Որոշիչ (Determinante) և Արտիկլ (Artículo)',
    definitionEs: 'Los determinantes son palabras que acompañan al sustantivo para concretarlo, delimitarlo y concordar con él en género y número. El artículo es la clase principal de determinante.',
    definitionHy: 'Determinante-ները բառեր են, որոնք ուղեկցում են գոյականին՝ հստակեցնելով այն և համաձայնելով նրա հետ սեռով ու թվով: Արտիկլը determinante-ի հիմնական տեսակն է:',
    simpleExplanationEs: 'No es lo mismo decir «perro» en general que «el perro», «mi perro», «este perro» o «tres perros». Esas palabras que van DELANTE del sustantivo son determinantes.',
    simpleExplanationHy: 'Նույնը չէ ասել «շուն» ընդհանուր, թե «el perro» (այս շունը), «mi perro» (իմ շունը), «tres perros» (երեք շուն)։ Գոյականից առաջ դրվող այդ բառերը determinant-ներ են։',
    howToRecognizeEs: 'Clases de determinantes: 1. Artículos (determinados: el, la, los, las; indeterminados: un, una, unos, unas). 2. Demostrativos (este, ese, aquel). 3. Posesivos (mi, tu, su, nuestro). 4. Numerales (uno, dos, primer). 5. Indefinidos (algún, ningún, muchos). 6. Interrogativos y exclamativos (¡qué!, ¿cuántos?).',
    howToRecognizeHy: 'Տեսակները՝ 1. Արտիկլներ (el, la, los, las, un, una...)։ 2. Ցուցական (este, ese, aquel)։ 3. Ստացական (mi, tu, su...)։ 4. Թվական (uno, dos, primer)։ 5. Անորոշ (algún, muchos)։ 6. Հարցական/բացականչական (qué, cuántos):',
    purposeEs: 'Delimitan la extensión del sustantivo para que sepamos exactamente a qué objeto o persona nos referimos.',
    purposeHy: 'Սահմանափակում են գոյականի իմաստը, որպեսզի հասկանանք՝ կոնկրետ ում կամ ինչի մասին է խոսքը։',
    examples: [
      { es: 'El profesor felicitó a los alumnos ganadores.', hy: 'Ուսուցիչը շնորհավորեց հաղթող աշակերտներին։', highlight: 'El (artículo determinado), los (artículo determinado)' },
      { es: 'Un día cualquiera vendrá una sorpresa.', hy: 'Մի սովորական օր մի անակնկալ կգա։', highlight: 'Un, una (artículos indeterminados)' },
      { es: 'Este bolígrafo y aquella mochila son míos.', hy: 'Այս գրիչը և այն պայուսակը իմն են։', highlight: 'Este, aquella (determinantes demostrativos que acompañan sustantivos)' },
      { es: 'Nuestra tutora nos dio tres oportunidades.', hy: 'Մեր դասղեկը մեզ երեք հնարավորություն տվեց։', highlight: 'Nuestra (posesivo), tres (numeral cardinal)' },
      { es: 'Varios chicos comieron algunas galletas.', hy: 'Մի քանի տղա կերան որոշ թխվածքաբլիթներ։', highlight: 'Varios, algunas (determinantes indefinidos)' },
      { es: '¡Qué alegría verte de nuevo por aquí!', hy: 'Ի՜նչ ուրախություն է քեզ կրկին այստեղ տեսնել։', highlight: 'Qué (determinante exclamativo)' }
    ],
    frequentMistakesEs: 'Contracciones «al» (a + el) y «del» (de + el). Siguen conteniendo el artículo «el».',
    frequentMistakesHy: '«Al» (a + el) և «del» (de + el) միաձուլումները պարունակում են «el» արտիկլը:',
    confusionsEs: 'Si acompaña a un sustantivo = Determinante («Mi lápiz»). Si va solo = Pronombre («El mío»).',
    confusionsHy: 'Եթե գոյականի առաջ է = Determinante: Եթե գոյական չկա = Pronombre:',
    memoryTrickEs: '«Detrás del determinante, siempre hay un sustantivo acompañante».',
    memoryTrickHy: '«Determinante-ի կողքին միշտ կա գոյական ընկեր»:',
    checkpointQuestions: [
      {
        id: 'cp_9_1',
        questionEs: 'En la frase «Mis dos primos llegaron ayer», ¿qué tipos de determinantes hay?',
        questionHy: '«Mis dos primos llegaron ayer» նախադասության մեջ ի՞նչ determinante-ներ կան:',
        options: [
          { id: 'a', textEs: 'Un posesivo («Mis») y un numeral («dos»)', textHy: 'Ստացական («Mis») և թվական («dos»)', isCorrect: true },
          { id: 'b', textEs: 'Dos artículos determinados', textHy: 'Երկու որոշյալ արտիկլ', isCorrect: false },
          { id: 'c', textEs: 'Un pronombre y un adjetivo', textHy: 'Դերանուն և ածական', isCorrect: false },
          { id: 'd', textEs: 'Un adverbio y un sustantivo', textHy: 'Մակբայ և գոյական', isCorrect: false }
        ],
        explanationEs: '«Mis» es posesivo y «dos» es numeral cardinal; ambos determinan al sustantivo «primos».',
        explanationHy: '«Mis»-ը ստացական է, իսկ «dos»-ը՝ քանակական թվական. երկուսն էլ ուղեկցում են «primos» գոյականին:'
      }
    ],
    flashcards: [
      {
        id: 'fc_9_1',
        frontEs: '¿Cuáles son los artículos determinados e indeterminados en español?',
        frontHy: 'Որո՞նք են որոշյալ և անորոշ արտիկլները իսպաներենում:',
        backEs: 'Determinados: el, la, los, las. Indeterminados: un, una, unos, unas.',
        backHy: 'Որոշյալ՝ el, la, los, las: Անորոշ՝ un, una, unos, unas:'
      }
    ]
  },
  {
    id: 'tema_11_12_13_preposicion_conjuncion_interjeccion',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Las Categorías Gramaticales',
    moduleNameHy: 'Մոդուլ 2. Քերականական կարգեր (խոսքի մասեր)',
    number: 10,
    titleEs: 'Preposición, Conjunción e Interjección',
    titleHy: 'Նախդիր (Preposición), Շաղկապ (Conjunción) և Ձայնարկություն (Interjección)',
    definitionEs: 'Son palabras invariables de relación y expresión: las preposiciones unen palabras subordinando una a otra; las conjunciones enlazan palabras u oraciones; las interjecciones expresan impresiones súbitas.',
    definitionHy: 'Սրանք անփոփոխ կապակցական և արտահայտչական բառեր են. նախդիրները կապում են բառերը ստորադասելով, շաղկապները միացնում են բառեր կամ նախադասություններ, իսկ ձայնարկությունները արտահայտում են հանկարծակի զգացմունքներ:',
    simpleExplanationEs: 'Las preposiciones son una lista fija que te aprendes de memoria (a, ante, bajo...). Las conjunciones son los puentes como «y», «pero», «porque». Las interjecciones son los gritos como «¡Ay!», «¡Bravo!».',
    simpleExplanationHy: 'Նախդիրները ֆիքսված ցուցակ են, որոնք անգիր են սովորում (a, ante, bajo, con...). Շաղկապները կամուրջներ են՝ «y» (և), «pero» (բայց), «porque» (որովհետև)։ Ձայնարկությունները բացականչություններ են՝ «¡Ay!» (վա՜յ), «¡Bravo!» (ապրե՜ս)։',
    howToRecognizeEs: 'Preposiciones (19 oficiales en 1.º ESO): a, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras. Conjunciones: y, e, ni, o, u, pero, sino, porque, si, aunque. Interjecciones: ¡Ay!, ¡Oh!, ¡Uf!, ¡Bravo!, ¡Hola! entre signos de admiración.',
    howToRecognizeHy: 'Preposiciones՝ a, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, para, por, según, sin, sobre, tras: Conjunciones՝ y, e, ni, o, u, pero, porque, si: Interjecciones՝ ¡Ay!, ¡Oh!, ¡Uf!, ¡Bravo!:',
    purposeEs: 'Estructuran las oraciones relacionando sus componentes o transmitiendo estados de ánimo instantáneos.',
    purposeHy: 'Կառուցում են նախադասությունները՝ կապելով բաղադրիչները կամ արտահայտելով ակնթարթային հուզական վիճակներ։',
    examples: [
      { es: 'Fui de Madrid a Toledo en autobús.', hy: 'Ես Մադրիդից Տոլեդո գնացի ավտոբուսով։', highlight: 'de, a, en (preposiciones)' },
      { es: 'Estudió mucho, pero el examen era muy difícil.', hy: 'Շատ սովորեց, բայց քննությունը շատ դժվար էր։', highlight: 'pero (conjunción adversativa)' },
      { es: 'No vino a clase porque estaba enfermo.', hy: 'Դասի չեկավ, որովհետև հիվանդ էր։', highlight: 'porque (conjunción causal subordinante)' },
      { es: '¡Ay! Me he golpeado el dedo con la puerta.', hy: 'Վա՜յ։ Մատս հարվածեցի դռանը։', highlight: '¡Ay! (interjección expresiva)' },
      { es: 'Libros de lengua sobre la mesa del profesor.', hy: 'Մայրենիի գրքեր ուսուցչի սեղանի վրա։', highlight: 'de, sobre (preposiciones)' },
      { es: 'Compró manzanas y peras o plátanos.', hy: 'Նա գնեց խնձոր ու տանձ կամ բանան։', highlight: 'y (copulativa), o (disyuntiva)' }
    ],
    frequentMistakesEs: 'Confundir «porque» (conjunción de causa, junto y sin tilde) con «¿por qué?» (preposición + pronombre interrogativo).',
    frequentMistakesHy: 'Շփոթել «porque» (պատճառական շաղկապ՝ որովհետև) «¿por qué?»-ի հետ (հարցական՝ ինչո՞ւ)։',
    confusionsEs: 'Las preposiciones exigen un término detrás («con mi amigo»). Las conjunciones enlazan dos miembros del mismo nivel o una subordinada.',
    confusionsHy: 'Preposición-ները միշտ պահանջում են լրացում («con amigos»), իսկ conjunción-ները կապում են երկու անդամներ («pan y leche»):',
    memoryTrickEs: 'Canta la lista: «A, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, para, por, según, sin, sobre, tras». ¡Siempre te salvará en el examen!',
    memoryTrickHy: 'Անգիր ասա նախդիրների ցանկը՝ A, ante, bajo, con, contra, de, desde, en, entre, hacia, hasta, para, por, sin, sobre, tras: Դա քեզ միշտ կօգնի քննությանը:',
    checkpointQuestions: [
      {
        id: 'cp_10_1',
        questionEs: '¿Cuál de las siguientes palabras es una preposición?',
        questionHy: 'Հետևյալ բառերից ո՞րն է նախդիր (preposición):',
        options: [
          { id: 'a', textEs: 'Hacia', textHy: 'Hacia (դեպի)', isCorrect: true },
          { id: 'b', textEs: 'Pero', textHy: 'Pero (բայց - շաղկապ)', isCorrect: false },
          { id: 'c', textEs: 'Porque', textHy: 'Porque (որովհետև - շաղկապ)', isCorrect: false },
          { id: 'd', textEs: '¡Bravo!', textHy: '¡Bravo! (ձայնարկություն)', isCorrect: false }
        ],
        explanationEs: '«Hacia» indica dirección y forma parte de la lista cerrada de preposiciones.',
        explanationHy: '«Hacia»-ն ուղղություն է ցույց տալիս և նախդիրների ֆիքսված ցանկի մեջ է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_10_1',
        frontEs: '¿Qué es una interjección y cómo se escribe habitualmente?',
        frontHy: 'Ի՞նչ է ձայնարկությունը (interjección) և ինչպե՞ս է սովորաբար գրվում:',
        backEs: 'Es una palabra invariable que expresa emociones o impresiones súbitas, y se escribe entre signos de exclamación (¡ay!, ¡hola!, ¡ojalá!).',
        backHy: 'Անփոփոխ բառ է, որն արտահայտում է հանկարծակի հույզեր կամ տպավորություններ և գրվում է բացականչական նշանների մեջ (¡ay!, ¡uf!):'
      }
    ]
  }
];
