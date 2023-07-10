import './styles.css'
import { legacy_createStore as createStore, applyMiddleware } from 'redux' // createStore создает хранилище в котором хранится state и из которого этот state берется для отрисовки в компоненте. Там же есть методы getState(), subscribe(), dispatch(). !!! Важно createStore устарел, вместо него используется configureStore  из redux toolkit

import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReduсer'
import { increment, decrement, async_increment, changeTheme } from './redux/actions'
import { composeWithDevTools } from 'redux-devtools-extension';

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) // хранилище + благодаря applyMiddleware(thunk) возможно в экшн создавать асинхронные экшены.

addBtn.addEventListener('click', () => {
 store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(async_increment())
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light' // чтоб при нажатии менялась тема. Аналог toggle
  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState() // state является объектом у которого есть ключи theme и counter, т.к. в файле rootReduser есть две функции редюсера, отвечающие за разные стейты.

  counter.textContent = state.counter
  document.body.className = state.theme.value
  addBtn.disabled = state.theme.disabled
})

store.dispatch({type: 'INIT_APP'})