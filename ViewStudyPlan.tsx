import React from 'react';
import { Calendar, CheckCircle2, Circle, ArrowRight, BookOpen, Dumbbell, Award } from 'lucide-react';
import { BilingualText } from './BilingualText';

interface ViewStudyPlanProps {
  completedDays: number[];
  onToggleDayCompleted: (dayNumber: number) => void;
  onGoToTopic: (topicId: string) => void;
  onGoToPractice: () => void;
  onGoToExam: () => void;
}

export const ViewStudyPlan: React.FC<ViewStudyPlanProps> = ({
  completedDays,
  onToggleDayCompleted,
  onGoToTopic,
  onGoToPractice,
  onGoToExam,
}) => {
  const days = [
    {
      day: 1,
      titleEs: 'Día 1: La comunicación, funciones del lenguaje y modalidades',
      titleHy: 'Օր 1. Հաղորդակցություն, լեզվի գործառույթներ և նախադասության տեսակներ',
      topics: ['tema_1_comunicacion', 'tema_2_funciones_lenguaje', 'tema_3_modalidades_oracionales'],
      descEs: 'Aprende los 6 elementos de la comunicación, las 6 funciones del lenguaje y a distinguir desiderativas de dubitativas.',
      descHy: 'Սովորիր հաղորդակցության 6 տարրերը, լեզվի 6 ֆունկցիաները և նախադասության եղանակները:',
      steps: ['Teoría de los 3 temas', '5 preguntas de control', 'Práctica de modalidades oracionales', 'Mini-test de 10 preguntas'],
    },
    {
      day: 2,
      titleEs: 'Día 2: Categorías gramaticales — Parte I',
      titleHy: 'Օր 2. Քերականական կարգեր — Մաս I (գոյական, դերանուն, ածական)',
      topics: ['tema_4_sustantivo', 'tema_5_pronombre', 'tema_6_adjetivo'],
      descEs: 'Domina las diferencias entre sustantivos propios y comunes, abstractos y concretos, y distingue pronombre de determinante.',
      descHy: 'Տիրապետիր գոյականների, ածականների և դերանունների տարբերություններին:',
      steps: ['Sustantivos propios y comunes', 'Diferencia pronombre vs determinante', 'Concordancia del adjetivo'],
    },
    {
      day: 3,
      titleEs: 'Día 3: Categorías gramaticales — Parte II y Enlaces',
      titleHy: 'Օր 3. Քերականական կարգեր — Մաս II (բայ, մակբայ, նախդիրներ, շաղկապներ)',
      topics: ['tema_7_verbo', 'tema_8_adverbio', 'tema_9_10_determinante_articulo', 'tema_11_12_13_preposicion_conjuncion_interjeccion'],
      descEs: 'Aprende la lista completa de las 19 preposiciones, los verbos en formas no personales y los adverbios invariables.',
      descHy: 'Սովորիր 19 նախդիրների ցանկը, բայի անդեմ ձևերը և անփոփոխ մակբայները:',
      steps: ['Lista fija de preposiciones', 'Adverbio invariable vs adjetivo', 'Análisis palabra a palabra'],
    },
    {
      day: 4,
      titleEs: 'Día 4: Literatura tradicional, Romance, Leyenda, Mito y Cuento',
      titleHy: 'Օր 4. Ժողովրդական գրականություն, ռոմանս, լեգենդ, միֆ և հեքիաթ',
      topics: ['tema_14_15_literatura_popular_culta', 'tema_16_romance', 'tema_17_18_19_leyenda_mito_cuento'],
      descEs: 'Compara literatura popular y culta, analiza la métrica del romance (versos octosílabos) y distingue mitos de leyendas.',
      descHy: 'Համեմատիր ժողովրդական և հեղինակային գրականությունը, ռոմանսի 8-ավանկ չափը, առասպելն ու լեգենդը:',
      steps: ['Métrica del romance', 'Diferencia mito vs leyenda', 'Lectura de textos tradicionales'],
    },
    {
      day: 5,
      titleEs: 'Día 5: Lenguaje literario, Prosa, Verso y Figuras fónicas',
      titleHy: 'Օր 5. Գեղարվեստական լեզու, արձակ, չափածո և հնչյունային պատկերավորում',
      topics: ['tema_20_21_22_lenguaje_prosa_verso', 'tema_23_aliteracion', 'tema_24_onomatopeya', 'tema_25_paronomasia', 'tema_26_epanadiplosis'],
      descEs: 'Aprende a diferenciar prosa de verso, rima consonante y asonante, y domina aliteración, onomatopeya, paronomasia y epanadiplosis.',
      descHy: 'Տարբերիր արձակն ու չափածոն, կոնսոնանս և ասոնանս հանգերը, ալիտերացիան, բնաձայնությունը, պարոնոմազիան և էպանադիպլոսիսը:',
      steps: ['Prosa vs verso', 'Aliteración vs Onomatopeya', 'Epanadiplosis en Lorca'],
    },
    {
      day: 6,
      titleEs: 'Día 6: Figuras morfosintácticas y semánticas',
      titleHy: 'Օր 6. Շարահյուսական և իմաստային պատկերավորման միջոցներ',
      topics: ['tema_27_hiperbaton', 'tema_28_anafora', 'tema_29_asindeton', 'tema_30_polisindeton', 'tema_31_enumeracion', 'tema_32_pleonasmo', 'tema_33_metafora'],
      descEs: '¡El módulo más importante para el examen! Domina hipérbaton, anáfora, asíndeton vs polisíndeton, pleonasmo y metáfora vs comparación.',
      descHy: 'Քննության ամենակարևոր մասը՝ հիպերբատոն, անաֆորա, անշաղկապություն, պոլիսինդետոն, պլեոնազմ և փոխաբերություն:',
      steps: ['Asíndeton vs Polisíndeton', 'Metáfora vs Comparación', 'Práctica de detective literario'],
    },
    {
      day: 7,
      titleEs: 'Día 7: Repaso general y simulacro completo',
      titleHy: 'Օր 7. Ընդհանուր կրկնություն և ամբողջական քննության սիմուլյացիա',
      topics: ['tema_1_comunicacion', 'tema_4_sustantivo', 'tema_16_romance', 'tema_33_metafora'],
      descEs: 'Repasa tus errores acumulados, entrena las preguntas orales del profesor y realiza el examen completo de 40 preguntas.',
      descHy: 'Կրկնիր սխալները, մարզիր ուսուցչի բանավոր հարցերը և հանձնիր 40 հարցանոց մեծ քննությունը:',
      steps: ['Repaso de errores', 'Entrenamiento oral con el profesor', 'Simulacro intensivo de examen'],
    },
  ];

  const completedCount = completedDays.length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider font-bold text-red-800">
            Itinerario Guiado de Estudio
          </div>
          <h1 className="text-2xl font-extrabold text-stone-900 mt-1">
            Mi Plan para Aprobar en 7 Sesiones
          </h1>
          <p className="text-xs text-stone-600 mt-1 max-w-lg">
            Sigue este orden estructurado paso a paso. Puedes avanzar a tu propio ritmo completando varias sesiones en un solo día si lo deseas.
          </p>
        </div>

        <div className="text-right sm:border-l sm:border-stone-100 sm:pl-6 shrink-0">
          <div className="text-xs text-stone-500">Progreso del plan</div>
          <div className="text-2xl font-black text-stone-900 tabular-nums">
            {completedCount} / 7 <span className="text-sm font-normal text-stone-500">días</span>
          </div>
          <div className="w-28 bg-stone-100 rounded-full h-2 mt-1.5 overflow-hidden">
            <div
              className="bg-red-800 h-full transition-all duration-300"
              style={{ width: `${(completedCount / 7) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Days List */}
      <div className="space-y-4">
        {days.map((d) => {
          const isCompleted = completedDays.includes(d.day);
          return (
            <div
              key={d.day}
              className={`p-6 rounded-2xl border transition-all ${
                isCompleted
                  ? 'bg-emerald-50/40 border-emerald-300 shadow-2xs'
                  : 'bg-white border-stone-200 hover:border-amber-300 shadow-xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => onToggleDayCompleted(d.day)}
                    className="mt-0.5 text-stone-400 hover:text-emerald-700 transition-colors shrink-0"
                    title={isCompleted ? 'Marcar como pendiente' : 'Marcar como completado'}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-stone-300 hover:text-stone-400" />
                    )}
                  </button>

                  <div className="space-y-1">
                    <h2 className="text-base font-bold text-stone-900">
                      <BilingualText es={d.titleEs} hy={d.titleHy} size="base" bold />
                    </h2>
                    <div className="text-xs text-stone-600 pt-1 leading-relaxed">
                      <BilingualText es={d.descEs} hy={d.descHy} size="xs" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0 pt-2 sm:pt-0">
                  <button
                    onClick={() => onGoToTopic(d.topics[0])}
                    className="px-3 py-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs font-medium flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-red-800" />
                    <span>Teoría</span>
                  </button>
                  <button
                    onClick={d.day === 7 ? onGoToExam : onGoToPractice}
                    className="px-3 py-1.5 rounded-lg bg-red-800 hover:bg-red-900 text-white text-xs font-bold flex items-center gap-1"
                  >
                    {d.day === 7 ? (
                      <>
                        <Award className="w-3.5 h-3.5 text-amber-300" />
                        <span>Simulacro</span>
                      </>
                    ) : (
                      <>
                        <Dumbbell className="w-3.5 h-3.5 text-amber-300" />
                        <span>Práctica</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Steps inside the day */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-2 text-xs">
                {d.steps.map((st, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-stone-100 text-stone-700 font-medium text-[11px]"
                  >
                    ✓ {st}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
