# vue-theatre
### Фишки
- SPA на Vue.js. Использует vue-router
- Использует Firebase (базу данных), коннкетится к ней через fetch по адресу https://vp-teatr.firebaseio.com/repertory.json
- Использует Vue CLI v3.0

### Еще доделать
- Починить анимацию перехода с главной на внутреннюю и наоборот (дергается из-за разных представлений router-view)
- Переписать RepertoryPage, а именно одновременное использование v-if\v-for
- Добавить слайдер на RepertoryPage
- На странице контактов добавить скрипт отправления формы (php)
- На странице контактов перед переходом на другую страницу добавить скрипт проверки заполнения формы

### Для запуска
```npm install```
```npm run serve```

