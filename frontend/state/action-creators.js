// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types';
import axios from 'axios'



export function moveClockwise(value) {
  return {
    type: types.MOVE_CLOCKWISE, 
    payload: value
  }
 }

export function moveCounterClockwise(value) { 
  return {
    type: types.MOVE_COUNTERCLOCKWISE, 
    payload: value
  }
}

export function selectAnswer(answer_id) { 
  return {
    type:types.SET_SELECTED_ANSWER, 
    payload: answer_id
  }
}

export function setMessage(message) {
  return {
    type: types.SET_INFO_MESSAGE, 
    payload: message
  }
 }

export function setQuiz(question) { 
  return {
    type: types.SET_QUIZ_INTO_STATE, 
    payload: question
  }
}

export function inputChange(value) {
  return {
    type: types.INPUT_CHANGE, 
    payload: value 
 }
}

export function resetForm() { 
  return {
    type: types.RESET_FORM
  }
}


export function postQuiz({
  question_text, 
  true_answer_text, 
  false_answer_text, 
}) {
  return function (dispatch) {
    axios.post(`http://localhost:9000/api/quiz/new`, {
      question_text, 
      true_answer_text, 
      false_answer_text, 
    })
    .then(res => {
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
      dispatch(resetForm())
    })
    .catch(err => {
      console.log(err)
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state