import { ExerciseItem } from './types';

export const exercisesModule345: ExerciseItem[] = [
  // LITERATURA POPULAR Y CULTA
  {
    id: 'ex_lit_1',
    topicId: 'tema_14_15_literatura_popular_culta',
    moduleId: 'modulo_3',
    moduleNameEs: 'Módulo 3: Literatura Popular y Culta',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: 'Un villancico tradicional que se canta en los pueblos y que no tiene autor registrado pertenece a...',
    promptHy: 'Ավանդական Սուրբ Ծննդյան երգը (villancico), որը երգում են գյուղերում և չունի գրանցված հեղինակ, պատկանում է...',
    options: [
      { id: 'opt_1', textEs: 'La literatura popular', textHy: 'Ժողովրդական գրականությանը (La literatura popular)', isCorrect: true },
      { id: 'opt_2', textEs: 'La literatura culta', textHy: 'Հեղինակային գրականությանը', isCorrect: false },
      { id: 'opt_3', textEs: 'Un tratado científico', textHy: 'Գիտական աշխատության', isCorrect: false },
      { id: 'opt_4', textEs: 'Un drama teatral renacentista', textHy: 'Վերածննդի դրամային', isCorrect: false }
    ],
    explanationEs: 'La literatura popular se caracteriza por la autoría anónima y la transmisión oral tradicional.',
    explanationHy: 'Ժողովրդական գրականությունը բնութագրվում է անանուն հեղինակով և ավանդական բանավոր փոխանցմամբ:'
  },
  {
    id: 'ex_rom_1',
    topicId: 'tema_16_romance',
    moduleId: 'modulo_3',
    moduleNameEs: 'Módulo 3: El Romance',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    promptEs: '¿Qué esquema métrico y de rima sigue un ROMANCE tradicional español?',
    promptHy: 'Ի՞նչ տողաչափական և հանգային սխեմա ունի իսպանական ավանդական ՌՈՄԱՆՍԸ (Romance):',
    options: [
      { id: 'opt_1', textEs: 'Versos octosílabos (8) con rima asonante en los pares y los impares sueltos', textHy: '8-ավանկ տողեր (octosílabos)՝ զույգ տողերի ասոնանս հանգով և ազատ կենտերով', isCorrect: true },
      { id: 'opt_2', textEs: 'Versos endecasílabos (11) con rima consonante en todos los versos', textHy: '11-ավանկ տողեր՝ բոլոր տողերի կոնսոնանս հանգով', isCorrect: false },
      { id: 'opt_3', textEs: 'Catorce versos fijos con dos cuartetos y dos tercetos', textHy: 'Ֆիքսված 14 տող (սոնետ)', isCorrect: false },
      { id: 'opt_4', textEs: 'Prosa poética sin rima ni versos', textHy: 'Բանաստեղծական արձակ առանց հանգի', isCorrect: false }
    ],
    explanationEs: 'El romance tiene versos de 8 sílabas (octosílabos), con rima asonante solo en los versos pares (2, 4, 6...) y los impares libres.',
    explanationHy: 'Ռոմանսն ունի 8-ավանկ տողեր (octosílabos), ասոնանս հանգ միայն զույգ տողերում (2, 4, 6...) և ազատ կենտ տողեր:'
  },

  // MITO VS LEYENDA
  {
    id: 'ex_mito_1',
    topicId: 'tema_17_18_19_leyenda_mito_cuento',
    moduleId: 'modulo_3',
    moduleNameEs: 'Módulo 3: Narraciones Tradicionales',
    type: 'multiple_choice',
    difficulty: 'intermedio',
    promptEs: 'Un relato tradicional que explica cómo el dios Poseidón provocaba tempestades marinas con su tridente es...',
    promptHy: 'Ավանդական պատմությունը այն մասին, թե ինչպես էր Պոսեյդոն աստվածը եռաժանիով ծովային փոթորիկներ առաջացնում...',
    options: [
      { id: 'opt_1', textEs: 'Un mito', textHy: 'Առասպել (Mito)', isCorrect: true },
      { id: 'opt_2', textEs: 'Una leyenda histórica', textHy: 'Պատմական լեգենդ', isCorrect: false },
      { id: 'opt_3', textEs: 'Un cuento popular de animales', textHy: 'Կենդանական հեքիաթ', isCorrect: false },
      { id: 'opt_4', textEs: 'Una novela en prosa', textHy: 'Վեպ', isCorrect: false }
    ],
    explanationEs: 'Protagonizado por dioses y explicando un fenómeno de la naturaleza, es la definición exacta de MITO.',
    explanationHy: 'Աստվածների մասնակցությամբ և բնական երևույթը բացատրող պատմությունը MITO է:'
  },

  // PROSA O VERSO
  {
    id: 'ex_prosa_verso_1',
    topicId: 'tema_20_21_22_lenguaje_prosa_verso',
    moduleId: 'modulo_4',
    moduleNameEs: 'Módulo 4: Prosa y Verso',
    type: 'multiple_choice',
    difficulty: 'facil',
    promptEs: 'Lee: «Mi infancia son recuerdos de un patio de Sevilla / y un huerto claro donde madura el limonero». ¿Está escrito en prosa o en verso?',
    promptHy: 'Կարդա՝ «Mi infancia son recuerdos de un patio de Sevilla / y un huerto claro donde madura el limonero»։ Արձա՞կ է, թե՞ չափածո։',
    options: [
      { id: 'opt_1', textEs: 'En verso (líneas cortas con ritmo y métrica)', textHy: 'Չափածո (Verso - ռիթմով և չափով տողեր)', isCorrect: true },
      { id: 'opt_2', textEs: 'En prosa', textHy: 'Արձակ (Prosa)', isCorrect: false },
      { id: 'opt_3', textEs: 'Ni en prosa ni en verso', textHy: 'Ո՛չ արձակ, ո՛չ չափածո', isCorrect: false }
    ],
    explanationEs: 'Son versos alejandrinos con ritmo y pausa de final de verso escritos por Antonio Machado.',
    explanationHy: 'Ռիթմով և տողավերջի դադարով գրված չափածո տողեր են (verso):'
  },

  // FIGURAS LITERARIAS - JUEGO 2 (ADIVINA LA FIGURA)
  {
    id: 'ex_fig_alit_1',
    topicId: 'tema_23_aliteracion',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'facil',
    promptEs: '«Con el ala aleve del leve abanico». ¿Qué figura literaria del nivel fónico predomina?',
    promptHy: '«Con el ala aleve del leve abanico»։ Հնչյունային ո՞ր պատկերավորման միջոցն է գերակշռում։',
    options: [
      { id: 'opt_1', textEs: 'Aliteración (repetición de sonidos /l/ y /b/)', textHy: 'Ալիտերացիա (/l/ և /b/ հնչյունների կրկնություն)', isCorrect: true },
      { id: 'opt_2', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա', isCorrect: false },
      { id: 'opt_3', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
      { id: 'opt_4', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն', isCorrect: false }
    ],
    explanationEs: 'La repetición insistente de los sonidos /l/ y /b/ busca imitar el aleteo suave del abanico: es una aliteración.',
    explanationHy: '/l/ և /b/ հնչյունների համառ կրկնությունը ալիտերացիա է:'
  },
  {
    id: 'ex_fig_onom_1',
    topicId: 'tema_24_onomatopeya',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'facil',
    promptEs: '«En mitad del silencio sonó un ¡zas! que asustó a todos». ¿Qué figura es «¡zas!»?',
    promptHy: '«En mitad del silencio sonó un ¡zas! que asustó a todos»։ Ի՞նչ միջոց է «¡zas!» բառը։',
    options: [
      { id: 'opt_1', textEs: 'Onomatopeya (imita un golpe o ruido brusco)', textHy: 'Բնաձայնություն (Onomatopeya - նմանակում է հարվածի ձայնը)', isCorrect: true },
      { id: 'opt_2', textEs: 'Metáfora', textHy: 'Փոխաբերություն', isCorrect: false },
      { id: 'opt_3', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս', isCorrect: false },
      { id: 'opt_4', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false }
    ],
    explanationEs: '«¡Zas!» es una palabra que reproduce directamente el sonido real de un golpe.',
    explanationHy: '«¡Zas!» բառը անմիջապես նմանակում է հարվածի իրական ձայնը:'
  },
  {
    id: 'ex_fig_paron_1',
    topicId: 'tema_25_paronomasia',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'intermedio',
    promptEs: '«Tanta tinta tonta que te atonta». ¿Qué figura literaria destaca en el juego sonoro?',
    promptHy: '«Tanta tinta tonta que te atonta»։ Ի՞նչ պատկերավորման միջոց է աչքի ընկնում այս հնչյունախաղում։',
    options: [
      { id: 'opt_1', textEs: 'Paronomasia (palabras de sonido casi idéntico pero significado distinto)', textHy: 'Պարոնոմազիա (գրեթե նույնահունչ բառեր՝ տարբեր իմաստով)', isCorrect: true },
      { id: 'opt_2', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false },
      { id: 'opt_3', textEs: 'Metáfora pura', textHy: 'Զուտ փոխաբերություն', isCorrect: false },
      { id: 'opt_4', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ', isCorrect: false }
    ],
    explanationEs: '«Tanta», «tinta», «tonta» y «atonta» suenan casi igual con significados diferentes: es paronomasia.',
    explanationHy: '«Tanta», «tinta», «tonta» և «atonta» նմանահունչ բառեր են տարբեր իմաստներով՝ պարոնոմազիա է:'
  },
  {
    id: 'ex_fig_epana_1',
    topicId: 'tema_26_epanadiplosis',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'intermedio',
    promptEs: '«Silencio en la noche profunda, silencio». ¿Qué figura literaria encontramos en este verso?',
    promptHy: '«Silencio en la noche profunda, silencio»։ Ի՞նչ գեղարվեստական միջոց է այս տողում։',
    options: [
      { id: 'opt_1', textEs: 'Epanadiplosis (empieza y termina con la misma palabra)', textHy: 'Էպանադիպլոսիս (սկսվում և ավարտվում է նույն բառով)', isCorrect: true },
      { id: 'opt_2', textEs: 'Anáfora', textHy: 'Անաֆորա', isCorrect: false },
      { id: 'opt_3', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
      { id: 'opt_4', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false }
    ],
    explanationEs: 'El verso comienza con «Silencio» y concluye exactamente con «silencio»: es epanadiplosis.',
    explanationHy: 'Տողը սկսվում է «Silencio»-ով և ավարտվում «silencio»-ով. դա էպանադիպլոսիս է:'
  },
  {
    id: 'ex_fig_hip_1',
    topicId: 'tema_27_hiperbaton',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'intermedio',
    promptEs: '«De sus ojos copioso llanto vertía». ¿Qué figura literaria se aprecia en esta frase?',
    promptHy: '«De sus ojos copioso llanto vertía»։ Ի՞նչ պատկերավորման միջոց է նկատվում այս նախադասության մեջ։',
    options: [
      { id: 'opt_1', textEs: 'Hipérbaton (alteración del orden habitual)', textHy: 'Հիպերբատոն (սովորական շարադասության խախտում)', isCorrect: true },
      { id: 'opt_2', textEs: 'Polisíndeton', textHy: 'Բազմաշաղկապություն', isCorrect: false },
      { id: 'opt_3', textEs: 'Aliteración', textHy: 'Ալիտերացիա', isCorrect: false },
      { id: 'opt_4', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա', isCorrect: false }
    ],
    explanationEs: 'El orden lógico sería: «Vertía copioso llanto de sus ojos». Se ha alterado el orden habitual: es hipérbaton.',
    explanationHy: 'Սովորական շարադասությունը կլիներ՝ «Vertía copioso llanto de sus ojos». բառերի տեղերը փոխված են՝ հիպերբատոն է:'
  },
  {
    id: 'ex_fig_ana_1',
    topicId: 'tema_28_anafora',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'facil',
    promptEs: '«Por ti el agua corre clara,\npor ti el bosque canta alegre,\npor ti el viento sopla suave.»\n¿Qué figura literaria destaca?',
    promptHy: '«Por ti el agua corre clara,\npor ti el bosque canta alegre,\npor ti el viento sopla suave.»\nԻ՞նչ միջոց է աչքի ընկնում։',
    options: [
      { id: 'opt_1', textEs: 'Anáfora (repetición de «Por ti el» al inicio de cada verso)', textHy: 'Անաֆորա («Por ti el» բառերի կրկնությունը յուրաքանչյուր տողի սկզբում)', isCorrect: true },
      { id: 'opt_2', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս', isCorrect: false },
      { id: 'opt_3', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false },
      { id: 'opt_4', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա', isCorrect: false }
    ],
    explanationEs: '«Por ti el» se repite al comienzo de tres versos consecutivos: es una anáfora evidente.',
    explanationHy: '«Por ti el» կրկնվում է երեք տողերի սկզբում՝ ակնհայտ անաֆորա է:'
  },
  {
    id: 'ex_fig_asin_1',
    topicId: 'tema_29_asindeton',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'facil',
    promptEs: '«Llegó, saludó, se sentó, calló». ¿Qué figura literaria encontramos?',
    promptHy: '«Llegó, saludó, se sentó, calló»։ Ի՞նչ պատկերավորման միջոց է սա։',
    options: [
      { id: 'opt_1', textEs: 'Asíndeton (omisión de conjunciones)', textHy: 'Անշաղկապություն (Asíndeton - շաղկապների բացակայություն)', isCorrect: true },
      { id: 'opt_2', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն', isCorrect: false },
      { id: 'opt_3', textEs: 'Metáfora', textHy: 'Փոխաբերություն', isCorrect: false },
      { id: 'opt_4', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false }
    ],
    explanationEs: 'No hay ninguna conjunción «y» entre los verbos; solo comas que imprimen rapidez: es asíndeton.',
    explanationHy: 'Բայերի միջև չկա «y» շաղկապը, միայն ստորակետներ են, ինչը արագություն է հաղորդում՝ asíndeton է:'
  },
  {
    id: 'ex_fig_poli_1',
    topicId: 'tema_30_polisindeton',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'facil',
    promptEs: '«Y ríe y salta y corre y baila en el prado». ¿Qué figura literaria predomina?',
    promptHy: '«Y ríe y salta y corre y baila en el prado»։ Ի՞նչ պատկերավորման միջոց է գերակշռում։',
    options: [
      { id: 'opt_1', textEs: 'Polisíndeton (repetición continua de la conjunción «y»)', textHy: 'Բազմաշաղկապություն (Polisíndeton - «y» շաղկապի անընդհատ կրկնություն)', isCorrect: true },
      { id: 'opt_2', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false },
      { id: 'opt_3', textEs: 'Aliteración', textHy: 'Ալիտերացիա', isCorrect: false },
      { id: 'opt_4', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ', isCorrect: false }
    ],
    explanationEs: 'La repetición reiterada de la conjunción «y» ralentiza la frase y la dota de expresividad: es polisíndeton.',
    explanationHy: '«y» շաղկապի կրկնությունը դանդաղեցնում է խոսքը՝ polisíndeton է:'
  },
  {
    id: 'ex_fig_enum_1',
    topicId: 'tema_31_enumeracion',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'facil',
    promptEs: '«En la mesa había lápices, cuadernos, gomas, reglas y compases». ¿Qué figura es?',
    promptHy: '«En la mesa había lápices, cuadernos, gomas, reglas y compases»։ Ի՞նչ միջոց է։',
    options: [
      { id: 'opt_1', textEs: 'Enumeración (lista sucesiva de elementos)', textHy: 'Թվարկում (Enumeración - իրերի հաջորդական ցուցակ)', isCorrect: true },
      { id: 'opt_2', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
      { id: 'opt_3', textEs: 'Metáfora', textHy: 'Փոխաբերություն', isCorrect: false },
      { id: 'opt_4', textEs: 'Aliteración', textHy: 'Ալիտերացիա', isCorrect: false }
    ],
    explanationEs: 'Se presenta una serie continuada de objetos escolares: es una enumeración.',
    explanationHy: 'Դպրոցական պարագաների հաջորդական թվարկում է:'
  },
  {
    id: 'ex_fig_pleo_1',
    topicId: 'tema_32_pleonasmo',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'facil',
    promptEs: '«Te juro que lo vi con mis propios ojos». ¿Qué figura literaria se emplea para enfatizar?',
    promptHy: '«Երդվում եմ, որ տեսա իմ սեփական աչքերով»։ Ի՞նչ պատկերավորման միջոց է կիրառված շեշտելու համար։',
    options: [
      { id: 'opt_1', textEs: 'Pleonasmo (redundancia expresiva)', textHy: 'Պլեոնազմ (Pleonasmo - արտահայտիչ ավելաբանություն)', isCorrect: true },
      { id: 'opt_2', textEs: 'Metáfora', textHy: 'Փոխաբերություն', isCorrect: false },
      { id: 'opt_3', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false },
      { id: 'opt_4', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս', isCorrect: false }
    ],
    explanationEs: 'Añadir «con mis propios ojos» al verbo «ver» es una redundancia enfática: es un pleonasmo.',
    explanationHy: '«Տեսա իմ սեփական աչքերով» ավելաբանական շեշտադրում է՝ պլեոնազմ:'
  },
  {
    id: 'ex_fig_meta_1',
    topicId: 'tema_33_metafora',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'figura_detect',
    difficulty: 'intermedio',
    promptEs: '«La luna es una moneda de plata en el terciopelo negro de la noche». ¿Qué figura literaria es?',
    promptHy: '«Լուսինը արծաթե դրամ է գիշերվա սև թավշի վրա»։ Ի՞նչ պատկերավորման միջոց է սա։',
    options: [
      { id: 'opt_1', textEs: 'Metáfora (identifica luna con moneda de plata)', textHy: 'Փոխաբերություն (Metáfora - լուսինը նույնացնում է արծաթե դրամի հետ)', isCorrect: true },
      { id: 'opt_2', textEs: 'Comparación (símil)', textHy: 'Համեմատություն (símil)', isCorrect: false },
      { id: 'opt_3', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false },
      { id: 'opt_4', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա', isCorrect: false }
    ],
    explanationEs: 'Identifica directamente el elemento real (luna) con el imaginario (moneda) usando «es» sin ningún nexo comparativo como «como».',
    explanationHy: 'Ուղղակիորեն նույնացնում է իրականը (լուսին) երևակայականի (դրամ) հետ «es» բայով՝ առանց como-ի. դա փոխաբերություն է:'
  },

  // JUEGO 3: COMPLETA LA DEFINICIÓN
  {
    id: 'ex_fill_1',
    topicId: 'tema_28_anafora',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'fill_blank',
    difficulty: 'intermedio',
    promptEs: 'Completa la definición: «La anáfora es la repetición de una o más palabras al ________ de varios versos».',
    promptHy: 'Լրացրու սահմանումը. «Անաֆորան մեկ կամ մի քանի բառերի կրկնությունն է մի քանի տողերի ________»։',
    correctAnswerEs: 'principio',
    correctAnswerHy: 'սկզբում',
    acceptedAnswersEs: ['principio', 'comienzo', 'inicio'],
    explanationEs: 'La anáfora siempre se produce al PRINCIPIO o comienzo de versos o frases consecutivas.',
    explanationHy: 'Անաֆորան միշտ տեղի է ունենում տողերի ՍԿԶԲՈՒՄ (principio / comienzo):',
    ruleToRememberEs: 'Anáfora = principio de versos.',
    ruleToRememberHy: 'Անաֆորա = տողերի սկզբում:'
  },
  {
    id: 'ex_fill_2',
    topicId: 'tema_16_romance',
    moduleId: 'modulo_3',
    moduleNameEs: 'Módulo 3: El Romance',
    type: 'fill_blank',
    difficulty: 'intermedio',
    promptEs: 'Completa la definición: «Los versos de un romance tradicional tienen exactamente ________ sílabas métricas».',
    promptHy: 'Լրացրու սահմանումը. «Ավանդական ռոմանսի տողերն ունեն ճիշտ ________ վանկ»։',
    correctAnswerEs: 'ocho',
    correctAnswerHy: 'ութ',
    acceptedAnswersEs: ['ocho', '8', 'octosílabos'],
    explanationEs: 'Los romances clásicos están formados por versos octosílabos (8 sílabas).',
    explanationHy: 'Դասական ռոմանսները բաղկացած են ութավանկ (8 sílabas) տողերից:'
  },

  // JUEGO 6: ORDENA LAS PALABRAS (HIPÉRBATON A ORDEN HABITUAL)
  {
    id: 'ex_order_1',
    topicId: 'tema_27_hiperbaton',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'word_order',
    difficulty: 'intermedio',
    promptEs: 'Ordena las palabras para reconstruir la oración en su orden lógico habitual (Sujeto + Verbo + Complementos):',
    promptHy: 'Դասավորիր բառերը՝ վերականգնելու նախադասության տրամաբանական սովորական շարադասությունը (Ենթակա + Բայ + Լրացումներ)։',
    snippetEs: '«De verdes hojas se cubrió el árbol»',
    snippetHy: '«Կանաչ տերևներով ծածկվեց ծառը»',
    wordsScrambled: ['cubrió', 'El', 'árbol', 'se', 'hojas', 'verdes', 'de'],
    correctOrderedEs: 'El árbol se cubrió de verdes hojas',
    correctOrderedHy: 'Ծառը ծածկվեց կանաչ տերևներով',
    explanationEs: 'El orden lógico de la lengua española coloca primero el sujeto («El árbol»), luego el verbo («se cubrió») y finalmente el complemento («de verdes hojas»).',
    explanationHy: 'Իսպաներենի տրամաբանական կարգը դնում է ենթական (El árbol), ապա բայը (se cubrió), ապա լրացումը (de verdes hojas):',
    ruleToRememberEs: 'Sujeto + Verbo + Complementos = orden habitual.',
    ruleToRememberHy: 'Ենթակա + Բայ + Լրացումներ = սովորական շարադասություն:'
  },

  // JUEGO 7: ENCUENTRA EL ERROR
  {
    id: 'ex_err_1',
    topicId: 'tema_17_18_19_leyenda_mito_cuento',
    moduleId: 'modulo_3',
    moduleNameEs: 'Módulo 3: Narraciones Tradicionales',
    type: 'find_error',
    difficulty: 'intermedio',
    promptEs: 'Lee esta afirmación y señala la parte que contiene el ERROR:',
    promptHy: 'Կարդա այս պնդումը և գտիր այն հատվածը, որը պարունակում է ՍԽԱԼ։',
    snippetEs: '«La leyenda es un relato que siempre está protagonizado por dioses del Olimpo para explicar el origen del universo entero».',
    snippetHy: '«Լեգենդը պատմություն է, որտեղ միշտ գլխավոր հերոսները Օլիմպոսի աստվածներն են՝ բացատրելու ողջ տիեզերքի ծագումը»։',
    options: [
      { id: 'opt_err_1', textEs: 'Esa descripción corresponde en realidad al MITO, no a la leyenda.', textHy: 'Այդ նկարագրությունը իրականում վերաբերում է ԱՌԱՍՊԵԼԻՆ (Mito), ոչ թե լեգենդին:', isCorrect: true },
      { id: 'opt_err_2', textEs: 'La afirmación es totalmente correcta.', textHy: 'Պնդումը լիովին ճիշտ է:', isCorrect: false },
      { id: 'opt_err_3', textEs: 'El error es que el Olimpo no existió nunca en la mitología.', textHy: 'Սխալն այն է, որ Օլիմպոս գոյություն չի ունեցել:', isCorrect: false }
    ],
    explanationEs: 'Los relatos protagonizados por dioses para explicar el origen del universo son MITOS. Las leyendas tienen base histórica y lugar reconocible.',
    explanationHy: 'Աստվածներով և տիեզերքի ծագումը բացատրող պատմությունները ԱՌԱՍՊԵԼՆԵՐ ԵՆ (Mitos), ոչ թե լեգենդներ:'
  },

  // JUEGO 8: TRADUCE DEL ARMENIO AL ESPAÑOL (ՀԱՅԵՐԵՆԻՑ ԻՍՊԱՆԵՐԵՆ)
  {
    id: 'ex_hy_es_1',
    topicId: 'tema_33_metafora',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'armenian_to_spanish',
    difficulty: 'intermedio',
    promptEs: '¿Cómo se llama en español la figura literaria: «Փոխաբերություն»?',
    promptHy: 'Ինչպե՞ս է իսպաներեն կոչվում այս գեղարվեստական միջոցը՝ «Փոխաբերություն»։',
    options: [
      { id: 'opt_1', textEs: 'La metáfora', textHy: 'La metáfora', isCorrect: true },
      { id: 'opt_2', textEs: 'La aliteración', textHy: 'La aliteración', isCorrect: false },
      { id: 'opt_3', textEs: 'El hipérbaton', textHy: 'El hipérbaton', isCorrect: false },
      { id: 'opt_4', textEs: 'El asíndeton', textHy: 'El asíndeton', isCorrect: false }
    ],
    explanationEs: '«Փոխաբերություն» se traduce al español como «metáfora».',
    explanationHy: '«Փոխաբերություն» իսպաներեն թարգմանվում է «metáfora»:'
  },
  {
    id: 'ex_hy_es_2',
    topicId: 'tema_27_hiperbaton',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'armenian_to_spanish',
    difficulty: 'intermedio',
    promptEs: '¿Qué término español corresponde a «Շրջադասություն (բառերի սովորական կարգի խախտում)»?',
    promptHy: 'Իսպաներեն ո՞ր տերմինն է համապատասխանում «Շրջադասություն (բառերի սովորական կարգի խախտում)» հասկացությանը։',
    options: [
      { id: 'opt_1', textEs: 'El hipérbaton', textHy: 'El hipérbaton', isCorrect: true },
      { id: 'opt_2', textEs: 'El polisíndeton', textHy: 'El polisíndeton', isCorrect: false },
      { id: 'opt_3', textEs: 'La epanadiplosis', textHy: 'La epanadiplosis', isCorrect: false },
      { id: 'opt_4', textEs: 'La paronomasia', textHy: 'La paronomasia', isCorrect: false }
    ],
    explanationEs: '«Շրջադասություն» en la retórica española se denomina «hipérbaton».',
    explanationHy: '«Շրջադասություն» իսպաներեն կոչվում է «hipérbaton»:'
  },
  {
    id: 'ex_hy_es_3',
    topicId: 'tema_8_adverbio',
    moduleId: 'modulo_2',
    moduleNameEs: 'Módulo 2: Categorías Gramaticales',
    type: 'armenian_to_spanish',
    difficulty: 'facil',
    promptEs: '¿Cuál es la traducción al español de la categoría gramatical «Մակբայ»?',
    promptHy: 'Ո՞րն է «Մակբայ» քերականական կարգի (խոսքի մասի) իսպաներեն թարգմանությունը։',
    options: [
      { id: 'opt_1', textEs: 'El adverbio', textHy: 'El adverbio', isCorrect: true },
      { id: 'opt_2', textEs: 'El adjetivo', textHy: 'El adjetivo (ածական)', isCorrect: false },
      { id: 'opt_3', textEs: 'El sustantivo', textHy: 'El sustantivo (գոյական)', isCorrect: false },
      { id: 'opt_4', textEs: 'La preposición', textHy: 'La preposición (նախդիր)', isCorrect: false }
    ],
    explanationEs: '«Մակբայ» en gramática española es «el adverbio».',
    explanationHy: '«Մակբայ» իսպաներեն կոչվում է «el adverbio»:'
  },

  // JUEGO 9: ¿QUÉ SOY? (ADIVINANZA EN PRIMERA PERSONA)
  {
    id: 'ex_what_1',
    topicId: 'tema_26_epanadiplosis',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'what_am_i',
    difficulty: 'intermedio',
    promptEs: '«Soy una figura literaria como un bumerán: aparezco al principio de un verso y vuelvo a sonar idéntica justo al final del mismo verso. García Lorca me usó en "Verde que te quiero verde". ¿Quién soy?»',
    promptHy: '«Ես գեղարվեստական միջոց եմ ինչպես բումերանգ. հայտնվում եմ տողի սկզբում և նույնությամբ հնչում հենց նույն տողի վերջում։ Գարսիա Լորկան ինձ օգտագործել է "Verde que te quiero verde" տողում։ Ո՞վ եմ ես։»',
    options: [
      { id: 'opt_1', textEs: 'La epanadiplosis', textHy: 'Էպանադիպլոսիս (La epanadiplosis)', isCorrect: true },
      { id: 'opt_2', textEs: 'La anáfora', textHy: 'Անաֆորա', isCorrect: false },
      { id: 'opt_3', textEs: 'La aliteración', textHy: 'Ալիտերացիա', isCorrect: false },
      { id: 'opt_4', textEs: 'La onomatopeya', textHy: 'Օնոմատոպեա', isCorrect: false }
    ],
    explanationEs: 'La epanadiplosis repite la misma palabra al principio y al final del mismo enunciado o verso.',
    explanationHy: 'Էպանադիպլոսիսը կրկնում է նույն բառը նույն տողի սկզբում և վերջում:'
  },
  {
    id: 'ex_what_2',
    topicId: 'tema_29_asindeton',
    moduleId: 'modulo_5',
    moduleNameEs: 'Módulo 5: Figuras Literarias',
    type: 'what_am_i',
    difficulty: 'intermedio',
    promptEs: '«Odio las conjunciones. Cuando llego yo, borro todas las "y" de la frase y dejo solo comas para que las palabras vuelen como bólidos: "Llegué, vi, vencí". ¿Quién soy?»',
    promptHy: '«Ես ատում եմ շաղկապները։ Երբ ես գալիս եմ, ջնջում եմ բոլոր "y" (և) տառերը և թողնում միայն ստորակետներ, որպեսզի բառերը սլանան՝ "Llegué, vi, vencí"։ Ո՞վ եմ ես։»',
    options: [
      { id: 'opt_1', textEs: 'El asíndeton', textHy: 'Անշաղկապություն (El asíndeton)', isCorrect: true },
      { id: 'opt_2', textEs: 'El polisíndeton', textHy: 'Բազմաշաղկապություն', isCorrect: false },
      { id: 'opt_3', textEs: 'El pleonasmo', textHy: 'Պլեոնազմ', isCorrect: false },
      { id: 'opt_4', textEs: 'La metáfora', textHy: 'Փոխաբերություն', isCorrect: false }
    ],
    explanationEs: 'El asíndeton elimina conscientemente las conjunciones para dar rapidez y energía.',
    explanationHy: 'Ասինդետոնը գիտակցաբար վերացնում է շաղկապները արագություն հաղորդելու համար:'
  }
];
