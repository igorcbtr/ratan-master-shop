# Ratan Master — плетём для жизни

Адаптивный лендинг мастерской плетёных кашпо из ротанга. Дизайн использует тёплую кремово-коричневую палитру логотипа, editorial-композицию, CSS-заглушки товаров и лёгкий vanilla JavaScript.

## Run locally

There is no build step:

```bash
python3 -m http.server 8000
```

Откройте <http://localhost:8000>. Сайт можно развернуть без сборки на GitHub Pages, Netlify, Vercel или любом другом статическом хостинге.

## Structure

```text
index.html       # Секции магазина, карточки товаров, отзывы и форма
css/main.css     # Палитра, адаптивная сетка и стили компонентов
js/main.js       # Меню, прокрутка, анимация появления и валидация
assets/images/   # Логотип и будущие фото товаров
```

## Customization

- Замените CSS-заглушки `.hero-art`, `.product-art` и `.story-art` на `<img>`, когда появятся фотографии. Используйте понятный `alt`, размеры и `loading="lazy"` для изображений ниже первого экрана.
- Названия, цены, отзывы и контакты редактируются в `index.html`.
- Палитра настраивается в `:root` файла `css/main.css`; ключевые переменные — `--ink`, `--paper`, `--moss` и `--clay`.
- Форма пока валидируется в браузере и показывает сообщение без перезагрузки. Перед приёмом заказов подключите реальный endpoint.

## Accessibility

Страница содержит семантические секции и статьи, подписанную навигацию, клавиатурный фокус, закрытие меню по Escape, inline-ошибки формы, live-статус и поддержку reduced motion. Макет mobile-first и становится одноколоночным ниже `760px`.

## Workflow

Use focused English Conventional Commits, for example `feat: add new product card`. Test the page with a local HTTP server at mobile and desktop widths before deploying.

## Repository

<https://github.com/igorcbtr/ratan-master-shop>

## License

MIT
