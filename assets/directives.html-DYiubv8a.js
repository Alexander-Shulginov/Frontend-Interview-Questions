import{_ as t,c as i,a as d,e as l,f as o,b as r,o as s,r as v}from"./app-Bw176Snc.js";const a={};function p(c,e){const n=v("Badge");return s(),i("div",null,[e[15]||(e[15]=d('<h3 id="что-такое-директивын" tabindex="-1"><a class="header-anchor" href="#что-такое-директивын"><span>Что такое директивын?</span></a></h3><p>Директивы это специальные атрибуты с префиксом <code>v-</code> позволяющие динамически управлять DOM деревом на основе реактивных зависимостей.<br> Директивы подразделяются на встроенные и пользовательские.</p><h3 id="для-чего-нужны-пользовательские-директивы" tabindex="-1"><a class="header-anchor" href="#для-чего-нужны-пользовательские-директивы"><span>Для чего нужны пользовательские директивы?</span></a></h3><p>Кастомные, они же пользовательские, директивы позволяют создавать переиспользуемую логику управления DOM деревом.<br> Используются только тогда, когда нет возможности достичь нужного функционала встроенными директивами.<br> Мне нравится использовать кастомные директивы для расширения обработчиков событий, то есть если не существyет нужного события, например события, когда страница проскролена до конца, или событие появления скролла, то я использую кастомные директивы с синтаксисом <code>v-on-scrollbar-active=&quot;someFunction&quot;</code> или <code>v-on-scrollbar-on-bottom=&quot;someFunction&quot;</code></p><h3 id="перечислите-встроенные-директивы" tabindex="-1"><a class="header-anchor" href="#перечислите-встроенные-директивы"><span>Перечислите встроенные директивы?</span></a></h3>',5)),l("ul",null,[e[14]||(e[14]=d("<li><p>Для управлением отображения элементов используются<br><code>v-if</code> - управляет наличием в DOM дереве компонента в зависимости от булева значения<br><code>v-show</code> - управляет отображением компонента</p></li><li><p>Для связывания данных с DOM элементами используюся<br><code>v-bind</code> - односторонняя привязка реактивных данных к DOM элементу<br><code>v-model</code> - двусторонняя привязка данных между моделью и представлением</p></li><li><p>Для итераций используется класcический цикл <code>for</code><br><code>v-for</code> - классический цикл</p></li><li><p>Для обработки событий<br><code>v-on</code> - добавляет событие</p></li><li><p>Для управления содержимым компонента/DOM элемента<br><code>v-slot</code> - содержит идентификатор для именованного слота<br><code>v-text</code> - аналог интерполяции, выводит данные в разметку<br><code>v-html</code> - позволяет вставлять html код, использовать не рекомендуется</p></li>",5)),l("li",null,[l("p",null,[e[0]||(e[0]=o("Для оптимизации производительности")),e[1]||(e[1]=l("br",null,null,-1)),e[2]||(e[2]=l("code",null,"v-once",-1)),e[3]||(e[3]=o(" - позволяет отрисовать элемент или компонент только один раз, последующие обновления будут игнорировать элемент с такой директивой, используется для оптимизации производительности")),e[4]||(e[4]=l("br",null,null,-1)),e[5]||(e[5]=l("code",null,"v-memo",-1)),e[6]||(e[6]=o()),r(n,{type:"tip",text:"v3.2+",vertical:"middle"}),e[7]||(e[7]=o(" - позволяет мемоизировать массив переданных значений, используется как микрооптимизация")),e[8]||(e[8]=l("br",null,null,-1)),e[9]||(e[9]=l("code",null,"v-cloak",-1)),e[10]||(e[10]=o(" - Используется для скрытия еще нескомпилированного шаблона до тех пор, пока он не будет готов")),e[11]||(e[11]=l("br",null,null,-1)),e[12]||(e[12]=l("code",null,"v-pre",-1)),e[13]||(e[13]=o(" - позволяет пропустить DOM элемент на этапе компиляции"))])])]),e[16]||(e[16]=d('<h3 id="чем-различаются-v-if-и-v-show-и-когда-что-использовать" tabindex="-1"><a class="header-anchor" href="#чем-различаются-v-if-и-v-show-и-когда-что-использовать"><span>Чем различаются <code>v-if</code> и <code>v-show</code> и когда что использовать</span></a></h3><p><code>v-if</code> полностью удаляет компонент из DOM-дерева и добавляет его обратно, когда условие становится истинным. Это может быть затратным для производительности при частых изменениях, так как при каждом добавлении или удалении происходит перерисовка и обновление виртуального DOM.<br> Однако <code>v-if</code> использует механизм ленивой отрисовки — элемент не будет добавлен в DOM, если условие ложное с самого начала.</p><p><code>v-show</code> всегда отрисовывает элемент в DOM дереве, но просто скрывает его с помощью <code>display: none;</code><br> Используется при частом переключении видимости элемента.</p><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind"><span>v-bind</span></a></h3><p>Односторонее связывание данных между атрибутами и свойствами компонента.</p><h3 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model"><span>v-model</span></a></h3><p>Используется только с: <code>&lt;input&gt;</code> <code>&lt;select&gt;</code> <code>&lt;textarea&gt;</code> <code>компоненты</code></p>',7))])}const u=t(a,[["render",p],["__file","directives.html.vue"]]),m=JSON.parse('{"path":"/directives.html","title":"Directives","lang":"en-US","frontmatter":{"title":"Directives"},"headers":[{"level":3,"title":"Что такое директивын?","slug":"что-такое-директивын","link":"#что-такое-директивын","children":[]},{"level":3,"title":"Для чего нужны пользовательские директивы?","slug":"для-чего-нужны-пользовательские-директивы","link":"#для-чего-нужны-пользовательские-директивы","children":[]},{"level":3,"title":"Перечислите встроенные директивы?","slug":"перечислите-встроенные-директивы","link":"#перечислите-встроенные-директивы","children":[]},{"level":3,"title":"Чем различаются v-if и v-show и когда что использовать","slug":"чем-различаются-v-if-и-v-show-и-когда-что-использовать","link":"#чем-различаются-v-if-и-v-show-и-когда-что-использовать","children":[]},{"level":3,"title":"v-bind","slug":"v-bind","link":"#v-bind","children":[]},{"level":3,"title":"v-model","slug":"v-model","link":"#v-model","children":[]}],"git":{"updatedTime":1728898579000,"contributors":[{"name":"Alexander_721","email":"alexander3post@gmail.com","commits":1}]},"filePathRelative":"directives.md"}');export{u as comp,m as data};
