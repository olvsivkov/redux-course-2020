Важный момент!

Логика приложения должна быть в функции Редюсере. 
То есть есть три сущности: 
  1. Компонент. В компоненте идет отрисовка интерфейса с которым взаимодействует пользователь.
  2. Экшн. В экшене я передаю от компонента к редюсеру информацию о том, что именно пользователь сделал. 
  3. Редюсер. В редюсере написана логика. Редюсер получеат информацию о том, что пользователь сделал и если в type есть такое действие, то редюсер возвращает измененный state. 

  Дальше будет немного магии. State попадает в store. А в index.js есть подписка на store (вызывается метод subscribe()). И внутри этого метода вызывается измененный state и присваивается к нужному элементу компонента. 