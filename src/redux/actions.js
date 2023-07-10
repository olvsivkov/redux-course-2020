// здесь создаются экшены для страницы index.js. Фактически они возращают объект с обязательным ключем type.

import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from "./types";


export const increment = () => {
  return {type: INCREMENT}
}

export const decrement = () => {
  return {type: DECREMENT}
}

export const enableButtons = () => {
  return {type: ENABLE_BUTTONS}
}

export const disableButtons = () => {
  return {type: DISABLE_BUTTONS}
}

export const async_increment = () => { // благодаря applyMiddleware(thunk) возможно сделать асинхронный экшн, который в нужное время вернет тип в редюсер.
  return function(dispatch) {
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch(
        {type: ASYNC_INCREMENT}
      )
      dispatch(enableButtons())
    }, 2000)
  }
}

export const changeTheme = (newTheme) => {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}