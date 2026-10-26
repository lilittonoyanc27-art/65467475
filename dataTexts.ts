import { ReadingText } from './types';

export const readingTexts: ReadingText[] = [
  {
    id: 'text_leyenda_castillo',
    titleEs: 'La Leyenda del Halcón Blanco de Toledo',
    titleHy: 'Տոլեդոյի Սպիտակ Բազեի Լեգենդը',
    category: 'leyenda',
    categoryLabelEs: 'Leyenda tradicional',
    categoryLabelHy: 'Ավանդական լեգենդ',
    isVerse: false,
    isPopular: true,
    contentEs: `Cuentan los ancianos de Toledo que, en las noches de luna llena, sobre la torre más alta del Alcázar aparece la silueta inmóvil de un halcón blanco.

Hacía muchos siglos, durante el asedio a la ciudad amurallada, un joven escudero llamado Rodrigo defendía sin descanso la puerta oriental. Cuando el agua escaseaba y las fuerzas flaqueaban, un halcón de plumas como la nieve cruzaba veloz las flechas enemigas trayendo mensajes de esperanza desde el valle. Una tarde oscura, una saeta enemiga atravesó el pecho del ave. Rodrigo, con el corazón roto, cayó defendiendo el estandarte.

Desde aquel día, los toledanos aseguran que el halcón no murió; se transformó en piedra vigilante. Y cuando la niebla del río Tajo sube por las colinas empedradas, se escucha un grito agudo que avisa a los centinelas si algún peligro acecha a la antigua ciudad imperial.`,
    contentHy: `Տոլեդոյի ծերերն ասում են, որ լիալուսնի գիշերներին Ալկասարի ամենաբարձր աշտարակի վրա հայտնվում է սպիտակ բազեի անշարժ ուրվագիծը։

Շատ դարեր առաջ, երբ պարսպապատ քաղաքը պաշարված էր, Ռոդրիգո անունով մի երիտասարդ զինակիր անդադար պաշտպանում էր արևելյան դարպասը։ Երբ ջուրը սպառվում էր, ձյան պես փետուրներով մի բազե արագորեն ճեղքում էր թշնամու նետերը՝ հովտից հույսի լուրեր բերելով։ Մի մութ երեկո թշնամու նետը խոցեց թռչնի կուրծքը։ Ռոդրիգոն, կոտրված սրտով, ընկավ դրոշը պաշտպանելիս։

Այդ օրվանից Տոլեդոյի բնակիչները վստահեցնում են, որ բազեն չի մահացել. նա վերածվել է հսկող քարի։ Եվ երբ Տախո գետի մառախուղը բարձրանում է սալահատակ բլուրներով, լսվում է սուր ճիչ, որը զգուշացնում է պահակներին, եթե վտանգ է սպառնում հին կայսերական քաղաքին։`,
    notesEs: 'Texto en prosa narrativo que combina un marco histórico reconocible (Toledo, asedio, Alcázar) con un prodigio sobrenatural.',
    notesHy: 'Պատմողական արձակ տեքստ, որը միավորում է ճանաչելի պատմական վայրը (Տոլեդո) գերբնական հրաշքի հետ:',
    questions: [
      {
        id: 'tq_1',
        questionEs: '¿Por qué este texto es una LEYENDA y no un mito?',
        questionHy: 'Ինչո՞ւ է այս տեքստը ԼԵԳԵՆԴ և ոչ թե առասպել:',
        options: [
          { id: 'tq1_a', textEs: 'Porque se sitúa en un lugar real reconocible (Toledo) y combina historia con elementos fantásticos', textHy: 'Քանի որ տեղի է ունենում իրական ճանաչելի վայրում (Տոլեդո) և միավորում է պատմությունը ֆանտաստիկայի հետ', isCorrect: true },
          { id: 'tq1_b', textEs: 'Porque está protagonizado por los dioses del Olimpo', textHy: 'Որովհետև գլխավոր հերոսները Օլիմպոսի աստվածներն են', isCorrect: false },
          { id: 'tq1_c', textEs: 'Porque está escrito en versos octosílabos', textHy: 'Որովհետև գրված է 8-ավանկ տողերով', isCorrect: false },
          { id: 'tq1_d', textEs: 'Porque es una obra de literatura culta con autor firmado', textHy: 'Որովհետև ստորագրված հեղինակով գործ է', isCorrect: false }
        ],
        explanationEs: 'Tiene marco geográfico e histórico reconocible (Toledo medieval) mezclado con leyenda popular.',
        explanationHy: 'Ունի իրական պատմաաշխարհագրական միջավայր (միջնադարյան Տոլեդո)՝ միահյուսված ժողովրդական ֆանտաստիկայի հետ:'
      },
      {
        id: 'tq_2',
        questionEs: '¿Cómo está escrito formalmente este texto?',
        questionHy: 'Ինչպիսի՞ կառուցվածքով է գրված այս տեքստը:',
        options: [
          { id: 'tq2_a', textEs: 'En prosa, distribuido en oraciones y párrafos', textHy: 'Արձակ (En prosa), բաժանված նախադասությունների և պարբերությունների', isCorrect: true },
          { id: 'tq2_b', textEs: 'En verso con rima consonante', textHy: 'Չափածո՝ կոնսոնանս հանգով', isCorrect: false },
          { id: 'tq2_c', textEs: 'En estrofas de cuatro versos', textHy: 'Չորս տողանի տներով', isCorrect: false }
        ],
        explanationEs: 'Ocupa todo el renglón y se organiza en párrafos continuos: es prosa.',
        explanationHy: 'Զբաղեցնում է ամբողջ տողը և կազմված է պարբերություններից՝ արձակ է:'
      },
      {
        id: 'tq_3',
        questionEs: 'En la frase «un halcón de plumas como la nieve», ¿qué figura literaria se usa?',
        questionHy: '«un halcón de plumas como la nieve» արտահայտության մեջ ի՞նչ գեղարվեստական միջոց է կիրառված:',
        options: [
          { id: 'tq3_a', textEs: 'Comparación o símil (usa el nexo «como»)', textHy: 'Համեմատություն (Comparación / símil - օգտագործում է «como» շաղկապը)', isCorrect: true },
          { id: 'tq3_b', textEs: 'Metáfora pura', textHy: 'Զուտ փոխաբերություն', isCorrect: false },
          { id: 'tq3_c', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն', isCorrect: false },
          { id: 'tq3_d', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն', isCorrect: false }
        ],
        explanationEs: 'Al llevar el nexo comparativo explícito «como», se trata de una COMPARACIÓN.',
        explanationHy: '«Como» (ինչպես) բառի առկայության պատճառով սա ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ է:'
      },
      {
        id: 'tq_4',
        questionEs: '¿Qué categoría gramatical tiene la palabra «inmóvil» en «la silueta inmóvil»?',
        questionHy: 'Ի՞նչ խոսքի մաս է «inmóvil» (անշարժ) բառը «la silueta inmóvil» արտահայտության մեջ:',
        options: [
          { id: 'tq4_a', textEs: 'Adjetivo calificativo', textHy: 'Որակական ածական (Adjetivo calificativo)', isCorrect: true },
          { id: 'tq4_b', textEs: 'Sustantivo común', textHy: 'Հասարակ գոյական', isCorrect: false },
          { id: 'tq4_c', textEs: 'Adverbio de lugar', textHy: 'Տեղի մակբայ', isCorrect: false },
          { id: 'tq4_d', textEs: 'Verbo en participio', textHy: 'Բայ', isCorrect: false }
        ],
        explanationEs: 'Modifica y cualifica al sustantivo «silueta», por tanto es un adjetivo.',
        explanationHy: 'Որակում է «silueta» գոյականին, ուստի ածական է:'
      }
    ]
  },
  {
    id: 'text_romance_prisionero',
    titleEs: 'Romance del prisionero (Anónimo)',
    titleHy: 'Բանտարկյալի ռոմանսը (Անանուն)',
    category: 'romance',
    categoryLabelEs: 'Romance tradicional',
    categoryLabelHy: 'Ավանդական ռոմանս',
    isVerse: true,
    isPopular: true,
    contentEs: `Que por mayo era, por mayo,
cuando hace la calor,
cuando los trigos encañan
y están los campos en flor,
cuando canta la calandria
y responde el ruiseñor,
cuando los enamorados
van a servir al amor;
sino yo, triste, cuitado,
que vivo en esta prisión;
que ni sé cuándo es de día
ni cuándo las noches son,
sino por una avecilla
que me cantaba al albor.
Matómela un ballestero;
déle Dios mal galardón.`,
    contentHy: `Մայիս ամիսն էր, մայիսը,
երբ տաքությունն է տիրում,
երբ ցորենն է հասկակալում,
ու դաշտերն են ծաղկում,
երբ դաշտային արտույտն է երգում,
ու սոխակն է պատասխանում,
երբ սիրահարները
գնում են սիրուն ծառայելու.
բացի ինձնից՝ տխուր, տանջված,
որ ապրում եմ այս բանտում.
որ չգիտեմ էլ՝ երբ է ցերեկ,
կամ երբ են գիշերները գալիս,
եթե չլիներ մի փոքրիկ թռչնակ,
որ երգում էր ինձ լուսաբացին։
Մի աղեղնավոր սպանեց նրան.
Աստված նրան չար հատուցում տա։`,
    notesEs: 'Uno de los romances más célebres de la lírica tradicional española. Versos octosílabos con rima asonante en versos pares.',
    notesHy: 'Իսպանական ավանդական քնարերգության ամենահայտնի ռոմանսներից մեկը: 8-ավանկ տողեր զույգ տողերի ասոնանս հանգով:',
    questions: [
      {
        id: 'tq_rom_1',
        questionEs: '¿Cuántas sílabas métricas tienen los versos de este poema?',
        questionHy: 'Քանի՞ վանկ ունեն այս բանաստեղծության տողերը:',
        options: [
          { id: 'tqr1_a', textEs: '8 sílabas (versos octosílabos)', textHy: '8 վանկ (versos octosílabos)', isCorrect: true },
          { id: 'tqr1_b', textEs: '11 sílabas (endecasílabos)', textHy: '11 վանկ', isCorrect: false },
          { id: 'tqr1_c', textEs: '14 sílabas (alejandrinos)', textHy: '14 վանկ', isCorrect: false }
        ],
        explanationEs: 'Los romances tradicionales están compuestos exclusivamente por versos octosílabos.',
        explanationHy: 'Ավանդական ռոմանսները բաղկացած են ութավանկ (8 վանկ) տողերից:'
      },
      {
        id: 'tq_rom_2',
        questionEs: 'En los versos «cuando canta la calandria / y responde el ruiseñor / cuando los enamorados...», ¿qué figura literaria morfosintáctica se observa?',
        questionHy: '«cuando canta... / cuando los enamorados...» տողերում «cuando» բառի կրկնությամբ ի՞նչ միջոց է դրսևորվում:',
        options: [
          { id: 'tqr2_a', textEs: 'Anáfora (repetición de «cuando» al inicio de varios versos)', textHy: 'Անաֆորա (տողերի սկզբում «cuando» բառի կրկնություն)', isCorrect: true },
          { id: 'tqr2_b', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս', isCorrect: false },
          { id: 'tqr2_c', textEs: 'Asíndeton', textHy: 'Անշաղկապություն', isCorrect: false },
          { id: 'tqr2_d', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա', isCorrect: false }
        ],
        explanationEs: 'La repetición anafórica de «cuando» al inicio de versos sucesivos crea el ritmo cadencioso del romance.',
        explanationHy: '«Cuando» բառի կրկնությունը տողերի սկզբում անաֆորա է:'
      },
      {
        id: 'tq_rom_3',
        questionEs: 'El verso «Que por mayo era, por mayo» contiene la figura literaria de...',
        questionHy: '«Que por mayo era, por mayo» տողը պարունակում է...',
        options: [
          { id: 'tqr3_a', textEs: 'Epanadiplosis o repetición expresiva en el mismo verso', textHy: 'Էպանադիպլոսիս կամ արտահայտիչ կրկնություն նույն տողում', isCorrect: true },
          { id: 'tqr3_b', textEs: 'Hipérbaton extremo', textHy: 'Ծայրահեղ հիպերբատոն', isCorrect: false },
          { id: 'tqr3_c', textEs: 'Metáfora pura', textHy: 'Զուտ փոխաբերություն', isCorrect: false }
        ],
        explanationEs: 'Repite la expresión «por mayo» al principio y al final del enunciado rítmico.',
        explanationHy: 'Կրկնում է «por mayo» արտահայտությունը նույն տողում:'
      }
    ]
  }
];
