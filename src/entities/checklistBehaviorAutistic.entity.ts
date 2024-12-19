import { Schema, Document } from 'mongoose';
import { IchecklistBehaviorAutistic } from 'src/features/checklistBehaviorAutistic/types/checklistBehaviorAutistic';

export const checklistBehaviorAutistic = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  dateApplication: { type: Number, required: true },
  patient: { type: Schema.Types.ObjectId, ref: "User" },
  age: { type: Number, required: true },
  dateBirth: { type: Number, required: true },
  questionsReports: {
    questionOne: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwo: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionThree: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionFour: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionFive: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionSix: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionSeven: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionEight: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionNine: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTen: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionEleven: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwelve: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionThirteen: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionFourteen: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionFifteen: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionSixteen: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionSeventeen: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionEighteen: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionNineteen: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwenty: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwentyOne: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwentyTwo: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwentyThree: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwentyFour: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwentyFive: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwentySix: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwentySeven: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwentyEight: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionTwentyNine: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionThirty: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionThirtyOne: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionThirtyTwo: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionThirtyThree: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionThirtyFour: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionThirtyFive: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language: { type: Number, required: true, default: 0 },
        developmentSocialAndPersonal: { type: Number, required: true, default: 0 }
      },
  questionThirtySix: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionThirtySeven: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionThirtyEight: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionThirtyNine: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionForty: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFortyOne: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFortyTwo: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFortyThree: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFortyFour: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFortyFive: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFortySix: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFortySeven: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFortyEight: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFortyNine: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFifty: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFiftyOne: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFiftyTwo: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFiftyThree: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFiftyFour: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFiftyFive: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFiftySix: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      },
  questionFiftySeven: {
        stimulationSensory: { type: Number, required: true, default: 0 },
        relationship: { type: Number, required: true, default: 0 },
        modifiedDependency: { type: Number, required: true, default: 0 },
        objectsAndBodyUse: { type: Number, required: true, default: 0 },
        language:{ type: Number, required: true, default: 0 },
        developmentSocialAndPersonal:{ type: Number, required: true, default: 0 }
      }},
      
 questionsResult: {
    resultsTheQuestions: { type: Number, required: true, default: 0 }
 }


});

export interface IchecklistBehaviorAutisticEntity extends Omit<IchecklistBehaviorAutistic, '_id'>, Document { }