import type { MacroModulo } from '../domain/types';
import { moduloM1Fundamentos } from './modules/m1-fundamentos';
import { moduloM2Catalogacao } from './modules/m2-catalogacao';
import { moduloM3Classificacao } from './modules/m3-classificacao';
import { moduloM4Recuperacao } from './modules/m4-recuperacao';
import { moduloM5Gestao } from './modules/m5-gestao';
import { moduloM6DigitalIA } from './modules/m6-digital-ia';
import { moduloM7Preservacao } from './modules/m7-preservacao';
import { moduloM8Normalizacao } from './modules/m8-normalizacao';
import { moduloM9Comunicacao } from './modules/m9-comunicacao';
import { moduloM10Legislativo } from './modules/m10-legislativo';
import { moduloM11RaciocinioLogico } from './modules/m11-raciocinio-logico';
import { moduloM12Ingles } from './modules/m12-ingles';

export const TRILHA_ESPECIFICOS: MacroModulo[] = [
  moduloM1Fundamentos,
  moduloM2Catalogacao,
  moduloM3Classificacao,
  moduloM4Recuperacao,
  moduloM5Gestao,
  moduloM6DigitalIA,
  moduloM7Preservacao,
  moduloM8Normalizacao,
  moduloM9Comunicacao,
  moduloM10Legislativo,
];

export const TRILHA_COMPLEMENTAR: MacroModulo[] = [
  moduloM11RaciocinioLogico,
  moduloM12Ingles,
];

export const COURSE_REGISTRY: MacroModulo[] = [
  ...TRILHA_ESPECIFICOS,
  ...TRILHA_COMPLEMENTAR,
];

export {
  moduloM1Fundamentos,
  moduloM2Catalogacao,
  moduloM3Classificacao,
  moduloM4Recuperacao,
  moduloM5Gestao,
  moduloM6DigitalIA,
  moduloM7Preservacao,
  moduloM8Normalizacao,
  moduloM9Comunicacao,
  moduloM10Legislativo,
  moduloM11RaciocinioLogico,
  moduloM12Ingles,
};
