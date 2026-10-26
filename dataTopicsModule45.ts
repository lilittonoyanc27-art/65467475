import { TopicConcept, ComparisonPair } from './types';

export const module4Topics: TopicConcept[] = [
  {
    id: 'tema_20_21_22_lenguaje_prosa_verso',
    moduleId: 'modulo_4',
    moduleNameEs: 'Módulo 4: El Lenguaje Literario, Prosa y Verso',
    moduleNameHy: 'Մոդուլ 4. Գեղարվեստական լեզու, արձակ և չափածո',
    number: 14,
    titleEs: 'Lenguaje literario, Prosa y Verso',
    titleHy: 'Գեղարվեստական լեզու, Արձակ (Prosa) և Չափածո (Verso)',
    definitionEs: 'El lenguaje literario busca una finalidad estética, utilizando recursos para emocionar y embellecer. La prosa se organiza en renglones completos y párrafos sin medida fija; el verso se divide en líneas con ritmo, medida y a veces rima.',
    definitionHy: 'Գեղարվեստական լեզուն ունի գեղագիտական նպատակ՝ զգացմունք արթնացնելու և խոսքը գեղեցկացնելու համար: Արձակը (prosa) գրվում է ամբողջ տողերով և պարբերություններով՝ առանց հաստատուն չափի, իսկ չափածոն (verso) բաժանվում է ռիթմով և հաճախ հանգով տողերի:',
    simpleExplanationEs: 'No es lo mismo decir «El sol se pone» (cotidiano) que «El sol sangra en el horizonte de oro» (literario). La prosa llena la página de margen a margen; el verso corta la línea para crear música.',
    simpleExplanationHy: 'Նույնը չէ ասել «Արևը մայր է մտնում» (առօրյա), քան «Արևը արյունոտվում է ոսկե հորիզոնում» (գեղարվեստական)։ Արձակը լցնում է էջը ծայրից ծայր, իսկ չափածոն ընդհատում է տողը՝ երաժշտականություն ստեղծելու համար։',
    howToRecognizeEs: 'Prosa: Párrafos que van de extremo a extremo del folio. Verso: Líneas cortas (versos) agrupadas en estrofas, con ritmo silábico. Rima consonante (coinciden vocales y consonantes: casa/pasa) o asonante (solo vocales: casa/cama). Verso libre: sin rima ni medida fija.',
    howToRecognizeHy: 'Prosa՝ ամբողջական տողերով պարբերություններ։ Verso՝ կարճ տողեր (versos), խմբավորված տներում (estrofas)։ Կոնսոնանս հանգ (համընկնում են ձայնավորներն ու բաղաձայնները՝ casa/masa), Ասոնանս (միայն ձայնավորները՝ casa/plata)։ Ազատ տող (verso libre)՝ առանց հանգի։',
    purposeEs: 'Reconocer la forma de escritura en los textos del examen.',
    purposeHy: 'Տարբերել շարադրանքի ձևը քննական տեքստերում։',
    examples: [
      {
        es: '«El cielo de la tarde se fue apagando lentamente, mientras las primeras estrellas aparecían sobre el campanario del pueblo viejo.»',
        hy: '«Երեկոյան երկինքը դանդաղ մարեց, մինչդեռ առաջին աստղերը հայտնվեցին հին գյուղի զանգակատան վերևում։»',
        highlight: 'Texto en Prosa (oraciones completas, párrafos)'
      },
      {
        es: '«Caminante, son tus huellas\nel camino y nada más;\ncaminante, no hay camino,\nse hace camino al andar.»',
        hy: '«Ճամփորդ, քո հետքերն են\nճանապարհը և ուրիշ ոչինչ,\nճամփորդ, ճանապարհ չկա,\nճանապարհը հարթվում է քայլելով։»',
        highlight: 'Texto en Verso (cuatro versos octosílabos, ritmo marcado)'
      }
    ],
    frequentMistakesEs: 'Creer que todo verso debe tener rima obligatoria. El «verso libre» o el «verso blanco» no tienen rima pero siguen siendo versos.',
    frequentMistakesHy: 'Կարծել, թե յուրաքանչյուր բանաստեղծություն պետք է ունենա հանգ։ Ազատ բանաստեղծությունը (verso libre) չունի հանգ, բայց չափածո է։',
    confusionsEs: 'Diferencia entre rima asonante (solo vocales: rAmAs / cAsAs) y consonante (todas las letras desde la última vocal acentuada: vIEnto / sIEnto).',
    confusionsHy: 'Տարբերությունը ասոնանսի (միայն ձայնավորներ՝ ramA/casA) և կոնսոնանսի միջև (բոլոր տառերը շեշտված ձայնավորից հետո՝ viENTO/siENTO):',
    memoryTrickEs: '«Prosa = Página recta y corrida». «Verso = Renglón cortado con música».',
    memoryTrickHy: '«Արձակ = Շարունակական տողեր»։ «Չափածո = Երաժշտական կարճ տողեր»։',
    checkpointQuestions: [
      {
        id: 'cp_14_1',
        questionEs: 'Si coinciden todas las vocales y consonantes a partir de la última vocal acentuada, la rima es...',
        questionHy: 'Եթե վերջին շեշտված ձայնավորից հետո համընկնում են բոլոր ձայնավորներն ու բաղաձայնները, հանգը...',
        options: [
          { id: 'a', textEs: 'Consonante', textHy: 'Կոնսոնանս (համահունչ - Consonante)', isCorrect: true },
          { id: 'b', textEs: 'Asonante', textHy: 'Ասոնանս', isCorrect: false },
          { id: 'c', textEs: 'Verso libre', textHy: 'Ազատ', isCorrect: false },
          { id: 'd', textEs: 'Prosaica', textHy: 'Արձակ', isCorrect: false }
        ],
        explanationEs: 'La rima consonante es la repetición total de sonidos (canción / emoción).',
        explanationHy: 'Կոնսոնանս հանգը բոլոր հնչյունների ամբողջական համընկնումն է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_14_1',
        frontEs: '¿En qué se diferencian la rima consonante y la asonante?',
        frontHy: 'Ինչո՞վ են տարբերվում կոնսոնանս և ասոնանս հանգերը:',
        backEs: 'En la consonante se repiten vocales y consonantes (viento/siento); en la asonante solo se repiten las vocales (cielo/remo: e-o).',
        backHy: 'Կոնսոնանսում կրկնվում են և՛ ձայնավորները, և՛ բաղաձայնները (viento/siento), իսկ ասոնանսում՝ միայն ձայնավորները (cielo/remo - e/o):'
      }
    ]
  }
];

