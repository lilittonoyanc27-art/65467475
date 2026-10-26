import { TopicConcept, ComparisonPair } from './types';
import { module1Topics } from './dataTopicsModule1';
import { module2Topics } from './dataTopicsModule2';
import { module3Topics } from './dataTopicsModule3';
import { module4Topics, module5Topics, comparisonPairsData } from './dataTopicsModule45';

export const allTopics: TopicConcept[] = [
  ...module1Topics,
  ...module2Topics,
  ...module3Topics,
  ...module4Topics,
  ...module5Topics
];

export const allComparisonPairs: ComparisonPair[] = comparisonPairsData;

export function getTopicById(id: string): TopicConcept | undefined {
  return allTopics.find(t => t.id === id);
}

export function getTopicsByModule(moduleId: string): TopicConcept[] {
  return allTopics.filter(t => t.moduleId === moduleId);
}

export const moduleList = [
  { id: 'modulo_1', titleEs: 'Módulo 1: La Comunicación y Funciones del Lenguaje', titleHy: 'Մոդուլ 1. Հաղորդակցություն և լեզվի գործառույթներ' },
  { id: 'modulo_2', titleEs: 'Módulo 2: Las Categorías Gramaticales', titleHy: 'Մոդուլ 2. Քերականական կարգեր' },
  { id: 'modulo_3', titleEs: 'Módulo 3: Literatura Popular, Romance, Leyenda, Mito', titleHy: 'Մոդուլ 3. Ժողովրդական գրականություն, ռոմանս, լեգենդ, միֆ' },
  { id: 'modulo_4', titleEs: 'Módulo 4: El Lenguaje Literario, Prosa y Verso', titleHy: 'Մոդուլ 4. Գեղարվեստական լեզու, արձակ և չափածո' },
  { id: 'modulo_5', titleEs: 'Módulo 5: Las Figuras Literarias', titleHy: 'Մոդուլ 5. Գեղարվեստական պատկերավորման միջոցներ' },
];
