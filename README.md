# vue-theatre
# Demo: http://vp-teatr.kiev.ua/
### Фишки
- SPA на Vue.js. Использует vue-router
- Использует Firebase (базу данных), коннкетится к ней через fetch по адресу https://vp-teatr.firebaseio.com/repertory.json
- Использует Vue CLI v3.0
- На странице Gallery прикручен плагин Lightbox для показа галлереи
- Есть 404 страница

### Еще доделать
- Починить анимацию перехода с главной на внутреннюю и наоборот (дергается из-за разных представлений router-view)
- На странице контактов добавить скрипт отправления формы (php)
- Lazy load для картинок и Iframe
- Разобраться как менять description в зависимости от урлы

### Для запуска
```npm install```
```npm run serve```

