import { Schema, Document } from 'mongoose';
import { IFunctionalIndependencyMetric } from "../features/functionalIndependencyMetrics/types/functionalIndependecyMetrics";

export const FunctionalIndependencyMetricsSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  date: { type: String, required: true },
  patient: { type: Schema.Types.ObjectId, ref: "User" },
  selfCare: {
    food: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    personalHygiene: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    bath: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    upperBodyDress: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    bottomBodyDress: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    toiletUse: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    }
  },
  esfincteresControl: {
    urineControl: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    fecesControl: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    }
  },
  mobility: {
    badChairAndQheelChair: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    toilet: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    bathOrShower: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    }
  },
  locomotion: {
    wheelchairWalking: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    chairs: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    }
  },
  comunication: {
    compreention: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    expression: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    }
  },
  socialKnowledge: {
    socialInteraction: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    problemsResolution: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    },
    memory: {
      independency: { type: Number, required: true, default: 0 },
      completeDependency: { type: Number, required: true, default: 0 },
      modifiedDependency: { type: Number, required: true, default: 0 }
    }
  }
});

export interface IFunctionalIndependencyMetricsEntity extends Omit<IFunctionalIndependencyMetric, '_id'>, Document { }