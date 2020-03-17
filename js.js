// 1. Element.assignedSlot

/* */
// let slottedSpan = document.querySelector('my-paragraph span')
// console.log(slottedSpan.assignedSlot); // logs '<slot name="my-text">'

// 2. Element.attributes

/* Свойство Element.attributes возвращает группу атрибутов всех узлов, зарегистрированных в указанном узле. 
Это NamedNodeMap, тоесть полученные данные не являются массивом Array, не содержат Array методы и Attr индекс узлов 
может отличаться в различных браузерах. Если сказать более точно, атрибуты (attributes) это строка, пара ключ/значение 
которая представляет собой информацию относительно этого атрибута.
Пример: 
<p id="paragraph" style="color: green;">Sample Paragraph</p>
var p = document.querySelector('#paragraph');
var a = p.attributes;
console.log(a);
Вернёт строку: NamedNodeMap {0: id, 1: style, id: id, style: style, length: 2}
*/

// 3. Element.classList

/* Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
ClassList является геттером. Возвращаемый им объект имеет несколько методов:
a.  add( String [,String] ) - Добавляет элементу указанные классы
b.  remove( String [,String] ) - Удаляет у элемента указанные классы
c.  item ( Number ) - Результат аналогичен вызову сlassList[Number]
d.  toggle ( String [, Boolean]) - Если класс у элемента отсутствует - добавляет, иначе - убирает. 
Когда вторым параметром передано false - удаляет указанный класс, а если true - добавляет.
Если вторым параметром передан undefined или переменная с typeof == 'undefined', 
поведение будет аналогичным передаче только первого параметра при вызове toggle.
e. contains ( String ) - Проверяет, есть ли данный класс у элемента (вернет true или false)
f. length, которое возвращает количество классов у элемента.
Пример:
var elem = document.querySelector("#clock")

//Выведем классы
console.log(elem.classList); //DOMTokenList ["example", "for", "you"]

//Добавим классы
elem.classList.add("ok", "understand");
console.log(elem.classList); //DOMTokenList ["example", "for", "you", "ok", "understand"]

//Переключим классы
elem.classList.toggle("you");
elem.classList.toggle("he");
console.log(elem.classList); //DOMTokenList ["example", "for", "ok", "understand", "he"]

//Проверим класс
console.log(elem.classList.contains("example")); //true
console.log(elem.classList.contains("lol")); //false

//И удалим классы
elem.classList.remove("example", "for", "understand", "he");
console.log(elem.classList); //DOMTokenList ["ok"]
*/

// 4. ParentNode.childElementCount

/* Свойство Node.childElementCount предназначено только для чтения и возвращает число дочерних элементов узла. 
Пример:
<div id="clock" class="example for you">
    <div>1</div>
    <div>2</div>
</div>
var n = document.querySelector('#clock');
var a = n.childElementCount;
console.log(a);
2
*/

// 5. ParentNode.children

/* Свойство children ParentNode является свойством только для чтения, которое возвращает HTMLCollection, 
содержащее все дочерние elements узла, на котором он был вызван. 
Пример:
    <ul>
        <li>1 пункт</li>
        <li>2 пункт</li>
    </ul>
    var elementChildrens = document.querySelector("ul").children;
    console.log(elementChildrens);
HTMLCollection(2) [li, li]
*/

// 6. Element.className

/* Свойство className отвечает за значение атрибута class элемента.
Пример:
var elm = document.querySelector("div");
console.log(elm.className);
"booble example"
elm.className = "class1 class2 class3";
console.log(elm.className); 
"class1 class2 class3"
*/

// 7. Element.clientHeight

/* Возвращает Number, представляющее внутреннюю высоту элемента.
Element.clientHeight - свойство, доступное только для чтения. Для элементов без CSS-стилей, или элементов каркаса 
строчной разметки - значение равно нулю. Для остальных элементов - значение равно внутренней высоте элемента в пикселах, 
включая пространство между содержимым элемента и его границей (padding), но исключая высоту полосы горизонтальной прокрутки, 
и ширину отступа от границы элемента до родительского элемента (margin). 
Значение clientHeight может быть вычислено по формуле CSS height + CSS padding - высота горизонтального скролла (если присутствует).
При вычислении значения свойства, результат округляется до ближайшего целого. Если требуется дробное значение, 
используйте element.getBoundingClientRect().
Пример:
<h1 id='hello'>Hello world</h1>
var hello = document.querySelector('#hello');
var a = hello.clientHeight;
console.log(a);
37
*/

// 8. Element.clientLeft

/* Возвращает Number, предсталяющее ширину левой границы элемента.
Ширина от левого края элемента в пискелях. При наличии overflow заключает в себя ширину от ветикального scrollbar 
для письма справа налево. clientLeft не включает в себя ни левый padding ни margin с той же стороны. 
clientLeft только для чтения. Это свойство округлит значение к целому числу. Если нужно дробное значение используйте 
element.getBoundingClientRect().
Пример:
<h1 id='hello'>Hello world</h1>

#hello {
    padding-left: 10px;
    border: 3px solid black;
}

var hello = document.querySelector('#hello');
var a = hello.clientLeft;
console.log(a);
3
*/

// var hello = document.querySelector('#hello');
// var a = hello.clientLeft;
// console.log(a);



