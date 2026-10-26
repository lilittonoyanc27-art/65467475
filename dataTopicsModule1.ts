import { TopicConcept } from './types';

export const module1Topics: TopicConcept[] = [
  {
    id: 'tema_1_comunicacion',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: La Comunicación y el Lenguaje',
    moduleNameHy: 'Մոդուլ 1. Հաղորդակցություն և լեզու',
    number: 1,
    titleEs: 'La comunicación y sus elementos',
    titleHy: 'Հաղորդակցությունը և նրա տարրերը',
    definitionEs: 'La comunicación es el proceso mediante el cual se transmite o intercambia información entre un emisor y un receptor utilizando un código común a través de un canal.',
    definitionHy: 'Հաղորդակցությունը գործընթաց է, որի միջոցով տեղեկատվություն է փոխանցվում կամ փոխանակվում ուղարկողի (emisor) և ստացողի (receptor) միջև ընդհանուր կոդով և կապուղով:',
    simpleExplanationEs: 'Comunicarse es compartir ideas, avisos o sentimientos. Cuando hablas con tu amigo o lees un cartel, hay alguien que lo envía y alguien que lo recibe.',
    simpleExplanationHy: 'Հաղորդակցվել նշանակում է կիսվել մտքերով, զգացմունքներով կամ տեղեկությամբ։ Երբ դու խոսում ես ընկերոջդ հետ կամ կարդում ես գրություն, մեկը ուղարկում է, մյուսը՝ ստանում։',
    howToRecognizeEs: 'Identifica quién emite (emisor), quién recibe (receptor), qué se dice (mensaje), qué lengua o signos usan (código) y por dónde viaja (canal: aire, papel, móvil).',
    howToRecognizeHy: 'Որոշիր՝ ով է ուղարկում (emisor), ով է ստանում (receptor), ինչ է ասվում (mensaje), ինչ լեզու/նշաններ են (código) և ինչ միջոցով է հասնում (canal)։',
    purposeEs: 'Permite convivir, aprender, pedir ayuda y expresar lo que pensamos.',
    purposeHy: 'Թույլ է տալիս շփվել, սովորել, օգնություն խնդրել և արտահայտել մտքերը։',
    examples: [
      {
        es: 'Ana envía un mensaje de WhatsApp a Pablo diciendo: «¿Tienes los deberes de Lengua?».',
        hy: 'Անան WhatsApp-ով հաղորդագրություն է ուղարկում Պաբլոյին. «Ունե՞ս մայրենիի տնայինը»:',
        highlight: 'Ana (emisor), Pablo (receptor), WhatsApp/Internet (canal)',
        highlightHy: 'Անա (ուղարկող), Պաբլո (ստացող), WhatsApp/Համացանց (կապուղի)',
        explanation: 'Emisor: Ana. Receptor: Pablo. Código: Español escrito. Canal: Teléfono móvil/Internet.',
        explanationHy: 'Ուղարկող՝ Անա։ Ստացող՝ Պաբլո։ Կոդ՝ իսպաներեն գրավոր։ Կապուղի՝ հեռախոս/համացանց։'
      },
      {
        es: 'El árbitro pita y saca tarjeta roja a un jugador de fútbol.',
        hy: 'Մրցավարը սուլում է և ֆուտբոլիստին կարմիր քարտ ցույց տալիս։',
        highlight: 'Árbitro (emisor), Jugador (receptor), Tarjeta/Gesto (código)',
        highlightHy: 'Մրցավար (ուղարկող), Ֆուտբոլիստ (ստացող), Քարտ (կոդ)',
        explanation: 'Código no verbal (tarjeta y silbato). Canal visual y auditivo.',
        explanationHy: 'Ոչ խոսքային կոդ (քարտ և սուլիչ)։ Տեսողական և լսողական կապուղի։'
      },
      {
        es: 'La profesora explica el tema en la pizarra a los alumnos de 1.º ESO.',
        hy: 'Ուսուցչուհին գրատախտակի մոտ բացատրում է դասը 1-ին ESO-ի աշակերտներին։',
        highlight: 'Profesora (emisor), Alumnos (receptor), Aire/Pizarra (canal)',
        highlightHy: 'Ուսուցչուհի (ուղարկող), Աշակերտներ (ստացող), Օդ/Գրատախտակ (կապուղի)',
        explanation: 'Situación o contexto: el aula del instituto.',
        explanationHy: 'Իրավիճակ կամ կոնտեքստ՝ դպրոցի դասարանը։'
      },
      {
        es: 'El semáforo se pone en rojo para los coches.',
        hy: 'Լուսացույցը մեքենաների համար վառվում է կարմիր։',
        highlight: 'Semáforo (emisor), Conductores (receptor), Luz roja (código)',
        highlightHy: 'Լուսացույց (ուղարկող), Վարորդներ (ստացող), Կարմիր լույս (կոդ)',
        explanation: 'Mensaje: prohibido pasar / detenerse.',
        explanationHy: 'Հաղորդագրություն՝ անցնելն արգելվում է / կանգ առնել։'
      },
      {
        es: 'Leo una novela en mi habitación por la noche.',
        hy: 'Ես գիշերը սենյակումս վեպ եմ կարդում։',
        highlight: 'Autor del libro (emisor), Lector (receptor), Papel/Libro (canal)',
        highlightHy: 'Հեղինակ (ուղարկող), Ընթերցող (ստացող), Թուղթ/Գիրք (կապուղի)',
        explanation: 'La comunicación puede ser diferida en el tiempo y el espacio.',
        explanationHy: 'Հաղորդակցությունը կարող է տեղի ունենալ ժամանակի և տարածության մեջ հեռակա։'
      },
      {
        es: 'Suena el timbre del instituto al terminar la clase.',
        hy: 'Դասի ավարտին հնչում է դպրոցի զանգը։',
        highlight: 'Timbre (código sonoro), Alumnos y profesores (receptores)',
        highlightHy: 'Զանգ (ձայնային կոդ), Աշակերտներ և ուսուցիչներ (ստացողներ)',
        explanation: 'Mensaje: la clase ha terminado.',
        explanationHy: 'Հաղորդագրություն՝ դասը ավարտվեց։'
      }
    ],
    frequentMistakesEs: 'Confundir el Canal (el medio físico, ej. aire, papel, móvil) con el Código (el idioma o sistema de signos, ej. castellano, morse, colores).',
    frequentMistakesHy: 'Շփոթել Կապուղին (Canal - ֆիզիկական միջոց՝ օդ, թուղթ, հեռախոս) Կոդի (Código - լեզու կամ նշանների համակարգ՝ իսպաներեն, նշաններ) հետ։',
    confusionsEs: 'El emisor no siempre es una persona hablando cara a cara; puede ser el autor de una señal o de un libro antiguo.',
    confusionsHy: 'Ուղարկողը միշտ չէ, որ դեմ առ դեմ խոսող մարդ է. կարող է լինել ցուցանակ պատրաստողը կամ հին գրքի հեղինակը։',
    memoryTrickEs: 'Regla: «¿POR DÓNDE viaja?» = CANAL. «¿EN QUÉ idioma o signos está?» = CÓDIGO.',
    memoryTrickHy: 'Կանոն՝ «Ի՞նչ միջոցով է շարժվում» = CANAL: «Ի՞նչ լեզվով կամ նշանով է» = CÓDIGO:',
    checkpointQuestions: [
      {
        id: 'cp_1_1',
        questionEs: 'En la frase «Laura lee una carta de su abuela», ¿cuál es el canal?',
        questionHy: '«Լաուրան կարդում է տատիկի նամակը» նախադասության մեջ ո՞րն է կապուղին (canal):',
        options: [
          { id: 'a', textEs: 'El papel de la carta', textHy: 'Նամակի թուղթը', isCorrect: true },
          { id: 'b', textEs: 'El idioma castellano', textHy: 'Իսպաներեն լեզուն', isCorrect: false },
          { id: 'c', textEs: 'La abuela', textHy: 'Տատիկը', isCorrect: false },
          { id: 'd', textEs: 'Laura', textHy: 'Լաուրան', isCorrect: false }
        ],
        explanationEs: 'El papel es el soporte físico por el que viaja el mensaje, por tanto es el CANAL.',
        explanationHy: 'Թուղթը ֆիզիկական կրիչն է, որով փոխանցվում է հաղորդագրությունը, ուստի դա CANAL-ն է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_1_1',
        frontEs: '¿Qué es el CÓDIGO en la comunicación?',
        frontHy: 'Ի՞նչ է ԿՈԴԸ (CÓDIGO) հաղորդակցության մեջ:',
        backEs: 'Es el conjunto de signos y reglas que comparten el emisor y el receptor (por ejemplo, el idioma español).',
        backHy: 'Դա նշանների և կանոնների համակարգն է, որը հասկանում են ուղարկողն ու ստացողը (օրինակ՝ իսպաներեն լեզուն):',
        clueEs: 'Piensa en el idioma o sistema de signos.',
        clueHy: 'Մտածիր լեզվի կամ նշանների համակարգի մասին:'
      }
    ]
  },
  {
    id: 'tema_2_funciones_lenguaje',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: La Comunicación y el Lenguaje',
    moduleNameHy: 'Մոդուլ 1. Հաղորդակցություն և լեզու',
    number: 2,
    titleEs: 'Las funciones del lenguaje',
    titleHy: 'Լեզվի գործառույթները (ֆունկցիաները)',
    definitionEs: 'Son los diferentes objetivos o intenciones con los que un emisor utiliza la lengua al comunicarse: informar, expresar emociones, influir en el receptor, comprobar el canal, hablar sobre la lengua o embellecer el mensaje.',
    definitionHy: 'Դրանք տարբեր նպատակներն են կամ մտադրությունները, որոնցով խոսողն օգտագործում է լեզուն՝ տեղեկացնել, զգացմունք արտահայտել, ազդել լսողի վրա, ստուգել կապը, խոսել լեզվի մասին կամ գեղեցկացնել խոսքը:',
    simpleExplanationEs: 'Cada vez que hablamos, buscamos algo distinto: contar un dato objetivo (referencial), decir cómo nos sentimos (expresiva), mandar una orden (apelativa), ver si nos oyen (fática), explicar una palabra (metalingüística) o hacer poesía (poética).',
    simpleExplanationHy: 'Ամեն անգամ խոսելիս մենք ունենք տարբեր նպատակ՝ փաստ ասել (referencial), զգացմունք արտահայտել (expresiva), հրամայել (apelativa), կապը ստուգել (fática), բառ բացատրել (metalingüística) կամ գեղարվեստական պատկեր ստեղծել (poética):',
    howToRecognizeEs: '1. Referencial: datos neutros. 2. Expresiva: ¡exclamaciones!, opiniones («¡Qué bien!»). 3. Apelativa: órdenes, ruegos, vocativos («Ven aquí»). 4. Fática: «¿Hola?», «¿Me oyes?». 5. Metalingüística: habla de gramática o palabras. 6. Poética: rima, figuras retóricas.',
    howToRecognizeHy: '1. Referencial՝ չեզոք փաստեր։ 2. Expresiva՝ բացականչություններ, զգացմունքներ։ 3. Apelativa՝ հրաման, խնդրանք։ 4. Fática՝ «ալո», «լսո՞ւմ ես»։ 5. Metalingüística՝ խոսք քերականության/բառերի մասին։ 6. Poética՝ հանգ, գեղարվեստական պատկերներ։',
    purposeEs: 'Comprender la verdadera intención de quien habla o escribe.',
    purposeHy: 'Հասկանալ խոսողի կամ գրողի իրական մտադրությունը։',
    examples: [
      {
        es: 'La Tierra gira alrededor del Sol.',
        hy: 'Երկիրը պտտվում է Արեգակի շուրջը։',
        highlight: 'Función referencial o representativa',
        highlightHy: 'Հաղորդակցական / ներկայացուցչական գործառույթ',
        explanation: 'Transmite información objetiva de la realidad sin emociones personales.',
        explanationHy: 'Փոխանցում է օբյեկտիվ իրական փաստ՝ առանց անձնական զգացմունքների:'
      },
      {
        es: '¡Qué alegría me da verte después de tanto tiempo!',
        hy: 'Որքա՜ն ուրախ եմ քեզ տեսնել այսքան ժամանակ անց։',
        highlight: 'Función expresiva o emotiva',
        highlightHy: 'Արտահայտչական / հուզական գործառույթ',
        explanation: 'Expresa los sentimientos y emociones internas del emisor.',
        explanationHy: 'Արտահայտում է խոսողի ներքին զգացմունքներն ու հույզերը:'
      },
      {
        es: 'Cierra la ventana, por favor, y abre el libro.',
        hy: 'Փակիր պատուհանը, խնդրում եմ, և բաց գիրքը։',
        highlight: 'Función apelativa o conativa',
        highlightHy: 'Կոչական / ներգործող գործառույթ',
        explanation: 'Pretende influir en el receptor para que haga una acción.',
        explanationHy: 'Նպատակն է ազդել լսողի վրա, որպեսզի նա գործողություն կատարի:'
      },
      {
        es: '¿Diga? ¿Me escuchas bien? Sí, sí...',
        hy: 'Ալո՞։ Ինձ լավ լսո՞ւմ ես։ Հա, հա...',
        highlight: 'Función fática o de contacto',
        highlightHy: 'Կապի հաստատման / կոնտակտային գործառույթ',
        explanation: 'Comprueba si el canal de comunicación sigue abierto y funcionando.',
        explanationHy: 'Ստուգում է, թե արդյոք կապուղին բաց է և աշխատում է:'
      },
      {
        es: 'La palabra «árbol» es un sustantivo común y llano.',
        hy: '«Árbol» բառը հասարակ գոյական է և շեշտը նախավերջին վանկի վրա է:',
        highlight: 'Función metalingüística',
        highlightHy: 'Մետալեզվական գործառույթ',
        explanation: 'Utiliza la lengua para explicar el propio código lingüístico.',
        explanationHy: 'Օգտագործում է լեզուն՝ հենց լեզվական կանոնները բացատրելու համար:'
      },
      {
        es: 'Tus ojos son dos luceros que alumbran mi camino.',
        hy: 'Քո աչքերը երկու աստղեր են, որ լուսավորում են իմ ճանապարհը։',
        highlight: 'Función poética o estética',
        highlightHy: 'Պոետիկ / գեղագիտական գործառույթ',
        explanation: 'Busca la belleza y llama la atención sobre la forma del mensaje.',
        explanationHy: 'Ձգտում է գեղեցկության և ուշադրություն է գրավում հաղորդագրության ձևի վրա:'
      }
    ],
    frequentMistakesEs: 'Confundir la función metalingüística con la referencial. Si la información trata de gramática o palabras («perro tiene 5 letras»), es metalingüística.',
    frequentMistakesHy: 'Շփոթել մետալեզվականը referencial-ի հետ։ Եթե խոսքը քերականության կամ բառերի մասին է, դա միշտ METALINGÜÍSTICA է։',
    confusionsEs: 'Una frase puede tener varias funciones, pero en el examen siempre te preguntan por la función PREDOMINANTE.',
    confusionsHy: 'Մեկ նախադասությունը կարող է ունենալ մի քանի գործառույթ, բայց քննության ժամանակ հարցնում են ԳԵՐԱԿՇՌՈՂ (predominante) գործառույթը։',
    memoryTrickEs: 'Referencial = Datos | Expresiva = ¡Yo siento! | Apelativa = ¡Tú hazlo! | Fática = ¿Me oyes? | Metalingüística = Gramática | Poética = Belleza.',
    memoryTrickHy: 'Referencial = Փաստեր | Expresiva = Ես զգում եմ | Apelativa = Դու արա | Fática = Լսո՞ւմ ես | Metalingüística = Քերականություն | Poética = Գեղեցկություն:',
    checkpointQuestions: [
      {
        id: 'cp_2_1',
        questionEs: '¿Qué función predomina en «¡Silencio inmediatamente!»?',
        questionHy: 'Ո՞ր գործառույթն է գերակշռում «¡Silencio inmediatamente!» արտահայտության մեջ:',
        options: [
          { id: 'a', textEs: 'Función apelativa', textHy: 'Կոչական / ներգործող (apelativa)', isCorrect: true },
          { id: 'b', textEs: 'Función poética', textHy: 'Պոետիկ', isCorrect: false },
          { id: 'c', textEs: 'Función fática', textHy: 'Կոնտակտային', isCorrect: false },
          { id: 'd', textEs: 'Función metalingüística', textHy: 'Մետալեզվական', isCorrect: false }
        ],
        explanationEs: 'Busca influir en el receptor para que se calle (orden).',
        explanationHy: 'Նպատակն է ստիպել լսողին լռել (հրաման), ուստի դա apelativa է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_2_1',
        frontEs: '¿Qué busca la función apelativa o conativa?',
        frontHy: 'Ի՞նչ նպատակ ունի կոչական (apelativa) գործառույթը:',
        backEs: 'Pretende influir, ordenar, aconsejar o pedir algo al receptor para que actúe.',
        backHy: 'Նպատակն է ազդել ստացողի վրա, հրամայել, խորհուրդ տալ կամ խնդրել, որ նա որևէ բան անի:',
        clueEs: 'Centrada en el receptor y las órdenes.',
        clueHy: 'Կենտրոնացած է ստացողի և հրամանների վրա:'
      }
    ]
  },
  {
    id: 'tema_3_modalidades_oracionales',
    moduleId: 'modulo_1',
    moduleNameEs: 'Módulo 1: La Comunicación y el Lenguaje',
    moduleNameHy: 'Մոդուլ 1. Հաղորդակցություն և լեզու',
    number: 3,
    titleEs: 'Las modalidades oracionales',
    titleHy: 'Նախադասության տեսակներն ըստ հաղորդակցական նպատակի',
    definitionEs: 'La modalidad oracional refleja la actitud o postura que adopta el hablante ante lo que dice: afirmar, negar, preguntar, exclamar, mandar, desear o dudar.',
    definitionHy: 'Նախադասության եղանակը արտացոլում է խոսողի վերաբերմունքը ասվածի նկատմամբ՝ հաստատում, ժխտում, հարցում, բացականչություն, հրաման, ցանկություն կամ կասկած:',
    simpleExplanationEs: 'Según lo que quieras expresar, usas un tipo de oración: asegurar que algo pasa (enunciativa), hacer una pregunta (interrogativa), mostrar sorpresa (exclamativa), dar una orden (exhortativa), pedir un deseo (desiderativa) o dudar (dubitativa).',
    simpleExplanationHy: 'Կախված նրանից, թե ինչ ես ուզում ասել, օգտագործում ես համապատասխան նախադասություն՝ փաստ ասել (enunciativa), հարցնել (interrogativa), զարմանալ (exclamativa), հրամայել (exhortativa), ցանկություն հայտնել (desiderativa), կասկածել (dubitativa):',
    howToRecognizeEs: '1. Enunciativa: informa («Hoy hay clase» / «No vino»). 2. Interrogativa: ¿...? 3. Exclamativa: ¡...! 4. Exhortativa: verbos en imperativo («Haz esto»). 5. Desiderativa: «Ojalá...», «Quisiera...». 6. Dubitativa: «Quizá...», «Tal vez...».',
    howToRecognizeHy: '1. Enunciativa՝ տեղեկացնում է հաստատական կամ ժխտական։ 2. Interrogativa՝ հարցական։ 3. Exclamativa՝ բացականչական։ 4. Exhortativa՝ հրամայական/խնդրանք։ 5. Desiderativa՝ «Ojalá» (երանի)։ 6. Dubitativa՝ «Quizá/Tal vez» (գուցե)։',
    purposeEs: 'Permite expresar matices precisos de certeza, deseo o mandato en el examen escolar.',
    purposeHy: 'Թույլ է տալիս հստակ արտահայտել վստահություն, ցանկություն կամ հրաման դպրոցական քննությունում։',
    examples: [
      {
        es: 'Mañana tenemos examen de Lengua.',
        hy: 'Վաղը մայրենի լեզվի քննություն ունենք։',
        highlight: 'Enunciativa afirmativa',
        highlightHy: 'Հաստատական պատմողական',
        explanation: 'Afirma un hecho como real y objetivo.',
        explanationHy: 'Փաստը ներկայացնում է որպես իրականություն:'
      },
      {
        es: 'No he terminado todavía la lectura obligatoria.',
        hy: 'Դեռ չեմ ավարտել պարտադիր ընթերցանությունը։',
        highlight: 'Enunciativa negativa',
        highlightHy: 'Ժխտական պատմողական',
        explanation: 'Niega la realización de una acción con «no» u otro adverbio negativo.',
        explanationHy: 'Ժխտում է գործողությունը «no» բառով:'
      },
      {
        es: '¿Sabes a qué hora empieza la clase?',
        hy: 'Գիտե՞ս՝ որ ժամին է սկսվում դասը։',
        highlight: 'Interrogativa directa',
        highlightHy: 'Ուղղակի հարցական',
        explanation: 'Pregunta con signos de interrogación ¿...? explícitos.',
        explanationHy: 'Հարցական նշաններով բացահայտ հարցում:'
      },
      {
        es: 'Dime si sabes a qué hora empieza.',
        hy: 'Ասա ինձ, թե գիտես արդյոք՝ երբ է սկսվում։',
        highlight: 'Interrogativa indirecta',
        highlightHy: 'Անուղղակի հարցական',
        explanation: 'Pregunta formulada sin signos de interrogación directos.',
        explanationHy: 'Հարց՝ առանց հարցական նշանների:'
      },
      {
        es: '¡Qué alegría tan inmensa tengo hoy!',
        hy: 'Ի՜նչ անսահման ուրախություն ունեմ այսօր։',
        highlight: 'Exclamativa',
        highlightHy: 'Բացականչական',
        explanation: 'Pronunciada con entonación enfática y signos ¡...!',
        explanationHy: 'Արտասանվում է զգացմունքային շեշտադրությամբ և բացականչական նշաններով:'
      },
      {
        es: 'Por favor, guarda tus cosas en la mochila.',
        hy: 'Խնդրում եմ, իրերդ հավաքիր պայուսակի մեջ։',
        highlight: 'Exhortativa o imperativa',
        highlightHy: 'Հրամայական / հորդորական',
        explanation: 'Expresa una orden, ruego o petición dirigida a otra persona.',
        explanationHy: 'Արտահայտում է հրաման կամ խնդրանք:'
      },
      {
        es: '¡Ojalá aprobemos todos el examen de mañana!',
        hy: 'Երանի՜ բոլորս հանձնենք վաղվա քննությունը։',
        highlight: 'Desiderativa',
        highlightHy: 'Ըղձական (ցանկություն)',
        explanation: 'Expresa un anhelo o deseo del emisor, a menudo con «ojalá».',
        explanationHy: 'Արտահայտում է խոսողի ցանկությունը (հաճախ «ojalá» բառով):'
      },
      {
        es: 'Quizá llueva esta tarde en la sierra.',
        hy: 'Գուցե այսօր կեսօրին անձրև գա լեռներում։',
        highlight: 'Dubitativa',
        highlightHy: 'Երկբայական (կասկած/հավանականություն)',
        explanation: 'Expresa duda o probabilidad con palabras como «quizá», «tal vez».',
        explanationHy: 'Արտահայտում է կասկած «quizá» կամ «tal vez» բառերով:'
      }
    ],
    frequentMistakesEs: 'Confundir las desiderativas (deseo: ojalá) con las dubitativas (duda: tal vez, quizá).',
    frequentMistakesHy: 'Շփոթել ըղձականը (deseo - ojalá) երկբայականի հետ (duda - tal vez, quizá):',
    confusionsEs: 'Las interrogativas indirectas llevan tilde diacrítica en pronombres («Dime qué quieres») pero no signos ¿...?',
    confusionsHy: 'Անուղղակի հարցականները պարունակում են շեշտ (qué, cómo), բայց չունեն ¿...? նշաններ:',
    memoryTrickEs: '«Ojalá» = Desiderativa (Deseo). «Quizá / Tal vez» = Dubitativa (Duda). «Verbo imperativo» = Exhortativa.',
    memoryTrickHy: '«Ojalá» = Desiderativa (ցանկություն)։ «Quizá» = Dubitativa (կասկած)։ Հրամայական բայ = Exhortativa:',
    checkpointQuestions: [
      {
        id: 'cp_3_1',
        questionEs: '¿Qué modalidad tiene la oración «Tal vez lleguemos a tiempo»?',
        questionHy: 'Ի՞նչ տեսակի նախադասություն է «Tal vez lleguemos a tiempo»:',
        options: [
          { id: 'a', textEs: 'Dubitativa', textHy: 'Երկբայական (Dubitativa)', isCorrect: true },
          { id: 'b', textEs: 'Desiderativa', textHy: 'Ըղձական', isCorrect: false },
          { id: 'c', textEs: 'Exhortativa', textHy: 'Հրամայական', isCorrect: false },
          { id: 'd', textEs: 'Enunciativa afirmativa', textHy: 'Հաստատական պատմողական', isCorrect: false }
        ],
        explanationEs: '«Tal vez» indica duda o probabilidad, por eso es DUBITATIVA.',
        explanationHy: '«Tal vez» ցույց է տալիս կասկած, ուստի DUBITATIVA է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_3_1',
        frontEs: '¿Qué palabra suele acompañar a las oraciones desiderativas?',
        frontHy: 'Ի՞նչ բառ է հաճախ ուղեկցում desiderativa (ըղձական) նախադասություններին:',
        backEs: 'La palabra «ojalá» (o «desearía», «quisiera»).',
        backHy: '«Ojalá» բառը (կամ «desearía», «quisiera» - կցանկանայի):',
        clueEs: 'Empieza por O y expresa un deseo intenso.',
        clueHy: 'Սկսվում է O տառով և արտահայտում է ջերմ ցանկություն:'
      }
    ]
  }
];
