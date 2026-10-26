import { ExerciseItem } from './types';

export const exercisesModule1And2: ExerciseItem[] = [
  // TEMA 1: COMUNICACIÓN
  {
    id: 'ex_com_1',
    topicId: 'tema_1_comunicacion',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: La Comunicación',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: 'David envía un correo electrónico a su profesora preguntando por la fecha del examen. ¿Quién es el RECEPTOR en esta situación?',
    promptHy: 'Դավիթը էլեկտրոնային նամակ է ուղարկում ուսուցչուհուն՝ հարցնելով քննության օրը։ Ո՞վ է ՍՏԱՑՈՂԸ (Receptor) այս իրավիճակում։',
    options: [
      { id: 'opt_1', textEs: 'La profesora', textHy: 'Ուսուցչուհին', isCorrect: true },
      { id: 'opt_2', textEs: 'David', textHy: 'Դավիթը', isCorrect: false },
      { id: 'opt_3', textEs: 'El correo electrónico', textHy: 'Էլեկտրոնային նամակը', isCorrect: false },
      { id: 'opt_4', textEs: 'La fecha del examen', textHy: 'Քննության օրը', isCorrect: false }
    ],
    explanationEs: 'El receptor es quien recibe el mensaje. David es el emisor y la profesora es la destinataria que lo recibe.',
    explanationHy: 'Ստացողը (receptor) նա է, ով ընդունում է հաղորդագրությունը: Դավիթը ուղարկողն է, իսկ ուսուցչուհին՝ ստացողը:',
    whyOthersWrongEs: 'David es el emisor. El correo es el canal. La fecha es parte del mensaje.',
    whyOthersWrongHy: 'Դավիթը ուղարկողն է (emisor): Էլ. նամակը կապուղին է (canal): Օրը՝ հաղորդագրությունը:',
    ruleToRememberEs: 'Receptor = quien recibe e interpreta el mensaje.',
    ruleToRememberHy: 'Ստացող (Receptor) = նա, ով ընդունում և ընկալում է հաղորդագրությունը:'
  },
  {
    id: 'ex_com_2',
    topicId: 'tema_1_comunicacion',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: La Comunicación',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    promptEs: 'Un árbitro muestra una tarjeta amarilla a un futbolista. ¿Cuál es el CÓDIGO utilizado?',
    promptHy: 'Մրցավարը դեղին քարտ է ցույց տալիս ֆուտբոլիստին։ Ո՞րն է կիրառված ԿՈԴԸ (Código):',
    options: [
      { id: 'opt_1', textEs: 'El sistema de colores y tarjetas del reglamento de fútbol (código no verbal)', textHy: 'Ֆուտբոլի կանոնների գույների և քարտերի համակարգը (ոչ խոսքային կոդ)', isCorrect: true },
      { id: 'opt_2', textEs: 'El césped del estadio', textHy: 'Մարզադաշտի խոտածածկույթը', isCorrect: false },
      { id: 'opt_3', textEs: 'El silbato de metal', textHy: 'Մետաղյա սուլիչը', isCorrect: false },
      { id: 'opt_4', textEs: 'El futbolista amonestado', textHy: 'Նախազգուշացված ֆուտբոլիստը', isCorrect: false }
    ],
    explanationEs: 'El código es el conjunto de signos convenidos que transmiten un significado (amarilla = advertencia grave).',
    explanationHy: 'Կոդը (código) պայմանական նշանների համակարգն է (դեղին քարտ = նախազգուշացում):',
    ruleToRememberEs: 'Código = signos y reglas para construir el mensaje (verbal o no verbal).',
    ruleToRememberHy: 'Կոդ = նշաններ և կանոններ հաղորդագրություն կառուցելու համար:'
  },
  {
    id: 'ex_com_tf_1',
    topicId: 'tema_1_comunicacion',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: La Comunicación',
    type: 'true_false',
    difficulty: 'facil',
    promptEs: '¿Verdadero o Falso? El CANAL es el idioma en el que se escribe un mensaje.',
    promptHy: 'Ճի՞շտ է, թե՞ Սխալ։ ԿԱՊՈՒՂԻՆ (Canal) այն լեզուն է, որով գրվում է հաղորդագրությունը։',
    options: [
      { id: 'opt_false', textEs: 'Falso', textHy: 'Սխալ (Falso)', isCorrect: true },
      { id: 'opt_true', textEs: 'Verdadero', textHy: 'Ճիշտ (Verdadero)', isCorrect: false }
    ],
    explanationEs: '¡Falso! El idioma es el CÓDIGO. El canal es el medio físico por el que viaja (el aire, el papel, la pantalla).',
    explanationHy: 'Սխալ է։ Լեզուն ԿՈԴՆ է (Código): Կապուղին (Canal) ֆիզիկական միջոցն է (օդ, թուղթ, էկրան):',
    ruleToRememberEs: 'Idioma = Código. Soporte físico = Canal.',
    ruleToRememberHy: 'Լեզու = Կոդ: Ֆիզիկական կրիչ = Կապուղի:'
  },

  // TEMA 2: FUNCIONES DEL LENGUAJE
  {
    id: 'ex_func_1',
    topicId: 'tema_2_funciones_lenguaje',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: Funciones del Lenguaje',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: '«¡Por favor, abre la puerta de la clase!» ¿Qué función del lenguaje predomina?',
    promptHy: '«Խնդրում եմ, բացի՛ր դասարանի դուռը»։ Լեզվի ո՞ր գործառույթն է գերակշռում։',
    options: [
      { id: 'opt_1', textEs: 'Función apelativa o conativa', textHy: 'Կոչական / ներգործող (apelativa)', isCorrect: true },
      { id: 'opt_2', textEs: 'Función referencial', textHy: 'Տեղեկատվական (referencial)', isCorrect: false },
      { id: 'opt_3', textEs: 'Función metalingüística', textHy: 'Մետալեզվական', isCorrect: false },
      { id: 'opt_4', textEs: 'Función fática', textHy: 'Կոնտակտային', isCorrect: false }
    ],
    explanationEs: 'El emisor da una orden o petición para influir directamente en la conducta del receptor.',
    explanationHy: 'Խոսողը հրաման կամ խնդրանք է տալիս՝ անմիջապես ազդելով լսողի վարքի վրա:',
    ruleToRememberEs: 'Apelativa = influye en el receptor mediante imperativos o peticiones.',
    ruleToRememberHy: 'Apelativa = ազդում է ստացողի վրա հրամանների կամ խնդրանքների միջոցով:'
  },
  {
    id: 'ex_func_2',
    topicId: 'tema_2_funciones_lenguaje',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: Funciones del Lenguaje',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    promptEs: '«La palabra "árbol" lleva tilde porque es llana terminada en consonante distinta de n o s». ¿Qué función predomina?',
    promptHy: '«"Árbol" բառը կրում է շեշտ, որովհետև նախավերջին վանկի վրա է և ավարտվում է բաղաձայնով»: Ո՞ր գործառույթն է:',
    options: [
      { id: 'opt_1', textEs: 'Función metalingüística', textHy: 'Մետալեզվական (Función metalingüística)', isCorrect: true },
      { id: 'opt_2', textEs: 'Función poética', textHy: 'Պոետիկ', isCorrect: false },
      { id: 'opt_3', textEs: 'Función emotiva', textHy: 'Հուզական', isCorrect: false },
      { id: 'opt_4', textEs: 'Función fática', textHy: 'Կոնտակտային', isCorrect: false }
    ],
    explanationEs: 'Se utiliza la lengua española para hablar y explicar las reglas de la propia lengua (código).',
    explanationHy: 'Լեզուն օգտագործվում է հենց լեզվի կանոնները (կոդը) բացատրելու համար:',
    ruleToRememberEs: 'Metalingüística = cuando el mensaje habla sobre la propia gramática o el idioma.',
    ruleToRememberHy: 'Metalingüística = երբ հաղորդագրությունը խոսում է հենց քերականության կամ լեզվի մասին:'
  },
  {
    id: 'ex_func_3',
    topicId: 'tema_2_funciones_lenguaje',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: Funciones del Lenguaje',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: '«¿Hola? ¿Sí? ¿Me oyes bien desde el autobús?» ¿Qué función predomina?',
    promptHy: '«Ալո՞։ Այո՞։ Ինձ լավ լսո՞ւմ ես ավտոբուսից»։ Ո՞ր գործառույթն է գերակշռում։',
    options: [
      { id: 'opt_1', textEs: 'Función fática o de contacto', textHy: 'Կապի հաստատման / կոնտակտային (fática)', isCorrect: true },
      { id: 'opt_2', textEs: 'Función representativa', textHy: 'Ներկայացուցչական', isCorrect: false },
      { id: 'opt_3', textEs: 'Función poética', textHy: 'Պոետիկ', isCorrect: false },
      { id: 'opt_4', textEs: 'Función metalingüística', textHy: 'Մետալեզվական', isCorrect: false }
    ],
    explanationEs: 'Sirve para abrir, mantener o comprobar que el canal de comunicación funciona.',
    explanationHy: 'Ծառայում է կապուղին բացելու, պահպանելու կամ նրա աշխատանքը ստուգելու համար:'
  },

  // TEMA 3: MODALIDADES ORACIONALES
  {
    id: 'ex_mod_1',
    topicId: 'tema_3_modalidades_oracionales',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: Modalidades Oracionales',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: '«Ojalá ganemos el partido del próximo viernes». ¿Qué modalidad oracional tiene?',
    promptHy: '«Երանի՜ հաղթենք հաջորդ ուրբաթ օրվա խաղը»։ Ի՞նչ տեսակի նախադասություն է։',
    options: [
      { id: 'opt_1', textEs: 'Desiderativa (expresa un deseo)', textHy: 'Ըղձական (Desiderativa - ցանկություն)', isCorrect: true },
      { id: 'opt_2', textEs: 'Dubitativa (expresa duda)', textHy: 'Երկբայական (կասկած)', isCorrect: false },
      { id: 'opt_3', textEs: 'Exhortativa (expresa orden)', textHy: 'Հրամայական', isCorrect: false },
      { id: 'opt_4', textEs: 'Enunciativa afirmativa', textHy: 'Հաստատական պատմողական', isCorrect: false }
    ],
    explanationEs: '«Ojalá» expresa un anhelo o deseo del hablante, lo que define a las oraciones desiderativas.',
    explanationHy: '«Ojalá» բառը արտահայտում է խոսողի ցանկությունը (desiderativa):'
  },
  {
    id: 'ex_mod_2',
    topicId: 'tema_3_modalidades_oracionales',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: Modalidades Oracionales',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    promptEs: '«Dime a qué hora vendrás a buscarme». Esta oración es...',
    promptHy: '«Ասա ինձ, թե որ ժամին կգաս իմ հետևից»։ Այս նախադասությունը...',
    options: [
      { id: 'opt_1', textEs: 'Interrogativa indirecta', textHy: 'Անուղղակի հարցական (Interrogativa indirecta)', isCorrect: true },
      { id: 'opt_2', textEs: 'Interrogativa directa', textHy: 'Ուղղակի հարցական', isCorrect: false },
      { id: 'opt_3', textEs: 'Dubitativa', textHy: 'Երկբայական', isCorrect: false },
      { id: 'opt_4', textEs: 'Desiderativa', textHy: 'Ըղձական', isCorrect: false }
    ],
    explanationEs: 'Formula una pregunta subordinada sin utilizar signos de interrogación ¿...?, con pronombre tildado «qué».',
    explanationHy: 'Հարցը ձևակերպված է առանց հարցական նշանների (¿...?), ուստի անուղղակի հարցական է:'
  },

  // TEMA 4: SUSTANTIVO
  {
    id: 'ex_sust_1',
    topicId: 'tema_4_sustantivo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: 'En la frase «El rebaño pastaba tranquilo en la colina», ¿qué tipo de sustantivo es «rebaño»?',
    promptHy: '«El rebaño pastaba tranquilo en la colina» նախադասության մեջ ի՞նչ տեսակի գոյական է «rebaño»-ն (հոտ):',
    options: [
      { id: 'opt_1', textEs: 'Sustantivo común, concreto y colectivo', textHy: 'Հասարակ, թանձրացական և հավաքական (colectivo)', isCorrect: true },
      { id: 'opt_2', textEs: 'Sustantivo propio e individual', textHy: 'Հատուկ և անհատական', isCorrect: false },
      { id: 'opt_3', textEs: 'Sustantivo abstracto', textHy: 'Վերացական', isCorrect: false },
      { id: 'opt_4', textEs: 'Adjetivo calificativo', textHy: 'Որակական ածական', isCorrect: false }
    ],
    explanationEs: '«Rebaño» nombra en singular a un conjunto de animales (ovejas), por tanto es colectivo.',
    explanationHy: '«Rebaño»-ն եզակի թվով անվանում է կենդանիների խումբ (հոտ), ուստի հավաքական գոյական է:'
  },
  {
    id: 'ex_sust_2',
    topicId: 'tema_4_sustantivo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    promptEs: '¿Cuál de las siguientes palabras es un sustantivo ABSTRACTO?',
    promptHy: 'Հետևյալ բառերից ո՞րն է ՎԵՐԱՑԱԿԱՆ գոյական (abstracto):',
    options: [
      { id: 'opt_1', textEs: 'Esperanza', textHy: 'Հույս (Esperanza)', isCorrect: true },
      { id: 'opt_2', textEs: 'Bolígrafo', textHy: 'Գրիչ', isCorrect: false },
      { id: 'opt_3', textEs: 'Montaña', textHy: 'Լեռ', isCorrect: false },
      { id: 'opt_4', textEs: 'Perro', textHy: 'Շուն', isCorrect: false }
    ],
    explanationEs: 'La esperanza no se puede percibir por los cinco sentidos (ver, tocar, oler); es una idea o sentimiento, por tanto es un sustantivo abstracto.',
    explanationHy: 'Հույսը չենք կարող զգալ հինգ զգայարաններով (շոշափել, տեսնել), այն գաղափար է՝ վերացական գոյական:'
  },

  // TEMA 5: PRONOMBRE VS DETERMINANTE
  {
    id: 'ex_pro_1',
    topicId: 'tema_5_pronombre',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    promptEs: 'Analiza: «Este libro es mío, pero aquel es de Pedro». ¿Qué categoría gramatical tiene «aquel»?',
    promptHy: 'Վերլուծիր՝ «Este libro es mío, pero aquel es de Pedro»։ Ի՞նչ խոսքի մաս է «aquel» բառը։',
    options: [
      { id: 'opt_1', textEs: 'Pronombre demostrativo (va solo, sin sustantivo)', textHy: 'Ցուցական դերանուն (pronombre - մենակ է, առանց գոյականի)', isCorrect: true },
      { id: 'opt_2', textEs: 'Determinante demostrativo', textHy: 'Ցուցական որոշիչ (determinante)', isCorrect: false },
      { id: 'opt_3', textEs: 'Adjetivo calificativo', textHy: 'Ածական', isCorrect: false },
      { id: 'opt_4', textEs: 'Adverbio de lugar', textHy: 'Տեղի մակբայ', isCorrect: false }
    ],
    explanationEs: '«Aquel» no acompaña a ningún sustantivo, sino que lo sustituye («aquel libro»). Por tanto es PRONOMBRE.',
    explanationHy: '«Aquel»-ը չի ուղեկցում գոյականի, այլ փոխարինում է նրան («aquel libro»), ուստի ԴԵՐԱՆՈՒՆ է:'
  },
  {
    id: 'ex_pro_2',
    topicId: 'tema_5_pronombre',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: 'En «Mi hermano compró dos manzanas», ¿qué categoría tiene «Mi»?',
    promptHy: '«Mi hermano compró dos manzanas» նախադասության մեջ ի՞նչ է «Mi» բառը:',
    options: [
      { id: 'opt_1', textEs: 'Determinante posesivo (acompaña a hermano)', textHy: 'Ստացական որոշիչ (Determinante - ուղեկցում է hermano գոյականին)', isCorrect: true },
      { id: 'opt_2', textEs: 'Pronombre personal', textHy: 'Անձնական դերանուն', isCorrect: false },
      { id: 'opt_3', textEs: 'Sustantivo común', textHy: 'Հասարակ գոյական', isCorrect: false },
      { id: 'opt_4', textEs: 'Adjetivo calificativo', textHy: 'Որակական ածական', isCorrect: false }
    ],
    explanationEs: '«Mi» acompaña directamente al sustantivo «hermano», indicando posesión: es un determinante posesivo.',
    explanationHy: '«Mi» բառը անմիջապես ուղեկցում է «hermano» գոյականին, ուստի determinante posesivo է:'
  },

  // TEMA 6: ADJETIVO
  {
    id: 'ex_adj_1',
    topicId: 'tema_6_adjetivo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: 'En «Compré unas zapatillas blanquísimas», ¿en qué grado está el adjetivo «blanquísimas»?',
    promptHy: '«Compré unas zapatillas blanquísimas» նախադասության մեջ ո՞ր աստիճանի է «blanquísimas» ածականը:',
    options: [
      { id: 'opt_1', textEs: 'Grado superlativo absoluto', textHy: 'Բացարձակ գերադրական աստիճան (superlativo)', isCorrect: true },
      { id: 'opt_2', textEs: 'Grado positivo', textHy: 'Դրական աստիճան', isCorrect: false },
      { id: 'opt_3', textEs: 'Grado comparativo de igualdad', textHy: 'Հավասարության համեմատական', isCorrect: false },
      { id: 'opt_4', textEs: 'Grado comparativo de superioridad', textHy: 'Գերազանցության համեմատական', isCorrect: false }
    ],
    explanationEs: 'El sufijo «-ísima / -ísimo» indica el grado máximo o superlativo absoluto.',
    explanationHy: '«-ísima» վերջածանցը ցույց է տալիս ածականի գերադրական աստիճանը (superlativo):'
  },

  // TEMA 7: VERBO
  {
    id: 'ex_vrb_1',
    topicId: 'tema_7_verbo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    promptEs: '¿Qué forma verbal de las siguientes es un GERUNDIO?',
    promptHy: 'Հետևյալ բայական ձևերից ո՞րն է ԳԵՐՈՒՆԴԻՈՒՄԸ (Gerundio):',
    options: [
      { id: 'opt_1', textEs: 'Estudiando', textHy: 'Estudiando (սովորելիս)', isCorrect: true },
      { id: 'opt_2', textEs: 'Estudiado', textHy: 'Estudiado (հարակատար դերբայ - participio)', isCorrect: false },
      { id: 'opt_3', textEs: 'Estudiar', textHy: 'Estudiar (ինֆինիտիվ)', isCorrect: false },
      { id: 'opt_4', textEs: 'Estudiarás', textHy: 'Estudiarás (կսովորես)', isCorrect: false }
    ],
    explanationEs: 'El gerundio termina en «-ando» (1.ª conjugación) o «-iendo» (2.ª y 3.ª conjugación).',
    explanationHy: 'Gerundio-ն վերջանում է «-ando» կամ «-iendo» (օր. estudiando):'
  },

  // TEMA 8: ADVERBIO
  {
    id: 'ex_adv_1',
    topicId: 'tema_8_adverbio',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    promptEs: 'En «Los alumnos resolvieron el ejercicio rápidamente», ¿qué tipo de palabra es «rápidamente»?',
    promptHy: '«Los alumnos resolvieron el ejercicio rápidamente» նախադասության մեջ ի՞նչ է «rápidamente» բառը:',
    options: [
      { id: 'opt_1', textEs: 'Adverbio de modo', textHy: 'Ձևի մակբայ (Adverbio de modo)', isCorrect: true },
      { id: 'opt_2', textEs: 'Adjetivo calificativo femenino', textHy: 'Իգական ածական', isCorrect: false },
      { id: 'opt_3', textEs: 'Sustantivo abstracto', textHy: 'Վերացական գոյական', isCorrect: false },
      { id: 'opt_4', textEs: 'Conjunción modal', textHy: 'Շաղկապ', isCorrect: false }
    ],
    explanationEs: 'Explica CÓMO resolvieron el ejercicio y es invariable. Termina en «-mente», típico de los adverbios de modo.',
    explanationHy: 'Բացատրում է, թե ԻՆՉՊԵՍ լուծեցին վարժությունը, և ավարտվում է «-mente»-ով. ձևի մակբայ է:'
  },

  // TEMA 11 & 12: PREPOSICIONES Y CONJUNCIONES
  {
    id: 'ex_prep_1',
    topicId: 'tema_11_12_13_preposicion_conjuncion_interjeccion',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: 'En «Fuimos desde Madrid hasta Valencia por la autopista», ¿cuántas PREPOSICIONES hay?',
    promptHy: '«Fuimos desde Madrid hasta Valencia por la autopista» նախադասության մեջ քանի՞ ՆԱԽԴԻՐ (preposición) կա:',
    options: [
      { id: 'opt_1', textEs: 'Tres: desde, hasta, por', textHy: 'Երեք՝ desde, hasta, por', isCorrect: true },
      { id: 'opt_2', textEs: 'Dos: desde, hasta', textHy: 'Երկու', isCorrect: false },
      { id: 'opt_3', textEs: 'Una: por', textHy: 'Մեկ', isCorrect: false },
      { id: 'opt_4', textEs: 'Cuatro: fuimos, desde, hasta, por', textHy: 'Չորս', isCorrect: false }
    ],
    explanationEs: '«Desde», «hasta» y «por» pertenecen a la lista cerrada de preposiciones del español.',
    explanationHy: '«Desde», «hasta» և «por» բառերը իսպաներենի նախդիրների ցանկից են:'
  },

  // MATCHING GAME: CATEGORÍAS GRAMATICALES
  {
    id: 'ex_match_cat_1',
    topicId: 'tema_4_sustantivo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'matching',
    difficulty: 'intermedio',
    promptEs: 'Relaciona cada palabra con su categoría gramatical correspondiente:',
    promptHy: 'Միացրու յուրաքանչյուր բառ իր համապատասխան խոսքի մասի հետ։',
    matchingPairs: [
      { id: 'mp1', leftEs: 'Valencia', leftHy: 'Valencia (քաղաք)', rightEs: 'Sustantivo propio', rightHy: 'Հատուկ գոյական' },
      { id: 'mp2', leftEs: 'Ellos', leftHy: 'Ellos (նրանք)', rightEs: 'Pronombre personal', rightHy: 'Անձնական դերանուն' },
      { id: 'mp3', leftEs: 'Rápidamente', leftHy: 'Rápidamente (արագորեն)', rightEs: 'Adverbio de modo', rightHy: 'Ձևի մակբայ' },
      { id: 'mp4', leftEs: 'Desde', leftHy: 'Desde (սկսած/մինչև)', rightEs: 'Preposición', rightHy: 'Նախդիր' }
    ],
    explanationEs: 'Valencia es sustantivo propio; Ellos es pronombre personal; Rápidamente es adverbio; Desde es preposición.',
    explanationHy: 'Valencia-ն հատուկ գոյական է, Ellos-ը՝ անձնական դերանուն, Rápidamente-ն՝ մակբայ, Desde-ն՝ նախդիր:',
    ruleToRememberEs: 'Reconocer cada categoría por su función y forma.',
    ruleToRememberHy: 'Ճանաչիր յուրաքանչյուր խոսքի մաս իր գործառույթով և ձևով:'
  },

  // SENTENCE PARSING (WORD BY WORD)
  {
    id: 'ex_parse_1',
    topicId: 'tema_4_sustantivo',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'sentence_parse',
    difficulty: 'dificil',
    promptEs: 'Clasifica gramaticalmente cada una de las palabras de esta oración:',
    promptHy: 'Քերականորեն դասակարգիր այս նախադասության յուրաքանչյուր բառը։',
    snippetEs: '«Mi hermano pequeño lee muchos libros hoy»',
    snippetHy: '«Իմ փոքր եղբայրը այսօր շատ գրքեր է կարդում»',
    parsedWords: [
      { word: 'Mi', categoryEs: 'Determinante posesivo', categoryHy: 'Ստացական որոշիչ', options: ['Determinante posesivo', 'Pronombre personal', 'Sustantivo'] },
      { word: 'hermano', categoryEs: 'Sustantivo común', categoryHy: 'Հասարակ գոյական', options: ['Sustantivo común', 'Adjetivo', 'Pronombre'] },
      { word: 'pequeño', categoryEs: 'Adjetivo calificativo', categoryHy: 'Որակական ածական', options: ['Adjetivo calificativo', 'Adverbio', 'Sustantivo'] },
      { word: 'lee', categoryEs: 'Verbo (presente)', categoryHy: 'Բայ (ներկա)', options: ['Verbo (presente)', 'Sustantivo', 'Preposición'] },
      { word: 'muchos', categoryEs: 'Determinante indefinido', categoryHy: 'Անորոշ որոշիչ', options: ['Determinante indefinido', 'Adverbio de cantidad', 'Pronombre'] },
      { word: 'libros', categoryEs: 'Sustantivo común', categoryHy: 'Հասարակ գոյական', options: ['Sustantivo común', 'Pronombre', 'Verbo'] },
      { word: 'hoy', categoryEs: 'Adverbio de tiempo', categoryHy: 'Ժամանակի մակբայ', options: ['Adverbio de tiempo', 'Preposición', 'Conjunción'] }
    ],
    explanationEs: 'Análisis completo: Mi (det. posesivo) + hermano (sustantivo) + pequeño (adjetivo) + lee (verbo) + muchos (det. indefinido) + libros (sustantivo) + hoy (adverbio tiempo).',
    explanationHy: 'Ամբողջական վերլուծություն՝ Mi (ստացական որոշիչ), hermano (գոյական), pequeño (ածական), lee (բայ), muchos (անորոշ որոշիչ), libros (գոյական), hoy (մակբայ):',
    ruleToRememberEs: 'Muchos libros: «muchos» varía con el sustantivo plural, por eso es DETERMINANTE.',
    ruleToRememberHy: '«Muchos libros»՝ muchos-ը փոխվում է գոյականի հետ, ուստի DETERMINANTE է:'
  }
];
