---
layout: doc
title: CSS
---

# CSS

:::details Что такое блочная модель?

> Концепция определяющая структуру и поведение элементов на странице.   

Структурно каждый элемент на странице состоит из:
- Контента (Content)
- Внутренних отступов (Padding)
- Границы (Border)
- Внешних отступов (Margin)  

***
Размер элементов расчитывается исходя из значения свойства `box-sizing`.  
При значении `content-box` учитываются только ширина и высота, без учета внутренних отступов и границ, что является контринтуитивно, так как фактический размер не будет соответствовать размеру отображаемому в devtools.  
Свойство `border-box` при расчете размеров элемента учитывает ширину, высоту и внутренние отступы и границы, решая проблемы свойства `content-box`.  

***
> По умолчанию, все элементы на странице разделяются на блочные и строчные.  

Блочные:
- Занимают всю доступную ширину
- Распологаются друг под другом
- Им можно задать ширину и высоту  

Строчные:
- Распологаются друг за другом
- Ширина и высота определяется содержимым, задать напрямую нельзя
- Внутренние и внешние отступы по вертикали работать не будут

Строчно-блочные:
- Распологаются друг за другом
- Можно задать ширину и высоту
- Внутренние и внешние отступы будут применяться  

:::

:::details Что такое специфичность?

> Специфичность определяет приоритет с которым будут применяться стили к элементу.  

Css предоставляет различные способы для стилизации элементов, а именно: 
- по тегу
- по классу
- по атрибуту
- инлайн

В случае, если одни элемент стилизован разными способами специфичность расчитывает *вес* применяемых стилей.  
Правило `!important` отменяет специфичность, применяя стили вне зависимости от специфичности, наследования и т.д.

:::


:::details Что такое наследование?

Это возможность дочерних элементов наследовать, то есть применять, свойства родителей.
По умолчанию наследуются свойства относящиеся к типографике, такие как `font-size`, `color`, `line-height` и тому подобное.

Для упраления наследованием существует свойство `inherit` которое позволяет напрямую наследовать свойства.  
Для свойства `color` существует свойство `currentColor` которое позволяет напрямую наследовать цвет.

`!important` игнорирует наследование применяя стили без учета наследования.

:::

:::details Что такое каскадность?

> Механизм определяющий из какого источника и по каким правилам будут применены стили к элементам на странице.

Источники стилей:
- Браузерные стили с `!important` 
- Инлайновые стили с `!important` 
- Стили при анимациях и переходах `animation`, `transition`
- Обычные инлайновые стили
- Стили из файлов `.css`
- Стили браузера по умолчанию

Помимо того откуда приходят стили, каскадность учитывает специфичность и наследование.

:::

:::details Как работает контекст наложения?

> Управлет тем, как элементы будут накладываться друг на друга, или же распологаться по оси Z.

Контекст наложения формируется:
- когда для элемента не статично спозиционирован, то есть, когда задано одно из свойств `position: absolute`, `position: relative`, `position: fixed`
- когда задано свойство `z-index: 1`
- когда заданы такие свойства как `opacity`, `transform`, `filter`

Для упраления порядком наложения используется свойство `z-index`, элемент с наибольшим значением этого свойства будет распологаться 'выше' других элементов.

Внутри каждого контекста наложения существует свой порядок отрисовки слоев элемента
1. Фон `background` и рамки элемента `border`
1. Элемента с `z-index` со значением меньше 0
1. Блочные элементы `display: block;`
1. Элементы со свойством `float`
1. Инлайновые элементы `display: inline`
1. Элементы со свойством `opacity` меньше 0
1. Элементы со свойством `z-index` больше 0
:::

:::details Что такое селектор?

Это шаблон, который позволяет выбирать (обращаться к) элементы на странице.

Типы селекторов:
- Универсальный селектор `*` - выбирает все элементы на странице, кроме псевдоэлементов `::before`, `::after`
- Селектор по тегу `div`, `p`, `a`
- Селектор по классу `.nav`, `.button--primary`
- Селектор по id `#sidebar`, `#item`
- Селектор по атрибуту `[checked]`, `[type='button']`

Комбинации селекторов:
- *Группировка* `.title, h3, .link__text`, селекторы записываются через запятую, стили будут применены к каждому селектору
- *Объединение* `div.nav.nav__item` стили будут применены к элементу который содержит все указанные селекторы
- *Вложенные* `li a` стилизует самый последний по вложенности селектор 
- *Напрямую вложенные* `section > h3` стили применяться если `h3` является потомком `section`
- *Смежные* `label + input` стили применяться если элементы распологаются на одном уровне вложенности
- *Последующие* `span ~ span.color--accent` стили применяться ко всем элементам расположенным слева от `~` если они находятся на одном уровне вложенности

Комбинация селекторов не является хорошей практикой, потому что завязана на структуру элементов на странице, если один из элементов будет перемещен в другую часть разметки, комбинированные селекторы сломаются.

:::




:::details
В чем разница между id и class в CSS?  

Как работают вложенные селекторы в CSS?  

Что такое псевдоклассы, и как их отличить от псевдоэлементов?  