export const module5Topics: TopicConcept[] = [
  // Nivel Fónico
  {
    id: 'tema_23_aliteracion',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 15,
    titleEs: 'La aliteración (Nivel fónico)',
    titleHy: 'Ալիտերացիա (La aliteración - Հնչյունային մակարդակ)',
    definitionEs: 'Figura retórica del nivel fónico que consiste en la repetición perceptible de uno o varios sonidos semejantes (normalmente consonantes) a lo largo de un verso o enunciado para evocar sensaciones.',
    definitionHy: 'Հնչյունային մակարդակի պատկերավորման միջոց, որը կայանում է նման հնչյունների (հիմնականում բաղաձայնների) զգալի կրկնության մեջ՝ որոշակի տպավորություն ստեղծելու համար:',
    simpleExplanationEs: 'Es cuando un autor repite la misma letra o sonido muchas veces a propósito. Por ejemplo, repetir la «s» para que suene como el viento o una serpiente.',
    simpleExplanationHy: 'Երբ հեղինակը դիտավորյալ բազմիցս կրկնում է նույն տառը կամ հնչյունը։ Օրինակ՝ «s» հնչյունի կրկնությունը քամու կամ տերևների սոսափյունը նմանակելու համար։',
    howToRecognizeEs: 'Busca sonidos idénticos repetidos en palabras cercanas (ej. «s... s... s...», «r... r... r...»).',
    howToRecognizeHy: 'Փնտրիր նույն հնչյունների կրկնությունը մոտ բառերում (օր. s-s-s, r-r-r):',
    purposeEs: 'Crear ritmo, musicalidad y sugerir acústicamente lo que se describe.',
    purposeHy: 'Ռիթմ, երաժշտականություն հաղորդել և ձայնային նմանակում ստեղծել։',
    examples: [
      { es: 'En el Silencio Solo Se eScuchaba un SuSurro de abejaS que Sonaba.', hy: 'Լռության մեջ միայն լսվում էր մեղուների մի շշուկ, որ հնչում էր։', highlight: 'Repetición del sonido /s/ (Garcilaso de la Vega)' },
      { es: 'El Ruido con que Rueda la Ronca tempestad.', hy: 'Աղմուկը, որով գլորվում է խռպոտ փոթորիկը։', highlight: 'Repetición del sonido /r/ (Zorrilla, evoca el trueno)' },
      { es: 'Bajo el ala aleve del leve abanico.', hy: 'Թեթև հովհարի նենգ թևի տակ։', highlight: 'Repetición de /l/ y /b/ (Rubén Darío)' },
      { es: 'Tres tristes tigres tragan trigo en un trigal.', hy: 'Երեք տխուր վագրեր ցորեն են ուտում ցորենի դաշտում։', highlight: 'Repetición de /tr/' },
      { es: 'Claras campanas cruzan la colina.', hy: 'Պարզ զանգերը հատում են բլուրը։', highlight: 'Repetición de /k/ y /l/' },
      { es: 'Mi mamá me mima mucho por las mañanas.', hy: 'Մայրիկս առավոտյան ինձ շատ է գուրգուրում։', highlight: 'Repetición de /m/' }
    ],
    frequentMistakesEs: 'Confundir la aliteración con la onomatopeya. La aliteración repite sonidos dentro de palabras normales; la onomatopeya imita directamente un ruido («tic-tac», «pum»).',
    frequentMistakesHy: 'Շփոթել ալիտերացիան օնոմատոպեայի հետ։ Ալիտերացիան կրկնում է հնչյունները սովորական բառերի մեջ, իսկ օնոմատոպեան բուն ձայնի ընդօրինակումն է («tic-tac», «miau»):',
    confusionsEs: 'No cualquier repetición casual es aliteración; tiene que ser intencionada y expresiva.',
    confusionsHy: 'Պատահական կրկնությունը չէ, այլ միտումնավոր և գեղարվեստական նպատակով արվածը:',
    memoryTrickEs: '«Aliteración = Acumulación de sonidos semejantes».',
    memoryTrickHy: '«Ալիտերացիա = Նման հնչյունների կուտակում»:',
    checkpointQuestions: [
      {
        id: 'cp_15_1',
        questionEs: '¿Qué figura retórica encontramos en «El suave susurro silba sobre el sendero»?',
        questionHy: 'Ի՞նչ պատկերավորման միջոց է «El suave susurro silba sobre el sendero» արտահայտության մեջ:',
        options: [
          { id: 'a', textEs: 'Aliteración (repetición del sonido «s»)', textHy: 'Ալիտերացիա («s» հնչյունի կրկնություն)', isCorrect: true },
          { id: 'b', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա', isCorrect: false },
          { id: 'c', textEs: 'Metáfora', textHy: 'Փոխաբերություն', isCorrect: false },
          { id: 'd', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false }
        ],
        explanationEs: 'La repetición evidente de la consonante «s» en varias palabras es una ALITERACIÓN.',
        explanationHy: '«s» բաղաձայնի ակնհայտ կրկնությունը բառերում ԱԼԻՏԵՐԱՑԻԱ է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_15_1',
        frontEs: '¿A qué nivel de figuras literarias pertenece la aliteración?',
        frontHy: 'Պատկերավորման ո՞ր մակարդակին է պատկանում ալիտերացիան:',
        backEs: 'Al nivel fónico (sonidos de la lengua).',
        backHy: 'Հնչյունային մակարդակին (nivel fónico):'
      }
    ]
  },
  {
    id: 'tema_24_onomatopeya',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 16,
    titleEs: 'La onomatopeya (Nivel fónico)',
    titleHy: 'Բնաձայնություն (La onomatopeya - Հնչյունային մակարդակ)',
    definitionEs: 'Figura del nivel fónico que consiste en la utilización de palabras o combinaciones de letras cuya pronunciación imita el sonido real de una cosa, animal o acción.',
    definitionHy: 'Հնչյունային մակարդակի միջոց, որը բաղկացած է բառերից կամ տառակապակցություններից, որոնց արտասանությունը ընդօրինակում է իրական իրի, կենդանու կամ գործողության ձայնը:',
    simpleExplanationEs: 'Son las palabras que suenan como el ruido real: ¡pum! (explosión), tic-tac (reloj), miau (gato), quiquiriquí (gallo), chas (golpe).',
    simpleExplanationHy: 'Դրանք բառեր են, որոնք հնչում են ինչպես իրական աղմուկը՝ ¡pum! (պայթյուն), tic-tac (ժամացույց), miau (կատու), ¡chof! (ջրի մեջ ընկնելը)։',
    howToRecognizeEs: 'Busca palabras que imiten ruidos naturales, golpes, timbres o voces de animales.',
    howToRecognizeHy: 'Փնտրիր բառեր, որոնք նմանակում են բնական ձայներ, հարվածներ կամ կենդանիների ձայներ։',
    purposeEs: 'Hacer que el lector escuche y sienta la escena como si estuviera allí.',
    purposeHy: 'Ստիպել ընթերցողին լսել և զգալ տեսարանը, կարծես ինքն այնտեղ է։',
    examples: [
      { es: 'El tic-tac del reloj rompía el silencio nocturno.', hy: 'Ժամացույցի տիկ-տակը խախտում էր գիշերային լռությունը։', highlight: 'tic-tac (imita el segundero del reloj)' },
      { es: '¡Cataplum! Se cayó la estantería llena de libros.', hy: 'Դը՜րրխկ։ Գրքերով լի դարակաշարը վայր ընկավ։', highlight: '¡Cataplum! (sonido del choque)' },
      { es: 'El suave murmullo del arroyo: glu-glu-glu.', hy: 'Առվակի մեղմ կարկաչը՝ գլու-գլու-գլու։', highlight: 'glu-glu-glu' },
      { es: 'Un ladrido lejano: ¡guau, guau!', hy: 'Հեռավոր հաչոց՝ հա՛ֆ, հա՛ֆ։', highlight: 'guau, guau' },
      { es: 'El cristal se rompió con un ¡crac! seco.', hy: 'Ապակին կոտրվեց չոր չը՛րթոցով։', highlight: '¡crac!' },
      { es: 'Llamó a la puerta: ¡toc, toc!', hy: 'Թակեց դուռը՝ տո՛ւկ, տո՛ւկ։', highlight: '¡toc, toc!' }
    ],
    frequentMistakesEs: 'Escribir la onomatopeya sin entender que en español se escriben con ortografía adaptada (ej. «guau», no «woof»).',
    frequentMistakesHy: 'Օնոմատոպեաները իսպաներենում ունեն իրենց գրելաձևը («guau», ոչ թե անգլերեն «woof»)։',
    confusionsEs: 'Aliteración (repetición de sonidos en palabras normales) vs Onomatopeya (palabra que es en sí misma el sonido imitado).',
    confusionsHy: 'Ալիտերացիան բառերում հնչյունների կրկնությունն է, իսկ օնոմատոպեան հենց ինքը նմանակվող ձայնն է:',
    memoryTrickEs: '«Onomatopeya = Oigo el ruido real: ¡pum, chas, miau!».',
    memoryTrickHy: '«Օնոմատոպեա = Լսում եմ իրական ձայնը՝ pum, miau, tic-tac»:',
    checkpointQuestions: [
      {
        id: 'cp_16_1',
        questionEs: 'En «El grillo cantaba cri-cri bajo la luna», ¿qué figura es «cri-cri»?',
        questionHy: '«El grillo cantaba cri-cri bajo la luna» նախադասության մեջ ի՞նչ է «cri-cri»-ն:',
        options: [
          { id: 'a', textEs: 'Onomatopeya', textHy: 'Բնաձայնություն (Onomatopeya)', isCorrect: true },
          { id: 'b', textEs: 'Aliteración', textHy: 'Ալիտերացիա', isCorrect: false },
          { id: 'c', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
          { id: 'd', textEs: 'Polisíndeton', textHy: 'Բազմաշաղկապություն', isCorrect: false }
        ],
        explanationEs: '«Cri-cri» imita el sonido real que emite el grillo.',
        explanationHy: '«Cri-cri»-ն ընդօրինակում է ծղրիդի իրական ձայնը:'
      }
    ],
    flashcards: [
      {
        id: 'fc_16_1',
        frontEs: '¿Qué diferencia hay entre la aliteración y la onomatopeya?',
        frontHy: 'Ի՞նչ տարբերություն կա ալիտերացիայի և օնոմատոպեայի միջև:',
        backEs: 'La aliteración repite sonidos dentro de palabras normales (el susurro sonaba); la onomatopeya es una palabra que reproduce directamente el sonido (tic-tac, guau).',
        backHy: 'Ալիտերացիան հնչյունների կրկնությունն է սովորական բառերում, իսկ օնոմատոպեան ուղղակիորեն ձայնը նմանակող բառն է (tic-tac, pum):'
      }
    ]
  },
  {
    id: 'tema_25_paronomasia',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 17,
    titleEs: 'La paronomasia (Nivel fónico)',
    titleHy: 'Հարանունություն / Պարոնոմազիա (La paronomasia - Հնչյունային մակարդակ)',
    definitionEs: 'Figura del nivel fónico que consiste en colocar próximas dos o más palabras que tienen sonidos muy parecidos pero significados completamente diferentes.',
    definitionHy: 'Հնչյունային մակարդակի միջոց, որը կայանում է մոտ դրված այնպիսի բառերի օգտագործման մեջ, որոնք ունեն շատ նման հնչողություն, բայց բոլորովին տարբեր իմաստներ:',
    simpleExplanationEs: 'Es un juego de palabras con términos que suenan casi igual cambiando solo una o dos letras: «copa» y «capa», «hombre» y «hambre».',
    simpleExplanationHy: 'Բառախաղ է այնպիսի բառերով, որոնք հնչում են գրեթե նույն կերպ՝ փոխելով ընդամենը մեկ-երկու տառ՝ «copa» (բաժակ) և «capa» (թիկնոց), «hombre» (մարդ) և «hambre» (քաղց)։',
    howToRecognizeEs: 'Busca parejas de palabras casi gemelas en el sonido pero con significados distintos en la misma frase.',
    howToRecognizeHy: 'Փնտրիր հնչողությամբ գրեթե նման զույգ բառեր՝ տարբեր իմաստներով նույն նախադասության մեջ։',
    purposeEs: 'Llamar la atención del lector mediante el contraste sonoro y el ingenio verbal.',
    purposeHy: 'Ուշադրություն գրավել հնչյունական հակադրությամբ և խոսքի ճկունությամբ։',
    examples: [
      { es: 'Entre la copa y la capa, el caballero perdió su espada.', hy: 'Բաժակի և թիկնոցի արանքում ասպետը կորցրեց իր թուրը։', highlight: 'copa / capa (paronomasia)' },
      { es: 'Un hombre con mucha hambre caminaba por la estepa.', hy: 'Սաստիկ քաղցած մի մարդ քայլում էր տափաստանով։', highlight: 'hombre / hambre' },
      { es: 'Quien parte y reparte se queda con la mejor parte.', hy: 'Ով բաժանում և վերաբաժանում է, իրեն է վերցնում լավագույն բաժինը։', highlight: 'parte / reparte' },
      { es: 'Mora que en el monte mora.', hy: 'Մավրուհին, որ լեռներում է բնակվում (mora - գոյական / mora - բայ)։', highlight: 'mora / mora' },
      { es: 'Con dados ganan condados.', hy: 'Զառերով շահում են կոմսություններ։', highlight: 'con dados / condados' }
    ],
    frequentMistakesEs: 'Confundir paronomasia con repetición exacta de la misma palabra. En la paronomasia las palabras son DISTINTAS aunque suenen parecido.',
    frequentMistakesHy: 'Շփոթել նույն բառի կրկնության հետ։ Պարոնոմազիայում բառերը ՏԱՐԲԵՐ են (copa/capa), թեև շատ նման են հնչում։',
    confusionsEs: 'En trabalenguas infantiles abunda la paronomasia.',
    confusionsHy: 'Շուտասելուկներում հաճախ հանդիպում է պարոնոմազիա:',
    memoryTrickEs: '«Paronomasia = Parecidas en el sonido, distintas en el sentido».',
    memoryTrickHy: '«Պարոնոմազիա = Նման հնչյուն, տարբեր իմաստ»:',
    checkpointQuestions: [
      {
        id: 'cp_17_1',
        questionEs: 'En «El erizo se eriza de risa», ¿qué figura destaca?',
        questionHy: '«El erizo se eriza de risa» արտահայտության մեջ ո՞ր միջոցն է աչքի ընկնում:',
        options: [
          { id: 'a', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա (Paronomasia)', isCorrect: true },
          { id: 'b', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
          { id: 'c', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false },
          { id: 'd', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ', isCorrect: false }
        ],
        explanationEs: '«Erizo», «eriza» y «risa» son palabras de sonido casi idéntico pero significado distinto: es paronomasia.',
        explanationHy: '«Erizo», «eriza» և «risa» նմանահունչ բառեր են տարբեր իմաստներով, ուստի պարոնոմազիա է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_17_1',
        frontEs: '¿Qué es la paronomasia?',
        frontHy: 'Ի՞նչ է պարոնոմազիան (հարանունությունը):',
        backEs: 'Es la proximidad de palabras con sonidos muy semejantes pero significados totalmente diferentes (ej. capa / copa, hombre / hambre).',
        backHy: 'Շատ նման հնչողությամբ, բայց լրիվ տարբեր իմաստներով բառերի մերձավորությունն է (օր. copa / capa):'
      }
    ]
  },
  {
    id: 'tema_26_epanadiplosis',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 18,
    titleEs: 'La epanadiplosis (Nivel fónico / morfosintáctico)',
    titleHy: 'Էպանադիպլոսիս (La epanadiplosis)',
    definitionEs: 'Figura retórica que consiste en empezar y terminar un mismo verso, enunciado o frase con la misma palabra exacta.',
    definitionHy: 'Պատկերավորման միջոց, որի դեպքում նույն բանաստեղծական տողը կամ նախադասությունը ՍԿՍՎՈՒՄ և ԱՎԱՐՏՎՈՒՄ է ճիշտ նույն բառով:',
    simpleExplanationEs: 'Es como un bumerán: lanzas una palabra al principio y esa misma palabra vuelve justo al final de la misma frase.',
    simpleExplanationHy: 'Ինչպես բումերանգ՝ տողի սկզբում դնում ես բառը, և այդ նույն բառը կրկնվում է հենց տողի վերջում։',
    howToRecognizeEs: 'Comprueba la PRIMERA palabra y la ÚLTIMA palabra de un solo verso: si son iguales, ¡es epanadiplosis!',
    howToRecognizeHy: 'Ստուգիր տողի ԱՌԱՋԻՆ և ՎԵՐՋԻՆ բառը. եթե նույնն են, դա epanadiplosis է։',
    purposeEs: 'Enmarcar la idea con fuerza expresiva y crear una sensación de ciclo cerrado.',
    purposeHy: 'Միտքը շրջանակել արտահայտիչ ուժով և ստեղծել փակ շրջանի տպավորություն։',
    examples: [
      { es: 'Verde que te quiero verde.', hy: 'Կանաչ, որ քեզ սիրում եմ կանաչ։', highlight: 'Verde ... verde (Lorca)' },
      { es: 'Silencio en la noche, noche de silencio.', hy: 'Լռություն գիշերում, գիշեր լռության։', highlight: 'Silencio ... silencio' },
      { es: 'Palabras, no quiero más que tus palabras.', hy: 'Բառեր, չեմ ուզում ավելին, քան քո բառերը։', highlight: 'Palabras ... palabras' },
      { es: 'Perderte es lo único que temo perderte.', hy: 'Քեզ կորցնելն է միակ բանը, որ վախենում եմ քեզ կորցնել։', highlight: 'Perderte ... perderte' },
      { es: 'Huracán, llévate mi pena, huracán.', hy: 'Փոթորիկ, տար իմ վիշտը, փոթորիկ։', highlight: 'Huracán ... huracán' }
    ],
    frequentMistakesEs: 'Confundir con la ANÁFORA. La anáfora repite palabras al PRINCIPIO de varios versos; la epanadiplosis repite al PRINCIPIO y al FINAL del MISMO verso.',
    frequentMistakesHy: 'Շփոթել ԱՆԱՖՈՐԱՅԻ (anáfora) հետ։ Անաֆորան կրկնվում է մի քանի տողերի ՍԿԶԲՈՒՄ, իսկ էպանադիպլոսիսը՝ ՆՈՒՅՆ տողի սկզբում և վերջում։',
    confusionsEs: 'Si la palabra se repite al final de varios versos seguidos, es epífora, no epanadiplosis.',
    confusionsHy: 'Եթե բառը կրկնվում է մի քանի տողերի վերջում, դա epífora է, ոչ թե epanadiplosis:',
    memoryTrickEs: '«Epanadiplosis: Empieza y Termina con la misma palabra». (Bumerán).',
    memoryTrickHy: '«Epanadiplosis = Սկսվում է և Ավարտվում է նույն բառով» (բումերանգ):',
    checkpointQuestions: [
      {
        id: 'cp_18_1',
        questionEs: 'En el verso «Verde que te quiero verde», ¿qué figura literaria se utiliza?',
        questionHy: '«Verde que te quiero verde» տողում ի՞նչ գեղարվեստական միջոց է կիրառված:',
        options: [
          { id: 'a', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս (Epanadiplosis)', isCorrect: true },
          { id: 'b', textEs: 'Anáfora', textHy: 'Անաֆորա', isCorrect: false },
          { id: 'c', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
          { id: 'd', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա', isCorrect: false }
        ],
        explanationEs: 'Empieza con «Verde» y termina con «verde» en el mismo verso: es una epanadiplosis perfecta.',
        explanationHy: 'Սկսվում է «Verde» բառով և ավարտվում «verde» բառով նույն տողում, ուստի epanadiplosis է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_18_1',
        frontEs: '¿En qué se diferencian la anáfora y la epanadiplosis?',
        frontHy: 'Ինչո՞վ են տարբերվում անաֆորան (anáfora) և էպանադիպլոսիսը (epanadiplosis):',
        backEs: 'La anáfora repite al PRINCIPIO de versos distintos; la epanadiplosis repite al PRINCIPIO y al FINAL del MISMO verso.',
        backHy: 'Անաֆորան կրկնվում է տարբեր տողերի ՍԿԶԲՈՒՄ, իսկ էպանադիպլոսիսը՝ ՆՈՒՅՆ տողի սկզբում և վերջում:'
      }
    ]
  },

  // Nivel Morfosintáctico
  {
    id: 'tema_27_hiperbaton',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 19,
    titleEs: 'El hipérbaton (Nivel morfosintáctico)',
    titleHy: 'Հիպերբատոն / Շրջադասություն (El hipérbaton - Շարահյուսական մակարդակ)',
    definitionEs: 'Figura retórica morfosintáctica que consiste en la alteración intencionada del orden gramatical lógico y habitual de las palabras en una oración.',
    definitionHy: 'Շարահյուսական մակարդակի պատկերավորման միջոց, որը կայանում է նախադասության մեջ բառերի տրամաբանական և սովորական քերականական շարադասության միտումնավոր խախտման մեջ:',
    simpleExplanationEs: 'En español solemos decir: Sujeto + Verbo + Complementos («El árbol se cubrió de hojas»). En el hipérbaton se cambia el orden como Yoda: «De verdes hojas se cubrió el árbol».',
    simpleExplanationHy: 'Իսպաներենում սովորաբար ասում ենք՝ Ենթակա + Բայ + Լրացումներ («El árbol se cubrió de hojas»)։ Հիպերբատոնում բառերի տեղերը փոխվում են՝ «De verdes hojas se cubrió el árbol»։',
    howToRecognizeEs: 'Intenta reordenar la frase al orden normal (Sujeto + Verbo + Objeto). Si suena cambiada y poética, hay hipérbaton.',
    howToRecognizeHy: 'Փորձիր վերադասավորել նախադասությունը սովորական կարգով։ Եթե տեղերը փոխված են բանաստեղծական նպատակով, դա hipérbaton է։',
    purposeEs: 'Ajustar la rima, destacar una palabra al ponerla al inicio y dar elegancia clásica.',
    purposeHy: 'Հարմարեցնել հանգը, ընդգծել կարևոր բառը՝ այն դնելով առաջին տեղում, և հաղորդել վեհություն։',
    examples: [
      { es: 'De verdes hojas se cubrió el árbol.', hy: 'Կանաչ տերևներով ծածկվեց ծառը։', highlight: 'Orden habitual: El árbol se cubrió de verdes hojas.' },
      { es: 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar.', hy: 'Կվերադառնան մուգ ծիծեռնակները քո պատշգամբում իրենց բները կախելու։', highlight: 'Bécquer: Las oscuras golondrinas volverán a colgar sus nidos en tu balcón.' },
      { es: 'Del salón en el ángulo oscuro veíase el arpa olvidada.', hy: 'Սրահի մութ անկյունում երևում էր մոռացված տավիղը։', highlight: 'Bécquer: El arpa olvidada veíase en el ángulo oscuro del salón.' },
      { es: 'Cansado de tanto correr el niño llegó a su casa.', hy: 'Այդքան վազելուց հոգնած՝ երեխան տուն հասավ։', highlight: 'El niño llegó a su casa cansado de tanto correr.' },
      { es: 'A Dios gracias damos por el pan de cada día.', hy: 'Աստծուն շնորհակալություն ենք հայտնում ամենօրյա հացի համար։', highlight: 'Damos gracias a Dios...' }
    ],
    frequentMistakesEs: 'Creer que está mal escrito. En poesía el hipérbaton es un recurso estético admirable.',
    frequentMistakesHy: 'Կարծել, թե սխալ է գրված։ Պոեզիայում հիպերբատոնը հիանալի գեղարվեստական հնարք է։',
    confusionsEs: 'En los exámenes suelen pedir: «Reordena la frase con hipérbaton a su orden habitual».',
    confusionsHy: 'Քննության ժամանակ հաճախ հանձնարարում են՝ «Վերականգնիր հիպերբատոնով նախադասության սովորական շարադասությունը»:',
    memoryTrickEs: '«Hipérbaton = Habla como el maestro Yoda: desordena el orden natural».',
    memoryTrickHy: '«Հիպերբատոն = Յոդայի նման խոսել՝ բնական կարգը փոխելով»:',
    checkpointQuestions: [
      {
        id: 'cp_19_1',
        questionEs: '¿Cuál es el orden habitual de «Tristes cantaban los pájaros en el bosque»?',
        questionHy: 'Ո՞րն է «Tristes cantaban los pájaros en el bosque» նախադասության սովորական շարադասությունը:',
        options: [
          { id: 'a', textEs: 'Los pájaros cantaban tristes en el bosque', textHy: 'Los pájaros cantaban tristes en el bosque', isCorrect: true },
          { id: 'b', textEs: 'En el bosque tristes cantaban pájaros', textHy: 'En el bosque tristes...', isCorrect: false },
          { id: 'c', textEs: 'Cantaban en el bosque tristes pájaros', textHy: 'Cantaban en...', isCorrect: false },
          { id: 'd', textEs: 'Los tristes en el bosque cantaban pájaros', textHy: 'Los tristes...', isCorrect: false }
        ],
        explanationEs: 'El orden habitual de la gramática española es Sujeto (Los pájaros) + Verbo (cantaban) + Complementos.',
        explanationHy: 'Իսպաներենի սովորական շարադասությունն է՝ Ենթակա + Բայ + Լրացումներ:'
      }
    ],
    flashcards: [
      {
        id: 'fc_19_1',
        frontEs: '¿En qué consiste el hipérbaton?',
        frontHy: 'Ինչի՞ց է բաղկացած հիպերբատոնը:',
        backEs: 'En alterar el orden lógico habitual de las palabras en una oración (Sujeto + Verbo + Complementos).',
        backHy: 'Նախադասության մեջ բառերի սովորական քերականական շարադասության փոփոխության մեջ:'
      }
    ]
  },
  {
    id: 'tema_28_anafora',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 20,
    titleEs: 'La anáfora (Nivel morfosintáctico)',
    titleHy: 'Անաֆորա / Նախադաս կրկնություն (La anáfora - Շարահյուսական մակարդակ)',
    definitionEs: 'Figura morfosintáctica que consiste en la repetición de una o varias palabras al comienzo de dos o más versos, estrofas o frases consecutivas.',
    definitionHy: 'Շարահյուսական մակարդակի միջոց, որը կայանում է մեկ կամ մի քանի բառերի կրկնության մեջ երկու կամ ավելի հաջորդական տողերի, տների կամ նախադասությունների ՍԿԶԲՈՒՄ:',
    simpleExplanationEs: 'Cada línea empieza con la misma palabra o grupo de palabras: «Aquí todo canta, / aquí todo sueña, / aquí todo vive».',
    simpleExplanationHy: 'Յուրաքանչյուր տող սկսվում է ճիշտ նույն բառով կամ բառակապակցությամբ՝ «Այստեղ ամեն ինչ երգում է, / այստեղ ամեն ինչ երազում է, / այստեղ ամեն ինչ ապրում է»։',
    howToRecognizeEs: 'Mira el inicio vertical de los versos. Si ves la misma palabra repetida en columna al principio, es anáfora.',
    howToRecognizeHy: 'Նայիր տողերի սկզբին։ Եթե տեսնում ես նույն բառը կրկնված սյունակաձև սկզբում, դա anáfora է։',
    purposeEs: 'Dar insistencia, emoción, ritmo constante y enfatizar una idea central.',
    purposeHy: 'Պնդողականություն, հուզականություն, հաստատուն ռիթմ հաղորդել և շեշտել գլխավոր միտքը։',
    examples: [
      {
        es: '«Aquí todo canta,\naquí todo sueña,\naquí todo vive con alegría.»',
        hy: '«Այստեղ ամեն ինչ երգում է,\nայստեղ ամեն ինչ երազում է,\nայստեղ ամեն ինչ ուրախությամբ է ապրում։»',
        highlight: 'Repetición de «Aquí todo» al inicio de cada verso'
      },
      {
        es: '«Temprano levantó la muerte el vuelo,\ntemprano madrugó la madrugada,\ntemprano estás rodando por el suelo.»',
        hy: '«Վաղաժամ թև առավ մահը,\nվաղաժամ լուսացավ այգաբացը,\nվաղաժամ ես գլորվում գետնին։»',
        highlight: 'Miguel Hernández: anáfora con «Temprano»'
      },
      {
        es: '«Por ti la verde hierba, el fresco viento,\npor ti el dulce murmurar del agua...»',
        hy: '«Քո պատճառով կանաչ խոտը, զով քամին,\nքո պատճառով ջրի անուշ կարկաչը...»',
        highlight: 'Garcilaso: anáfora con «Por ti»'
      },
      {
        es: '«No perdono a la muerte enamorada,\nno perdono a la vida desatenta,\nno perdono a la tierra ni a la nada.»',
        hy: '«Չեմ ներում սիրահարված մահվանը,\nչեմ ներում անուշադիր կյանքին,\nչեմ ներում ո՛չ հողին, ո՛չ ոչնչությանը։»',
        highlight: 'Anáfora con «No perdono a»'
      }
    ],
    frequentMistakesEs: 'Creer que anáfora es repetir en cualquier lugar. ¡Tiene que ser al COMIENZO de enunciados consecutivos!',
    frequentMistakesHy: 'Կարծել, թե կամայական տեղում կրկնվելն է։ Պարտադիր պետք է լինի հաջորդական տողերի ՍԿԶԲՈՒՄ:',
    confusionsEs: 'Anáfora (principio de varios versos) vs Epanadiplosis (principio y final del mismo verso).',
    confusionsHy: 'Anáfora (մի քանի տողերի սկզբում) ընդդեմ Epanadiplosis (նույն տողի սկզբում և վերջում):',
    memoryTrickEs: '«Anáfora = Al comienzo de Cada Fila».',
    memoryTrickHy: '«Անաֆորա = Ամեն տողի սկզբում»:',
    checkpointQuestions: [
      {
        id: 'cp_20_1',
        questionEs: '¿Qué figura aparece en «Dime qué buscas, / dime qué sueñas, / dime qué quieres»?',
        questionHy: 'Ի՞նչ պատկերավորման միջոց է «Dime qué buscas, / dime qué sueñas, / dime qué quieres» տողերում:',
        options: [
          { id: 'a', textEs: 'Anáfora (repetición de «dime qué» al principio)', textHy: 'Անաֆորա («dime qué» կրկնությունը սկզբում)', isCorrect: true },
          { id: 'b', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
          { id: 'c', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false },
          { id: 'd', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս', isCorrect: false }
        ],
        explanationEs: '«Dime qué» se repite al inicio de cada uno de los tres versos seguidos, es una anáfora.',
        explanationHy: '«Dime qué»-ն կրկնվում է երեք տողերի սկզբում, ուստի անաֆորա է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_20_1',
        frontEs: '¿Dónde se repiten las palabras en una anáfora?',
        frontHy: 'Որտե՞ղ են կրկնվում բառերը անաֆորայում:',
        backEs: 'Al principio de dos o más versos, estrofas o frases consecutivas.',
        backHy: 'Երկու կամ ավելի հաջորդական տողերի, տների կամ նախադասությունների սկզբում:'
      }
    ]
  },
  {
    id: 'tema_29_asindeton',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 21,
    titleEs: 'El asíndeton (Nivel morfosintáctico)',
    titleHy: 'Անշաղկապություն / Ասինդետոն (El asíndeton - Շարահյուսական մակարդակ)',
    definitionEs: 'Figura retórica que consiste en la omisión deliberada de conjunciones (como «y», «e», «ni») entre palabras u oraciones que normalmente las llevarían, separándolas solo por comas.',
    definitionHy: 'Պատկերավորման միջոց, որը կայանում է շաղկապների («y», «e», «ni» - և, ու) միտումնավոր բացթողման մեջ՝ բառերը կամ նախադասությունները բաժանելով միայն ստորակետներով:',
    simpleExplanationEs: 'En vez de decir «Corre y salta y ríe y baila», dices «Corre, salta, ríe, baila». Sin conjunciones, ¡todo va a toda prisa!',
    simpleExplanationHy: 'Ասելու փոխարեն «Վազում է և ցատկում և ծիծաղում և պարում», ասում ենք՝ «Վազում է, ցատկում, ծիծաղում, պարում»։ Առանց շաղկապների ամեն ինչ ընթանում է շատ արագ։',
    howToRecognizeEs: 'Busca una lista de elementos separados ÚNICAMENTE por comas, sin la «y» final habitual.',
    howToRecognizeHy: 'Փնտրիր միայն ստորակետներով առանձնացված բառերի շարք՝ առանց վերջին «y» (և) շաղկապի։',
    purposeEs: 'Dar dinamismo, rapidez, agilidad, energía y sensación de movimiento acelerado.',
    purposeHy: 'Դինամիզմ, արագություն, եռանդ և արագացված շարժման զգացողություն հաղորդել։',
    examples: [
      { es: 'Llegué, vi, vencí.', hy: 'Եկա, տեսա, հաղթեցի (Julio César)։', highlight: 'Omisión de «y»: Llegué, [y] vi, [y] vencí.' },
      { es: 'Corre, salta, ríe, baila sin parar.', hy: 'Վազիր, ցատկիր, ծիծաղիր, պարիր առանց կանգնելու։', highlight: 'Verbos separados solo por comas' },
      { es: 'Rendí, rompí, derribé, rajé, deshice, prendí.', hy: 'Հնազանդեցրի, ջարդեցի, տապալեցի, պատռեցի, ոչնչացրի, բռնեցի։', highlight: 'Lope de Vega: asíndeton enérgico' },
      { es: 'El fuego quema, devora, arrasa, destruye.', hy: 'Կրակը այրում է, խժռում, հողին հավասարեցնում, ավերում։', highlight: 'Asíndeton' },
      { es: 'Día, noche, poniente, madrugada.', hy: 'Օր, գիշեր, մայրամուտ, լուսաբաց։', highlight: 'Sin nexos conjuntivos' }
    ],
    frequentMistakesEs: 'Confundirlo con polisíndeton. El prefijo «A-» significa «SIN» (Asíndeton = SIN conjunción). «Poli-» significa «MUCHOS» (Polisíndeton = MUCHAS conjunciones).',
    frequentMistakesHy: 'Շփոթել polisíndeton-ի հետ։ «A-» նախածանցը նշանակում է ԱՌԱՆՑ (Asíndeton = ԱՌԱՆՑ շաղկապի)։ «Poli-» նշանակում է ՇԱՏ (Polisíndeton = ՇԱՏ շաղկապներով):',
    confusionsEs: 'En una enumeración normal se pone «A, B y C». Si es asíndeton, se quita la «y»: «A, B, C».',
    confusionsHy: 'Սովորական թվարկման մեջ վերջում դրվում է «y»: Ասինդետոնում «y»-ը հանվում է՝ «A, B, C»:',
    memoryTrickEs: '«A-síndeton = A-usencia de conjunciones (rápido como un rayo)».',
    memoryTrickHy: '«A-síndeton = ԱՌԱՆՑ շաղկապի (արագ, ինչպես կայծակ)»:',
    checkpointQuestions: [
      {
        id: 'cp_21_1',
        questionEs: '¿Qué figura retórica encontramos en «Grita, corre, escapa, vuela»?',
        questionHy: 'Ի՞նչ պատկերավորման միջոց է «Grita, corre, escapa, vuela» նախադասության մեջ:',
        options: [
          { id: 'a', textEs: 'Asíndeton (omisión de conjunciones)', textHy: 'Անշաղկապություն (Asíndeton)', isCorrect: true },
          { id: 'b', textEs: 'Polisíndeton', textHy: 'Բազմաշաղկապություն', isCorrect: false },
          { id: 'c', textEs: 'Aliteración', textHy: 'Ալիտերացիա', isCorrect: false },
          { id: 'd', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա', isCorrect: false }
        ],
        explanationEs: 'Se han eliminado todas las conjunciones para dar máxima rapidez: es ASÍNDETON.',
        explanationHy: 'Բոլոր շաղկապները բաց են թողնված՝ առավելագույն արագություն տալու համար. դա ASÍNDETON է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_21_1',
        frontEs: '¿Qué significa el prefijo «A-» en asíndeton?',
        frontHy: 'Ի՞նչ է նշանակում «A-» նախածանցը asíndeton բառում:',
        backEs: 'Significa «sin» o «privación». Asíndeton = sin conjunciones.',
        backHy: 'Նշանակում է «առանց» կամ զրկված։ Asíndeton = առանց շաղկապների:'
      }
    ]
  },
  {
    id: 'tema_30_polisindeton',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 22,
    titleEs: 'El polisíndeton (Nivel morfosintáctico)',
    titleHy: 'Բազմաշաղկապություն / Պոլիսինդետոն (El polisíndeton - Շարահյուսական մակարդակ)',
    definitionEs: 'Figura morfosintáctica que consiste en la repetición innecesaria y reiterada de conjunciones coordinantes (habitualmente «y», «ni», «o») para unir palabras o frases.',
    definitionHy: 'Շարահյուսական մակարդակի միջոց, որը կայանում է համադասական շաղկապների (սովորաբար «y», «ni», «o» - և, ոչ, կամ) անհարկի և բազմակի կրկնության մեջ:',
    simpleExplanationEs: 'Lo contrario del asíndeton: en vez de quitar las «y», ¡pones «y» por todas partes! «Y canta, y ríe, y baila, y sueña».',
    simpleExplanationHy: 'Անշաղկապության հակառակը. շաղկապները հանելու փոխարեն ամեն տեղ «y» ես դնում՝ «Y canta, y ríe, y baila, y sueña» (Ե՛վ երգում է, և՛ ծիծաղում, և՛ պարում, և՛ երազում)։',
    howToRecognizeEs: 'Ves una acumulación constante de «y... y... y...» o «ni... ni... ni...» en la misma frase.',
    howToRecognizeHy: 'Նույն նախադասության մեջ տեսնում ես շաղկապների կրկնություն՝ «y... y... y...» կամ «ni... ni... ni...»:',
    purposeEs: 'Dar lentitud, solemnidad, peso y subrayar la importancia de cada elemento.',
    purposeHy: 'Դանդաղություն, հանդիսավորություն, կշիռ հաղորդել և ընդգծել յուրաքանչյուր բաղադրիչի կարևորությունը։',
    examples: [
      { es: 'Y sueña, y ama, y canta, y vive con pasión.', hy: 'Եվ երազում է, և սիրում, և երգում, և ապրում կրքով։', highlight: 'Repetición de la conjunción «y»' },
      { es: 'Ni el dinero, ni la fama, ni el poder le daban paz.', hy: 'Ո՛չ փողը, ո՛չ փառքը, ո՛չ իշխանությունը նրան խաղաղություն չէին տալիս։', highlight: 'Repetición de la conjunción «ni»' },
      { es: 'El prado y el río y el bosque y la colina dormían.', hy: 'Մարգագետինը, և՛ գետը, և՛ անտառը, և՛ բլուրը քնած էին։', highlight: 'Polisíndeton con «y»' },
      { es: 'Soy un fue y un será y un es cansado.', hy: 'Ես մի «եղել է» եմ, և մի «կլինի», և մի հոգնած «է» (Quevedo)։', highlight: 'Quevedo: polisíndeton' },
      { es: 'Y los niños corrían y reían y jugaban en el parque.', hy: 'Եվ երեխաները վազում էին և ծիծաղում և խաղում այգում։', highlight: 'Repetición expresiva de conjunciones' }
    ],
    frequentMistakesEs: 'Pensar que el polisíndeton acelera la frase. ¡Al revés! El polisíndeton hace el ritmo más PAUSADO y solemne.',
    frequentMistakesHy: 'Մտածել, թե պոլիսինդետոնը արագացնում է խոսքը։ Ընդհակառակը՝ այն ռիթմը դարձնում է ավելի ԴԱՆԴԱՂ և հանդիսավոր։',
    confusionsEs: 'Asíndeton = 0 conjunciones (rápido). Polisíndeton = Muchas conjunciones (lento y pesado).',
    confusionsHy: 'Asíndeton = 0 շաղկապ (արագ)։ Polisíndeton = Շատ շաղկապներ (դանդաղ, հանդիսավոր)։',
    memoryTrickEs: '«Poli-síndeton = POLI (muchas) conjunciones: Y... Y... Y...».',
    memoryTrickHy: '«Poli-síndeton = ՇԱՏ շաղկապներ՝ Y... Y... Y...»:',
    checkpointQuestions: [
      {
        id: 'cp_22_1',
        questionEs: 'En «Y ríe, y llora, y salta de alegría», ¿qué figura literaria predomina?',
        questionHy: '«Y ríe, y llora, y salta de alegría» նախադասության մեջ ո՞ր գեղարվեստական միջոցն է գերակշռում:',
        options: [
          { id: 'a', textEs: 'Polisíndeton (repetición de conjunciones)', textHy: 'Բազմաշաղկապություն (Polisíndeton)', isCorrect: true },
          { id: 'b', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false },
          { id: 'c', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
          { id: 'd', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա', isCorrect: false }
        ],
        explanationEs: 'La repetición intencionada de la conjunción «y» es un POLISÍNDETON.',
        explanationHy: '«y» շաղկապի միտումնավոր բազմակի կրկնությունը POLISÍNDETON է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_22_1',
        frontEs: '¿Qué efecto produce el polisíndeton en el ritmo del texto?',
        frontHy: 'Ի՞նչ ազդեցություն է ունենում պոլիսինդետոնը տեքստի ռիթմի վրա:',
        backEs: 'Produce un ritmo más pausado, lento, solemne y reflexivo.',
        backHy: 'Ստեղծում է ավելի դանդաղ, հանդիսավոր, կշռադատված և հանգիստ ռիթմ:'
      }
    ]
  },
  {
    id: 'tema_31_enumeracion',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 23,
    titleEs: 'La enumeración (Nivel morfosintáctico)',
    titleHy: 'Թվարկում (La enumeración - Շարահյուսական մակարդակ)',
    definitionEs: 'Figura morfosintáctica que consiste en la acumulación o presentación sucesiva de una serie de elementos, acciones, objetos o cualidades pertenecientes a un mismo conjunto o ámbito.',
    definitionHy: 'Շարահյուսական մակարդակի միջոց, որը կայանում է նույն խմբին կամ ոլորտին պատկանող մի շարք տարրերի, գործողությունների, առարկաների կամ հատկանիշների հաջորդական կուտակման կամ ներկայացման մեջ:',
    simpleExplanationEs: 'Hacer una lista detallada en una frase: «Había libros, cuadernos, lápices, reglas y mapas encima de la mesa».',
    simpleExplanationHy: 'Նախադասության մեջ մանրամասն ցուցակ ներկայացնել՝ «Սեղանի վրա կային գրքեր, տետրեր, մատիտներ, քանոններ և քարտեզներ»։',
    howToRecognizeEs: 'Identifica una lista de tres o más palabras de la misma categoría gramatical (sustantivos, adjetivos, verbos).',
    howToRecognizeHy: 'Փնտրիր նույն խոսքի մասի երեք կամ ավելի բառերի շարք (գոյականներ, ածականներ կամ բայեր)։',
    purposeEs: 'Describir con exhaustividad, crear abundancia visual y dar riqueza al texto.',
    purposeHy: 'Մանրամասն նկարագրել, ստեղծել առատության տպավորություն և հարստացնել տեքստը։',
    examples: [
      { es: 'En su mochila llevaba libros, cuadernos, lápices y estuches.', hy: 'Նրա պայուսակում կային գրքեր, տետրեր, մատիտներ և գրչատուփեր։', highlight: 'Enumeración de objetos (sustantivos)' },
      { es: 'Era un joven alto, delgado, moreno y de mirada viva.', hy: 'Նա բարձրահասակ, նիհար, թխամորթ և կայտառ հայացքով երիտասարդ էր։', highlight: 'Enumeración de adjetivos descriptivos' },
      { es: 'La tormenta trajo truenos, relámpagos, granizo y viento helado.', hy: 'Փոթորիկը բերեց որոտ, կայծակ, կարկուտ և սառը քամի։', highlight: 'Enumeración de sustantivos' },
      { es: 'Compramos manzanas, peras, uvas, naranjas y plátanos.', hy: 'Գնեցինք խնձորներ, տանձեր, խաղող, նարինջներ և բանաններ։', highlight: 'Enumeración simple' }
    ],
    frequentMistakesEs: 'Pensar que toda enumeración es asíndeton. Si tiene la «y» al final («A, B y C»), es una enumeración normal con nexo final.',
    frequentMistakesHy: 'Կարծել, թե ամեն թվարկում asíndeton է։ Եթե վերջում կա «y», դա սովորական թվարկում է։',
    confusionsEs: 'La enumeración puede combinarse con asíndeton (si no lleva conjunciones) o con polisíndeton (si repite «y»).',
    confusionsHy: 'Թվարկումը կարող է զուգորդվել asíndeton-ի հետ (առանց շաղկապների) կամ polisíndeton-ի հետ (կրկնվող «y»-ով):',
    memoryTrickEs: '«Enumeración = Lista de cosas de la misma familia».',
    memoryTrickHy: '«Թվարկում = Նույն ընտանիքի իրերի ցուցակ»:',
    checkpointQuestions: [
      {
        id: 'cp_23_1',
        questionEs: '«En la tienda vendían sombreros, guantes, bufandas y abrigos». ¿Qué figura es?',
        questionHy: '«En la tienda vendían sombreros, guantes, bufandas y abrigos»: Ի՞նչ միջոց է:',
        options: [
          { id: 'a', textEs: 'Enumeración', textHy: 'Թվարկում (Enumeración)', isCorrect: true },
          { id: 'b', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
          { id: 'c', textEs: 'Metáfora', textHy: 'Փոխաբերություն', isCorrect: false },
          { id: 'd', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս', isCorrect: false }
        ],
        explanationEs: 'Es una presentación sucesiva de prendas de ropa: una enumeración clara.',
        explanationHy: 'Հագուստի իրերի հաջորդական ներկայացում է՝ հստակ թվարկում:'
      }
    ],
    flashcards: [
      {
        id: 'fc_23_1',
        frontEs: '¿Qué es una enumeración?',
        frontHy: 'Ի՞նչ է թվարկումը (enumeración):',
        backEs: 'Es la presentación sucesiva de una serie de palabras de la misma categoría o idea (objetos, cualidades, acciones).',
        backHy: 'Նույն խոսքի մասի կամ գաղափարի բառերի հաջորդական ներկայացումն է (առարկաներ, հատկանիշներ, գործողություններ):'
      }
    ]
  },
  {
    id: 'tema_32_pleonasmo',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 24,
    titleEs: 'El pleonasmo (Nivel morfosintáctico)',
    titleHy: 'Պլեոնազմ / Ավելաբանություն (El pleonasmo - Շարահյուսական մակարդակ)',
    definitionEs: 'Figura retórica que consiste en el empleo de palabras redundantes o aparentemente innecesarias que repiten una idea ya expresada, con el fin de intensificar el significado o aportar fuerza emotiva.',
    definitionHy: 'Պատկերավորման միջոց, որը կայանում է ավելորդ կամ ակնհայտորեն ավելաբանական բառերի կիրառման մեջ, որոնք կրկնում են արդեն արտահայտված միտքը՝ իմաստն ուժեղացնելու կամ հուզականություն հաղորդելու նպատակով:',
    simpleExplanationEs: 'Decir algo que ya se sobreentiende para que quede ultra claro y con más fuerza: «Lo vi con mis propios ojos», «Llorar por los ojos», «Subir arriba».',
    simpleExplanationHy: 'Ասել մի բան, որն արդեն ինքնըստինքյան հասկանալի է, որպեսզի միտքը դառնա շատ ավելի ընդգծված ու հուզական՝ «Տեսա իմ սեփական աչքերով», «Վերև բարձրանալ»։',
    howToRecognizeEs: 'Busca expresiones donde se añade una palabra redundante para recalcar la certeza o emoción.',
    howToRecognizeHy: 'Փնտրիր արտահայտություններ, որտեղ ավելացված է կրկնվող բառ՝ համոզվածությունն ու հույզը շեշտելու համար։',
    purposeEs: 'Dar contundencia, evitar cualquier duda testimonial y reforzar la emoción.',
    purposeHy: 'Անառարկելիություն տալ, բացառել ցանկացած կասկած և զորացնել զգացմունքը։',
    examples: [
      { es: 'Lo vi con mis propios ojos, nadie me lo contó.', hy: 'Իմ սեփական աչքերով տեսա, ոչ ոք ինձ չի պատմել։', highlight: 'con mis propios ojos (ya se ve con los ojos)' },
      { es: 'Lloraba amargamente de sus ojos tan fuertemente llorando.', hy: 'Դառնորեն լալիս էր իր աչքերից՝ այդքան ուժգին արտասվելով (Cantar de Mio Cid)։', highlight: 'lloraba de sus ojos (pleonasmo del Mio Cid)' },
      { es: 'Entró adentro de la cueva oscura.', hy: 'Ներս մտավ մութ քարանձավի ներսը։', highlight: 'entró adentro' },
      { es: 'Volé por el aire libre y sin cadenas.', hy: 'Թռա ազատ օդով՝ առանց շղթաների։', highlight: 'volé por el aire' },
      { es: 'Bajar abajo al sótano de la casa.', hy: 'Իջնել ներքև՝ տան նկուղը։', highlight: 'bajar abajo' }
    ],
    frequentMistakesEs: 'Confundir el pleonasmo literario intencionado con un fallo de expresión descuidado. En literatura tiene valor poético de insistencia.',
    frequentMistakesHy: 'Շփոթել գեղարվեստական միտումնավոր պլեոնազմը անփույթ խոսքի սխալի հետ։ Գրականության մեջ այն ունի պնդման գեղարվեստական արժեք։',
    confusionsEs: 'En el examen escolar, la frase «Lo vi con mis propios ojos» es el ejemplo estrella de pleonasmo.',
    confusionsHy: 'Դպրոցական քննությունում «Lo vi con mis propios ojos» արտահայտությունը պլեոնազմի ամենատիպիկ օրինակն է:',
    memoryTrickEs: '«Pleonasmo = Palabras de más para enfatizar de verdad: con mis propios ojos».',
    memoryTrickHy: '«Պլեոնազմ = Ավելորդ բառեր՝ ճշմարտությունը շեշտելու համար՝ իմ սեփական աչքերով»:',
    checkpointQuestions: [
      {
        id: 'cp_24_1',
        questionEs: '¿Qué figura literaria hay en «Lo escuché con mis propios oídos»?',
        questionHy: 'Ի՞նչ պատկերավորման միջոց է «Lo escuché con mis propios oídos» նախադասության մեջ:',
        options: [
          { id: 'a', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ (Pleonasmo)', isCorrect: true },
          { id: 'b', textEs: 'Metáfora', textHy: 'Փոխաբերություն', isCorrect: false },
          { id: 'c', textEs: 'Aliteración', textHy: 'Ալիտերացիա', isCorrect: false },
          { id: 'd', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա', isCorrect: false }
        ],
        explanationEs: 'Añade «con mis propios oídos» a la acción de escuchar; es una redundancia enfática o PLEONASMO.',
        explanationHy: 'Լսելու գործողությանն ավելացնում է «իմ սեփական ականջներով»՝ ընդգծող ավելաբանություն (PLEONASMO):'
      }
    ],
    flashcards: [
      {
        id: 'fc_24_1',
        frontEs: '¿Qué es un pleonasmo?',
        frontHy: 'Ի՞նչ է պլեոնազմը:',
        backEs: 'Es el uso de palabras redundantes o repetitivas para reforzar con energía el significado (ej. «lo vi con mis propios ojos»).',
        backHy: 'Ավելորդ կամ կրկնվող բառերի գործածությունն է իմաստը ուժգնորեն շեշտելու համար (օր. «տեսա իմ սեփական աչքերով»):'
      }
    ]
  },

  // Nivel Semántico
  {
    id: 'tema_33_metafora',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Las Figuras Literarias',
    moduleNameHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ (Figuras literarias)',
    number: 25,
    titleEs: 'La metáfora (Nivel semántico)',
    titleHy: 'Փոխաբերություն (La metáfora - Իմաստային մակարդակ)',
    definitionEs: 'Figura retórica del nivel semántico que consiste en la identificación o traslación de significado entre un término real (A) y un término imaginario (B), fundada en una relación de semejanza.',
    definitionHy: 'Իմաստային մակարդակի պատկերավորման միջոց, որը կայանում է իրական եզրի (A) և պատկերավոր/երևակայական եզրի (B) նույնացման կամ իմաստի փոխանցման մեջ՝ նրանց միջև եղած նմանության հիման վրա:',
    simpleExplanationEs: 'Llamar a una cosa con el nombre de otra porque se parecen en algo: «Tus ojos son dos luceros» (se parecen porque brillan). Si usas la palabra «como», es una comparación; si dices que una cosa ES la otra, es una METÁFORA.',
    simpleExplanationHy: 'Մի իրին տալ ուրիշ իրի անունը, որովհետև նրանք նման են՝ «Քո աչքերը երկու աստղեր են» (նման են, որովհետև շողում են)։ Եթե օգտագործում ես «ինչպես» (como), դա համեմատություն է, իսկ եթե ասում ես, որ դրանք նույնն են՝ ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ է։',
    howToRecognizeEs: 'Estructuras principales de la libreta: 1. A es B («Tus dientes son perlas»). 2. B de A («Las perlas de tu boca»). 3. Metáfora pura: solo B en lugar de A («Las perlas me sonrieron»).',
    howToRecognizeHy: 'Տետրի հիմնական կառուցվածքները՝ 1. A-ն B է («Tus dientes son perlas»)։ 2. A-ի B-ն («Las perlas de tu boca»)։ 3. Զուտ փոխաբերություն՝ միայն B-ն A-ի փոխարեն («Las perlas me sonrieron»):',
    purposeEs: 'Crear belleza poética, sugerir imágenes deslumbrantes y transmitir sensaciones profundas.',
    purposeHy: 'Ստեղծել գեղարվեստական գեղեցկություն, հուշել պայծառ պատկերներ և փոխանցել խորը զգացմունքներ։',
    examples: [
      { es: 'Tus ojos son dos luceros que iluminan mi noche.', hy: 'Քո աչքերը երկու աստղեր են, որ լուսավորում են իմ գիշերը։', highlight: 'Estructura «A es B» (Término real: ojos; Imaginario: luceros)' },
      { es: 'Las perlas de tu boca brillan al reír.', hy: 'Քո բերանի մարգարիտները փայլում են ծիծաղելիս։', highlight: 'Estructura «B de A» (Término imaginario: perlas; Real: boca/dientes)' },
      { es: 'El manto blanco del invierno cubrió la montaña.', hy: 'Ձմռան սպիտակ թիկնոցը ծածկեց սարը։', highlight: 'Manto blanco = la nieve (metáfora)' },
      { es: 'Su cabello es oro puro que cae sobre sus hombros.', hy: 'Նրա մազերը մաքուր ոսկի են, որ իջնում են ուսերին։', highlight: 'Cabello = oro' },
      { es: 'El tambor de su pecho latía con fuerza.', hy: 'Նրա կրծքի թմբուկը ուժգին զարկում էր։', highlight: 'Tambor del pecho = el corazón' },
      { es: 'El cielo se vistió de fuego al atardecer.', hy: 'Երկինքը հագավ կրակ մայրամուտին։', highlight: 'Fuego = los colores rojizos del atardecer' }
    ],
    frequentMistakesEs: '¡El error más grave en el examen de 1.º ESO! Confundir metáfora con comparación. «Tus ojos son luceros» = METÁFORA. «Tus ojos son COMO luceros» = COMPARACIÓN O SÍMIL.',
    frequentMistakesHy: 'Ամենալուրջ սխալը 1-ին ESO-ի քննությանը. շփոթել փոխաբերությունը համեմատության հետ։ «Tus ojos son luceros» = ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ (METÁFORA)։ «Tus ojos son COMO luceros» = ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ (COMPARACIÓN):',
    confusionsEs: 'Si aparece el nexo comparativo «como», «cual» o «parece», es una COMPARACIÓN, ¡nunca una metáfora!',
    confusionsHy: 'Եթե կա «como» (ինչպես), «parece» (նման է), դա ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ է, ոչ թե փոխաբերություն:',
    memoryTrickEs: '«Lleva COMO = Comparación». «NO lleva como y A es B = Metáfora».',
    memoryTrickHy: '«Կա COMO = Համեմատություն»։ «Չկա como ու A es B = Փոխաբերություն»:',
    checkpointQuestions: [
      {
        id: 'cp_25_1',
        questionEs: '¿Cuál de las siguientes oraciones es una METÁFORA y NO una comparación?',
        questionHy: 'Հետևյալ նախադասություններից ո՞րն է ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ (Metáfora) և ոչ թե համեմատություն:',
        options: [
          { id: 'a', textEs: 'El río es una serpiente de plata.', textHy: 'Գետը արծաթե օձ է։ (Փոխաբերություն - Metáfora)', isCorrect: true },
          { id: 'b', textEs: 'El río corre como una serpiente.', textHy: 'Գետը հոսում է ինչպես օձ։ (Համեմատություն)', isCorrect: false },
          { id: 'c', textEs: 'El río parece una cinta plateada.', textHy: 'Գետը նման է արծաթե ժապավենի։', isCorrect: false },
          { id: 'd', textEs: 'El río es tan largo como aquel camino.', textHy: 'Գետը այնքան երկար է, որքան այն ճանապարհը։', isCorrect: false }
        ],
        explanationEs: '«El río es una serpiente de plata» identifica directamente A con B sin usar «como»; es una metáfora.',
        explanationHy: '«El río es una serpiente de plata» ուղղակիորեն նույնացնում է A-ն B-ի հետ առանց «como»-ի, ուստի փոխաբերություն է:'
      }
    ],
    flashcards: [
      {
        id: 'fc_25_1',
        frontEs: '¿Cómo distingues al instante una metáfora de una comparación o símil?',
        frontHy: 'Ինչպե՞ս ակնթարթորեն տարբերել փոխաբերությունը համեմատությունից (comparación):',
        backEs: 'La comparación siempre lleva un nexo («como», «cual», «parece que»). La metáfora identifica directamente un elemento con otro sin «como» (A es B).',
        backHy: 'Համեմատությունը միշտ ունի կապող բառ («como», «parece» - ինչպես, նման է)։ Փոխաբերությունը ուղղակի նույնացնում է առանց «como»-ի (A es B):'
      }
    ]
  }
];

// Special Pair-wise Lessons requested in notebook:
export const comparisonPairsData: ComparisonPair[] = [
  {
    id: 'pair_metafora_comparacion',
    titleEs: 'Metáfora vs. Comparación (Símil)',
    titleHy: 'Փոխաբերություն ընդդեմ Համեմատության',
    conceptAEs: 'Metáfora',
    conceptAHy: 'Փոխաբերություն (Metáfora)',
    conceptBEs: 'Comparación (Símil)',
    conceptBHy: 'Համեմատություն (Comparación)',
    diffSummaryEs: 'La metáfora IDENTIFICA directamente dos elementos (A es B). La comparación los RELACIONA mediante un nexo como «como», «parece» o «cual».',
    diffSummaryHy: 'Փոխաբերությունը ՈՒՂՂԱԿԻ ՆՈՒՅՆԱՑՆՈՒՄ Է (A-ն B է)։ Համեմատությունը ԿԱՊՈՒՄ Է «como» (ինչպես), «parece» բառերով։',
    keyFeatureAEs: 'Sin nexo («Tus ojos son luceros»)',
    keyFeatureAHy: 'Առանց շաղկապի («Tus ojos son luceros»)',
    keyFeatureBEs: 'Con nexo comparativo («Tus ojos son como luceros»)',
    keyFeatureBHy: 'Համեմատական շաղկապով («Tus ojos son como luceros»)',
    examples: [
      {
        textEs: 'El niño corre como el viento.',
        textHy: 'Երեխան վազում է ինչպես քամին։',
        belongsTo: 'B',
        whyEs: 'Tiene el nexo comparativo «como».',
        whyHy: 'Ունի համեմատական «como» շաղկապը:'
      },
      {
        textEs: 'El niño es un vendaval de energía.',
        textHy: 'Երեխան էներգիայի հողմ է։',
        belongsTo: 'A',
        whyEs: 'Identifica al niño con un vendaval directamente con el verbo ser.',
        whyHy: 'Երեխային ուղղակի նույնացնում է հողմի հետ:'
      },
      {
        textEs: 'Las nubes son copos de algodón en el cielo azul.',
        textHy: 'Ամպերը բամբակի փաթիլներ են կապույտ երկնքում։',
        belongsTo: 'A',
        whyEs: 'Estructura A es B sin usar como.',
        whyHy: 'A es B կառուցվածք՝ առանց como-ի:'
      },
      {
        textEs: 'Las nubes parecen copos de algodón.',
        textHy: 'Ամպերը նման են բամբակի փաթիլների։',
        belongsTo: 'B',
        whyEs: 'Usa el verbo comparativo «parecen».',
        whyHy: 'Օգտագործում է «parecen» (նման են) բայը:'
      }
    ]
  },
  {
    id: 'pair_anafora_epanadiplosis',
    titleEs: 'Anáfora vs. Epanadiplosis',
    titleHy: 'Անաֆորա ընդդեմ Էպանադիպլոսիսի',
    conceptAEs: 'Anáfora',
    conceptAHy: 'Անաֆորա (Anáfora)',
    conceptBEs: 'Epanadiplosis',
    conceptBHy: 'Էպանադիպլոսիս (Epanadiplosis)',
    diffSummaryEs: 'La anáfora repite palabras al COMIENZO de varios versos seguidos. La epanadiplosis repite una palabra al COMIENZO y al FINAL del MISMO verso.',
    diffSummaryHy: 'Անաֆորան կրկնվում է մի քանի տողերի ՍԿԶԲՈՒՄ։ Էպանադիպլոսիսը կրկնվում է ՆՈՒՅՆ տողի սկզբում և վերջում։',
    keyFeatureAEs: 'Repetición vertical al inicio de versos consecutivos.',
    keyFeatureAHy: 'Ուղղահայաց կրկնություն տողերի սկզբում։',
    keyFeatureBEs: 'Efecto bumerán en una sola línea (palabra inicial = palabra final).',
    keyFeatureBHy: 'Բումերանգի էֆեկտ մեկ տողում (առաջին բառ = վերջին բառ)։',
    examples: [
      {
        textEs: 'Verde que te quiero verde.',
        textHy: 'Կանաչ, որ քեզ սիրում եմ կանաչ։',
        belongsTo: 'B',
        whyEs: 'Empieza por verde y termina por verde en el mismo verso.',
        whyHy: 'Սկսվում է verde-ով և ավարտվում verde-ով նույն տողում:'
      },
      {
        textEs: 'Todo pasa,\ntodo queda,\ntodo vuelve a empezar.',
        textHy: 'Ամեն ինչ անցնում է,\nամեն ինչ մնում է,\nամեն ինչ նորից է սկսվում։',
        belongsTo: 'A',
        whyEs: '«Todo» se repite al inicio de tres versos seguidos.',
        whyHy: '«Todo» բառը կրկնվում է երեք հաջորդական տողերի սկզբում:'
      }
    ]
  },
  {
    id: 'pair_asindeton_polisindeton',
    titleEs: 'Asíndeton vs. Polisíndeton',
    titleHy: 'Անշաղկապություն (Asíndeton) ընդդեմ Բազմաշաղկապության (Polisíndeton)',
    conceptAEs: 'Asíndeton',
    conceptAHy: 'Անշաղկապություն (Asíndeton)',
    conceptBEs: 'Polisíndeton',
    conceptBHy: 'Բազմաշաղկապություն (Polisíndeton)',
    diffSummaryEs: 'Asíndeton OMITE conjunciones (da rapidez y dinamismo). Polisíndeton REPITE muchas conjunciones (da lentitud y solemnidad).',
    diffSummaryHy: 'Asíndeton-ը ԲԱՑ Է ԹՈՂՆՈՒՄ շաղկապները (արագություն)։ Polisíndeton-ը ԿՐԿՆՈՒՄ Է շաղկապները (դանդաղություն)։',
    keyFeatureAEs: 'Sin nexos, solo comas («corre, vuela, salta»)',
    keyFeatureAHy: 'Առանց շաղկապի, միայն ստորակետներ («corre, vuela»)',
    keyFeatureBEs: 'Muchas «y» o «ni» («y corre y vuela y salta»)',
    keyFeatureBHy: 'Շատ «y» կամ «ni» («y corre y vuela»)',
    examples: [
      {
        textEs: 'Canta, ríe, sueña, vive.',
        textHy: 'Երգիր, ծիծաղիր, երազիր, ապրիր։',
        belongsTo: 'A',
        whyEs: 'Omisión total de conjunciones.',
        whyHy: 'Շաղկապների լիակատար բացակայություն:'
      },
      {
        textEs: 'Y canta y ríe y sueña y vive.',
        textHy: 'Եվ երգում է և ծիծաղում և երազում և ապրում։',
        belongsTo: 'B',
        whyEs: 'Repetición expresiva de la conjunción «y».',
        whyHy: '«y» շաղկապի բազմակի կրկնություն:'
      }
    ]
  },
  {
    id: 'pair_aliteracion_onomatopeya',
    titleEs: 'Aliteración vs. Onomatopeya',
    titleHy: 'Ալիտերացիա ընդդեմ Բնաձայնության (Օնոմատոպեա)',
    conceptAEs: 'Aliteración',
    conceptAHy: 'Ալիտերացիա (Aliteración)',
    conceptBEs: 'Onomatopeya',
    conceptBHy: 'Բնաձայնություն (Onomatopeya)',
    diffSummaryEs: 'La aliteración repite sonidos fonéticos dentro de palabras habituales. La onomatopeya es una palabra que imita directamente un ruido acústico.',
    diffSummaryHy: 'Ալիտերացիան հնչյունների կրկնություն է սովորական բառերում։ Օնոմատոպեան բառ է, որն անմիջապես նմանակում է ձայնը։',
    keyFeatureAEs: 'Repetición de letras/sonidos («El silbo suave susurra»)',
    keyFeatureAHy: 'Տառերի/հնչյունների կրկնություն («El silbo suave susurra»)',
    keyFeatureBEs: 'Palabra que reproduce el sonido («¡pum!», «tic-tac», «guau»)',
    keyFeatureBHy: 'Ձայնը նմանակող բառ («¡pum!», «tic-tac»)',
    examples: [
      {
        textEs: 'El reloj hacía tic-tac en la pared.',
        textHy: 'Ժամացույցը պատի վրա անում էր տիկ-տակ։',
        belongsTo: 'B',
        whyEs: '«Tic-tac» imita el sonido del reloj.',
        whyHy: '«Tic-tac»-ը նմանակում է ժամացույցի ձայնը:'
      },
      {
        textEs: 'El suave susurro sonaba solo.',
        textHy: 'Մեղմ շշուկը հնչում էր միայնակ։',
        belongsTo: 'A',
        whyEs: 'Repite la «s» en palabras normales.',
        whyHy: 'Կրկնում է «s»-ը սովորական բառերում:'
      }
    ]
  }
];
