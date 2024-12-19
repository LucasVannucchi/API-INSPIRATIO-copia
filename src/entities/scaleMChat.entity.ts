import { Schema, Document } from 'mongoose';
import { IscaleMChat } from 'src/features/scaleMChat/Types/scaleMChat';

export const scaleMChat = new Schema({
  questionsReports: {
    questionOne: {
        answerYes: { type: String, required: true},
        answerNo: { type: String, required: true},
      },
  questionTwo: {
    answerYes: { type: String, required: true},
    answerNo: { type: String, required: true},
      },
  questionThree: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionFour: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionFive: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionSix: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionSeven: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionEight: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionNine: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionTen: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionEleven: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionTwelve: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionThirteen: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionFourteen: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionFifteen: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionSixteen: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionSeventeen: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionEighteen: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionNineteen: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionTwenty: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionTwentyOne: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionTwentyTwo: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      },
  questionTwentyThree: {
    answerYes: { type: String, required: true },
    answerNo: { type: String, required: true },
      }},
      
      questionsResult: {
         resultsTheQuestions: { type: String, required: true}
      }
     
     
     });
     
     export interface IscaleMChatEntity extends Omit<IscaleMChat, '_id'>, Document { }