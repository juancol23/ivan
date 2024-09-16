export interface Company {
  id: number;
  status: Status;
  solicitante: Solicitante;
  asignacion: Asignacion;
  requerimiento: string;
  cv: null | string;
  telefono: null | string;
  correo: Correo | null;
  dni: null | string;
  nombre: null | string;
  trabajo: Trabajo | null;
  disponibilidad: Disponibilidad | null;
  antecedentes: Antecedentes | null;
  trabajoHits: TrabajoHits | null;
  familiaresHits: FamiliaresHits | null;
  trabajoVinculado: null | string;
  pasoTrabajoVinculado: null | string;
  fuente: Correo | null;
  fechaNacimiento: null | string;
  todosTelefonos: null | string;
  puesto: null | string;
  empleador_: null | string;
  institucion_: null | string;
  carreras: null | string;
  grados: null | string;
  salario: null | string;
  espectativa: null | string;
  beneficio: Beneficio | null;
  puestoHits: PuestoHits | null;
  pregunta1: null | string;
  pregunta2: null | string;
  pregunta3: null | string;
  pregunta4: null | string;
  nombre_puesto: string;
  adjunto1: null;
  adjunto2: null;
  adjunto3: null;
  adjunto4: null;
  antecedentesA: AntecedentesA;
  antecedentesB: AntecedentesB;
  antecedentePolicial: AntecedentePolicial;
  antecedentePenal: AntecedentePenal;
  antecedenteJudicial: AntecedenteJudicial;
  certiAdulto: CertiAdulto;
  multiTest: MultiTest;
  informePsicologico: InformePsicologico;
  fichaDatos: FichaDatos;
  fichaMedica: FichaMedica;
  fichaRequerimiento: FichaRequerimiento;
  fichaAprobacion: null | string;
  otrosAdjuntos: OtrosAdjuntos;
  adjuntoBase: null | string;
  fechaSolicitud: FechaSolicitud | null;
  tecnologia: Tecnologia | null;
  seniority: Seniority | null;
  cliente: Cliente | null;
  prioridad: Prioridad | null;
  motivo: Motivo | null;
  proyectos: null;
  n_cv_enviados: null;
  fec_cancelacion: null;
  canditado_contratado: null;
  fec_envio_cv: null;
  fec_envio_canditato: null;
  fec_aceptacion: null;
  fec_ing_contratado: null;
  fec_ing_planilla: null;
  fuente_reclutamiento: null;
  cod_sap: null;
  base: Base | null;
  vmo: Vmo | null;
  obs_CANCELADOS: null;
}

export enum AntecedenteJudicial {
  AntecedenteJudicial = 'antecedenteJudicial',
}

export enum AntecedentePenal {
  AntecedentePenal = 'antecedentePenal',
}

export enum AntecedentePolicial {
  AntecedentePolicial = 'antecedentePolicial',
}

export enum Antecedentes {
  NoRegistra = 'no_registra',
}

export enum AntecedentesA {
  A = 'a',
}

export enum AntecedentesB {
  B = 'b',
}

export enum Asignacion {
  AdministradorRunaItCOM = 'administrador@runa-it.com',
  AsignacionBryanPinedaRunaItCOM = 'bryan.pineda@runa-it.com',
  BryanPinedaRunaItCOM = ' bryan.pineda@runa-it.com',
  IvanQuirozRunaItCOM = 'ivan.quiroz@runa-it.com',
  LeslyHuamanRunaItCOM = 'lesly.huaman@runa-it.com',
  RenatoNunezRunaItCOM = 'Renato.nunez@runa-it.com',
}

export enum Base {
  Muestrate = 'muestrate',
}

export enum Beneficio {
  BeneficioPlanillaCompleta = 'Planilla completa',
  Empty = '',
  FluffyPlanillaCompleta = 'Planilla completa ',
  PlanillaComplera = 'planilla complera',
  PlanillaCompleta = 'planilla completa',
  PurplePlanillaCompleta = 'planilla completa ',
}

export enum CertiAdulto {
  CertiAdulto = 'certiAdulto',
}

export enum Cliente {
  ClienteValue = 'cliente.value',
  Empty = '',
}

export enum Correo {
  CorreoLinkedin = 'Linkedin ',
  Empty = '',
  Linkdedin = 'Linkdedin',
  LinkedIn = 'LinkedIn',
  Linkedin = 'Linkedin',
  Linkedln = 'Linkedln',
  PurpleLinkedin = 'linkedin',
}

export enum Disponibilidad {
  Inmediata = 'inmediata',
  The15_Dias = '15_dias',
  The30_Dias = '30_dias',
}

export enum FamiliaresHits {
  No = 'No',
}

export enum FechaSolicitud {
  Empty = '',
  FechaSolicitudValue = 'fechaSolicitud.value',
}

export enum FichaDatos {
  FichaDatos = 'fichaDatos',
}

export enum FichaMedica {
  FichaMedica = 'fichaMedica',
}

export enum FichaRequerimiento {
  FichaRequerimiento = 'fichaRequerimiento',
}

export enum InformePsicologico {
  InformePsicologico = 'informePsicologico',
}

export enum Motivo {
  Empty = '',
  MotivoValue = 'motivo.value',
}

export enum MultiTest {
  MultiTest = 'multiTest',
}

export enum OtrosAdjuntos {
  OtrosAdjuntos = 'otrosAdjuntos',
}

export enum Prioridad {
  Empty = '',
  PrioridadValue = 'prioridad.value',
}

export enum PuestoHits {
  AnalistaFuncional = 'Analista Funcional',
  Empty = '',
}

export enum Seniority {
  Empty = '',
  SeniorityValue = 'seniority.value',
}

export enum Solicitante {
  Andrea = 'ANDREA ',
  BryanAbel = 'Bryan Abel',
  Empty = '',
  IvanKenny = 'Ivan Kenny',
  LeslyCorina = 'LESLY CORINA ',
  Rimac = 'Rimac',
  Sosoososo = 'sosoososo',
}

export enum Status {
  EnProceso = 'En Proceso',
}

export enum Tecnologia {
  Empty = '',
  TecnologiaValue = 'tecnologia.value',
}

export enum Trabajo {
  CreacionRequerimiento = 'creacion_requerimiento',
  EnPrescreening = 'en_prescreening',
  EnRevisionCv = 'en_revision_cv',
  NoAptoCvExpectativaSalarial = 'no_apto_cv_expectativa_salarial',
  NoAptoCvExperiencia = 'no_apto_cv_experiencia',
  NoAptoCvRequisitoPerfil = 'no_apto_cv_requisito_perfil',
  NoContactadoNoContesta = 'no_contactado_no_contesta',
  Seleccionado = 'seleccionado',
}

export enum TrabajoHits {
  No = 'no',
  Si = 'si',
}

export enum Vmo {
  Bcp = 'bcp',
  Empty = '',
  Facebook = 'FACEBOOK',
  GlobalHitss = 'Global Hitss',
  Google = 'GOOGLE',
  Ibk = 'IBK',
  Inkafarma = 'INKAFARMA',
}
