/*
Редюсер в приложении разбит на две части. Т.к. он отвечает за два разных состояния в приложении.
*/

import { combineReducers } from "redux"
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from "./types"

function counterReducer(state = 0, action){ // Это чистая функция. Ред.сер должен возвращать только стейт. Никакого асинхронного кода здесь не должно быть. Обработка асинхронного кода должна быть в экшн.
  if(action.type === INCREMENT){
    return state + 1
  }else if(action.type === DECREMENT){
    return state - 1
  }else if(action.type === ASYNC_INCREMENT){
    return state + 1
  }
  return state
}

const initialThemeState = {
  value: 'light',
  disabled: false
}

function themeReducer(state = initialThemeState, action){
  switch(action.type){
    case CHANGE_THEME:
      return {...state, value: action.payload}
    case ENABLE_BUTTONS:
      return {...state, disabled: false}
    case DISABLE_BUTTONS:
      return {...state, disabled: true}
    
    default: return state
  }
}

const rootReducer = combineReducers({ //combineReducers() объеденяет редюсеры в один. В виде объекта.
  counter: counterReducer,
  theme: themeReducer 
})

export {rootReducer}