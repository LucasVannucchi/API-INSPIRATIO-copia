export interface IFunctionalIndependencyMetric {
  selfCare: ISelfCare
  esfincteresControl: IEsfincteresControl
  mobility: IMobility
  locomotion: ILocomotion
  comunication: IComunication
  socialKnowledge: ISocialKnowledge
}

export interface ISelfCare {
  food: IMetrics
  personalHygiene: IMetrics
  bath: IMetrics
  upperBodyDress: IMetrics
  bottomBodyDress: IMetrics
  toiletUse: IMetrics
}

export interface IEsfincteresControl {
  urineControl: IMetrics
  fecesControl: IMetrics
}

export interface IMobility {
  badChairAndQheelChair: IMetrics
  toilet: IMetrics
  bathOrShower: IMetrics
}

export interface ILocomotion {
  wheelchairWalking: IMetrics
  chairs: IMetrics
}

export interface IComunication {
  compreention: IMetrics
  expression: IMetrics
}

export interface ISocialKnowledge {
  socialInteraction: IMetrics
  problemsResolution: IMetrics
  memory: IMetrics
}

export interface IMetrics {
  independency: number
  completeDependency: number
  modifiedDependency: number
}