Как работает :nth-child() и как использовать сложные формулы?  

Чем отличается :nth-child() от :nth-of-type()?  

Как работает свойство display, и какие значения оно может принимать?  

Чем отличаются block, inline и inline-block?  

Объясните модель блочной коробки (box model).
Что такое внутренние и внешние отступы, и как они взаимодействуют?  

Как работает свойство margin-collapse?  

В чем разница между border-box и content-box?  

Что такое z-index, и как работает контекст наложения (stacking context)?  

Как создается новый stacking context?  

В чем различия между position: relative, absolute, fixed, и sticky?  

Как работает свойство overflow?  

Что такое clip и clip-path, и как они применяются?  

Как работает visibility и чем оно отличается от display: none?  

В чем разница между em и rem?  

Что такое медиазапросы, и как их использовать для адаптивной верстки?  

Как работает Flexbox, и какова его основная концепция?  

Как настроить выравнивание элементов по вертикали с использованием Flexbox?  

Чем отличается Flexbox от CSS Grid?  

Как создать макет с фиксированными, резиновыми и адаптивными элементами?  

Что такое шаблонные области (template areas) в CSS Grid?  

Как работает свойство gap?  

Как сделать элемент центрированным внутри контейнера с помощью Flexbox?  

Какие значения принимает свойство justify-content?  

Как работает свойство align-items?  

Чем отличаются auto-fill и auto-fit в CSS Grid?  

Как работают псевдоэлементы ::before и ::after?  

Как задать CSS-анимацию с использованием @keyframes?  

Чем отличается transition от animation?  

Как работают шаги (steps()) в CSS-анимациях?  

Что такое пользовательские свойства CSS (custom properties)?  

Как создать темизацию сайта с помощью CSS-переменных?  

Что такое CSS-тени (box-shadow и text-shadow), и как их настроить?  

Как работает свойство filter?  
 Какие эффекты можно применить?  

Что такое миксин в SASS, и как его использовать?  

Как работают вложенные правила в SASS или LESS?  

В чем разница между SASS и SCSS?  

Как использовать переменные и циклы в препроцессорах?  

Что такое BEM, и каковы его основные принципы?  

Как улучшить производительность CSS?  

Что такое критический CSS, и как его использовать?  

Как работает CSS-модульность?  

Чем отличаются статические, динамические и модульные стили?  

Что такое методология ITCSS?  

Как работают глобальные и локальные стили в CSS-модулях?  

Что такое инлайновые стили, и когда их стоит использовать?  

Как работают абсолютные и относительные пути в фонах?  

Что такое спрайты в CSS, и как их использовать?  

Как сделать адаптивное изображение с помощью свойства object-fit?  

В чем разница между min-width, max-width и width?  

Как работают свойства aspect-ratio?  

Чем отличаются логические свойства (margin-inline, padding-block)?  

Что такое кроссбраузерность, и как обеспечить поддержку старых браузеров?  

Как работает свойство writing-mode?  

Что такое overflow-anchor, и как оно помогает при прокрутке?  

Как сделать липкий футер?  

Как работает свойство will-change, и в каких случаях его использовать?  

Что такое contain, и как оно помогает оптимизировать рендеринг?  

Как работает CSS-параллакс?  

Что такое CSS Houdini, и какие возможности он предоставляет?  

Как настроить анимацию скроллинга (scroll-behavior)?  

Что такое prefers-reduced-motion, и как его учитывать?  

Как работают свойства backdrop-filter?  

Как создать доступное меню на CSS?  

Что такое веб-шрифты, и как правильно их подключать?  

Какие проблемы могут возникнуть с FOUT/FOIT?  

Как улучшить загрузку шрифтов?  

Как работают относительные единицы ch и ex?  

Что такое шрифт-замена (font-display)?  

Чем отличается baseline от других вариантов вертикального выравнивания?  

Что такое кастомный курсор в CSS, и как его настроить?  

Как работать с анимацией на SVG с помощью CSS?  

Как ограничить доступ к стилям для iframe?  

Что такое Shadow DOM, и как взаимодействовать с его стилями?  

Какие CSS-хаки могут быть полезны для поддержки IE?  

Как работают env() и calc() в CSS?  

Что такое clip-path: polygon(), и как его использовать?  

Как сделать ленивую загрузку изображений на CSS?  

Что такое логические свойства в CSS?  

Как работает свойство mix-blend-mode?  

В чем разница между ::marker и ::before для списков?  

Как CSS обрабатывает вложенные списки?  

Что такое CSS Scroll Snap, и как его использовать?  

Как работает @supports в CSS?  

Какие возможности дает @layer в CSS?  

Что такое контейнерные запросы (container queries)?  

Как работает accent-color для форм?  

Что такое appearance, и почему оно может быть полезным?  

Как работает кастомизация форм с помощью псевдоклассов?  

Что такое hyphens в CSS?  

Как работает text-overflow: ellipsis?  

Как настроить анимацию с бесконечным повторением?  

Какие современные инструменты используют для работы с CSS?  

Что такое PostCSS, и для чего он нужен?  
:::