import { Schema, Document } from 'mongoose';
import { IFunctionalIndependencyMetric } from "../features/functionalIndependencyMetrics/types/functionalIndependecyMetrics";
import { ImodifiedChecklistForAutismInToddlers } from 'src/features/modifiedChecklistForAutismInToddlers/types/modifiedChecklistForAutismInToddlers';

export const modifiedChecklistForAutismInToddler = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  date: { type: String, required: true },
  patient: { type: Schema.Types.ObjectId, ref: "User" },
  symptoms: {
    Area: {
      interpersonal_relationship: { type: Number, required: true, default: 0 },
      imitation: { type: Number, required: true, default: 0 },
      emotional_response: { type: Number, required: true, default: 0 },
      body_expression:{ type: Number, required: true, default: 0 },
      use_object: { type: Number, required: true, default: 0 },
      adaptation_to_changes: { type: Number, required: true, default: 0 },
      use_of_gaze: { type: Number, required: true, default: 0 },
      use_of_hearing: { type: Number, required: true, default: 0 },
      use_of_taste_smell_and_touch: { type: Number, required: true, default: 0 },
      fear_and_nervousness: { type: Number, required: true, default: 0 },
      verbal_communication: { type: Number, required: true, default: 0 },
      nonverbal_communication: { type: Number, required: true, default: 0},
      activity: { type: Number, required: true, default: 0 },
      degree_and_consistency_of_intelligence_responses: { type: Number, required: true, default: 0 },
      general_impression: { type: Number, required: true, default: 0 },
    },
  }
});

export interface ImodifiedChecklistForAutismInToddlersEntity extends Omit<ImodifiedChecklistForAutismInToddlers, '_id'>, Document { }