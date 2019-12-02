# vue-theatre
# Demo: http://vp-teatr.kiev.ua/
### Фишки
- SPA на Vue.js. Использует vue-router
- Использует Firebase (базу данных), коннкетится к ней через fetch по адресу https://vp-teatr.firebaseio.com/repertory.json
- Использует Vue CLI v3.0

### Еще доделать
- На странице контактов добавить скрипт отправления формы (php)
- Lazy load для картинок и Iframe
- Разобраться как менять description в зависимости от урлы
- На странице с контактами добавить хук beforeDestroyed, в котором удалять google карту для предотвращения утечек памяти

### Для запуска
```npm install```
```npm run serve```

