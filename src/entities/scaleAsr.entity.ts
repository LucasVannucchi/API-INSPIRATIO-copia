import { Schema, Document } from 'mongoose';
import { IscaleASRS } from 'src/features/scaleASRS/Types/scaleASRS';

export const scaleASRS = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  dateApplication: { type: Number, required: true },
  patient: { type: Schema.Types.ObjectId, ref: "User" },
  questionsReports: {
    questionOne: {
        Never: { type: Number, required: true, default: 0 },
        Rarely: { type: Number, required: true, default: 0 },
        Sometimes: { type: Number, required: true, default: 0 },
        frequently: { type: Number, required: true, default: 0 },
        VeryOften: { type: Number, required: true, default: 0 }
      },
  questionTwo: {
        Never: { type: Number, required: true, default: 0 },
        Rarely: { type: Number, required: true, default: 0 },
        Sometimes: { type: Number, required: true, default: 0 },
        frequently: { type: Number, required: true, default: 0 },
        VeryOften: { type: Number, required: true, default: 0 }
      },
  questionThree: {
        Never: { type: Number, required: true, default: 0 },
        Rarely: { type: Number, required: true, default: 0 },
        Sometimes: { type: Number, required: true, default: 0 },
        frequently: { type: Number, required: true, default: 0 },
        VeryOften: { type: Number, required: true, default: 0 }
      },
  questionFour: {
        Never: { type: Number, required: true, default: 0 },
        Rarely: { type: Number, required: true, default: 0 },
        Sometimes: { type: Number, required: true, default: 0 },
        frequently: { type: Number, required: true, default: 0 },
        VeryOften: { type: Number, required: true, default: 0 }
      },
  questionFive: {
        Never: { type: Number, required: true, default: 0 },
        Rarely: { type: Number, required: true, default: 0 },
        Sometimes: { type: Number, required: true, default: 0 },
        frequently: { type: Number, required: true, default: 0 },
        VeryOften: { type: Number, required: true, default: 0 }
      },
  questionSix: {
        Never: { type: Number, required: true, default: 0 },
        Rarely: { type: Number, required: true, default: 0 },
        Sometimes: { type: Number, required: true, default: 0 },
        frequently: { type: Number, required: true, default: 0 },
        VeryOften: { type: Number, required: true, default: 0 }
      },
  questionSeven: {
        Never: { type: Number, required: true, default: 0 },
        Rarely: { type: Number, required: true, default: 0 },
        Sometimes: { type: Number, required: true, default: 0 },
        frequently: { type: Number, required: true, default: 0 },
        VeryOften: { type: Number, required: true, default: 0 }
      },
  questionEight: {
        Never: { type: Number, required: true, default: 0 },
        Rarely: { type: Number, required: true, default: 0 },
        Sometimes: { type: Number, required: true, default: 0 },
        frequently: { type: Number, required: true, default: 0 },
        VeryOften: { type: Number, required: true, default: 0 }
      },
  questionNine: {
        Never: { type: Number, required: true, default: 0 },
        Rarely: { type: Number, required: true, default: 0 },
        Sometimes: { type: Number, required: true, default: 0 },
        frequently: { type: Number, required: true, default: 0 },
        VeryOften: { type: Number, required: true, default: 0 }
      }},
      
 questionsResult: {
    resultsTheQuestions: { type: Number, required: true, default: 0 }
 }


});

export interface IscaleASRSEntity extends Omit<IscaleASRS, '_id'>, Document { }