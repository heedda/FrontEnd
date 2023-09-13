# 셀렉터(selector)

CSS는 HTML의 스타일을 정의한다. 그러면 HTML이 존재해야 하고 HTML의 특정 요소를 지정할 수 있어야 한다. 그렇게 하게 도와주는 것이 셀렉터이다.

![css-syntax.png](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/css-syntax.png)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: red; }
    p  { color: blue; }
  </style>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This paragraph is styled with CSS.</p>
</body>
</html>
```

여러개의 요소에 같은 스타일을 지정하고 싶다면 쉼표(,)로 구분하여서 표기한다.

```css
h1, p { color: red; }
```

## 전체 셀렉터

| 패턴 | Description |
| --- | --- |
| * | HTML 문서 내의 모든 요소를 선택한다. html 요소를 포함한 모든 요소가 선택된다. (head 요소도 포함된다) |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* 모든 요소를 선택 */
    * { color: red; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
  </div>
  <p>paragraph 3</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled.png)

## 태그 셀렉터

| 패턴 | Description |
| --- | --- |
| 태그명 | 지정된 태그명을 가지는 요소를 선택한다. |

지정된 태그명을 가지는 요소를 선택한다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* 모든 p 태그 요소를 선택 */
    p { color: red; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
  </div>
  <p>paragraph 3</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%201.png)

## ID 셀렉터

| 패턴 | Description |
| --- | --- |
| #id 어트리뷰트 값 | id 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다. id 어트리뷰트 값은 중복될 수 없는 유일한 값이다. |

같은 요소라도 다른 스타일을 적용시키고 싶을 때 Id를 지정해서 id로 셀렉터를 한다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* id 어트리뷰트 값이 p1인 요소를 선택 */
    #p1 { color: red; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div class="container">
    <p id="p1">paragraph 1</p>
    <p id="p2">paragraph 2</p>
  </div>
  <p>paragraph 3</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%202.png)

## 클레스 셀렉터

| 패턴 | Description |
| --- | --- |
| .class 어트리뷰트 값 | class 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다. class 어트리뷰트 값은 중복될 수 있다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* class 어트리뷰트 값이 container인 모든 요소를 선택 */
    /* color 어트리뷰트는 자식 요소에 상속된다. */
    .container { color: red; }
    /* not supported in IE */
    #p2 { color: initial; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div class="container">
    <p id="p1">paragraph 1</p>
    <p id="p2">paragraph 2</p>
  </div>
  <p>paragraph 3</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%202.png)

HTML의 클래스 어트리뷰트는 중복이 가능하다. 그래서 한번에 여러개의 스타일을 지정할 수 있다.

재사용의 측면에서 유리한 방법이다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* class 어트리뷰트 값이 text-center인 모든 요소를 선택 */
    .text-center { text-align: center; }
    /* class 어트리뷰트 값이 text-large인 모든 요소를 선택 */
    .text-large  { font-size: 200%; }
    /* class 어트리뷰트 값이 text-red인 모든 요소를 선택 */
    .text-red    { color: red; }
    /* class 어트리뷰트 값이 text-blue인 모든 요소를 선택 */
    .text-blue   { color: blue; }
  </style>
</head>
<body>
  <p class="text-center">Center</p>
  <p class="text-large text-red">Large Red</p>
  <p class="text-center text-large text-blue">Center Large Blue</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%203.png)

## 어트리뷰트 셀렉터

| 패턴 | Description |
| --- | --- |
| 셀렉터[어트리뷰트] | 지정된 어트리뷰트를 갖는 모든 요소를 선택한다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소 중에 href 어트리뷰트를 갖는 모든 요소 */
    a[href] { color: red; }
  </style>
</head>
<body>
  <a href="http://www.poiemaweb.com">poiemaweb.com</a><br>
  <a href="http://www.google.com" target="_blank">google.com</a><br>
  <a href="http://www.naver.com" target="_top">naver.com</a>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%204.png)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소 중에 target 어트리뷰트의 값이 "_blank"인 모든 요소 */
    a[target="_blank"] { color: red; }
  </style>
</head>
<body>
  <a href="http://www.poiemaweb.com">poiemaweb.com</a><br>
  <a href="http://www.google.com" target="_blank">google.com</a><br>
  <a href="http://www.naver.com" target="_top">naver.com</a>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%205.png)

| 패턴 | Description |
| --- | --- |
| 셀렉터[어트리뷰트~=”값”] | 지정된 어트리뷰트의 값이 지정된 값을 (공백으로 분리된) 단어로 포함하는 요소를 선택한다. |

만약 공백이 아니라 -이나 기호로 붙어있어도 선택이 안된다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* h1 요소 중에 title 어트리뷰트 값에 "first"를 단어로 포함하는 요소 */
    h1[title~="first"] { color: red; }
  </style>
</head>
<body>
  <h1 title="heading first">Heading first</h1>
  <h1 title="heading-first">Heading-first</h1>
  <h1 title="heading second">Heading second</h1>
  <h1 title="heading third">Heading third</h1>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%206.png)

| 패턴 | Description |
| --- | --- |
| 셀렉터[어트리뷰트|=”값”] | 지정된 어트리뷰트의 값과 일치하거나 지정 어트리뷰트 값 뒤 연이은 하이픈(“값-“)으로 시작하는 요소를 선택한다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소 중에 lang 어트리뷰트 값이 "en"과 일치하거나 "en-"로 시작하는 요소 */
    p[lang|="en"] { color: red; }
  </style>
</head>
<body>
  <p lang="en">Hello!</p>
  <p lang="en-us">Hi!</p>
  <p lang="en-gb">Ello!</p>
  <p lang="us">Hi!</p>
  <p lang="no">Hei!</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%207.png)

| 패턴 | Description |
| --- | --- |
| 셀렉터[어트리뷰트^=”값”] | 지정된 어트리뷰트 값으로 시작하는 요소를 선택한다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소 중에 href 어트리뷰트 값이 "https://"로 시작하는 요소 */
    a[href^="https://"] { color: red; }
  </style>
</head>
<body>
  <a href="https://www.test.com">https://www.test.com</a><br>
  <a href="http://www.test.com">http://www.test.com</a>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%208.png)

| 패턴 | Description |
| --- | --- |
| 셀렉터[어트리뷰트$=”값”] | 지정된 어트리뷰트 값으로 끝나는 요소를 선택한다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소 중에 href 어트리뷰트 값이 ".html"로 끝나는 요소 */
    a[href$=".html"] { color: red; }
  </style>
</head>
<body>
  <a href="test.html">test.html</a><br>
  <a href="test.jsp">test.jsp</a>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%209.png)

| 패턴 | Description |
| --- | --- |
| 셀렉터[어트리뷰트*=”값”] | 지정된 어트리뷰트 값을 포함하는 요소를 선택한다. |

~=랑 다른 점은 ~=는 따로 떨어져 있으면서 그 어트리뷰트 값을 포함해야 했다면 *=는 그 단어의 위치나 붙어있는지의 여부랑 상관 없이 포함이 되기만 하면 된다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* div 요소 중에서 class 어트리뷰트 값에 "test"를 포함하는 요소 */
    div[class*="test"] { color: red; }
    /* div 요소 중에서 class 어트리뷰트 값에 "test"를 단어로 포함하는 요소 */
    div[class~="test"] { background-color: yellow; }
  </style>
</head>
<body>
  <div class="first_test">The first div element.</div>
  <div class="second">The second div element.</div>
  <div class="test">The third div element.</div>
  <p class="test">This is some text in a paragraph.</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2010.png)

## 복합 셀렉터

### 후손 셀렉터

![descendant-child.png](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/descendant-child.png)

저번에 태그는 중첩이 가능하다고 했다. 그리고 태그 안에 있는 태그를 자손이라고 한다. 위에 그림같이 말이다.

즉 자신보다 1level위에 있으면 부모 요소, 반대로 자신보다 1level낮으면 자손 요소, 자신보다 n level 낮으면 후손 요소 라고 한다. (그럼n level 높으면 조상 요소인가….?)

후손 셀렉터는 자신의 모든 후손 요소중에 일치하는 셀렉터B의 요소를 선택한다.

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2011.png)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* div 요소의 후손요소 중 p 요소 */
    div p { color: red; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <span><p>paragraph 3</p></span>
  </div>
  <p>paragraph 4</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2012.png)

### 자식 셀렉터

자손 셀렉터는 자신의 모듵 자식 요소중에 셀렉터B와 일치하는 요소를 선택한다.

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2013.png)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* div 요소의 자식요소 중 p 요소 */
    div > p { color: red; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <span><p>paragraph 3</p></span>
  </div>
  <p>paragraph 4</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2014.png)

![Sibling_Combinator.png](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Sibling_Combinator.png)

### 인접 형제 셀렉터

인접 형제 셀렉터는 셀렉터A에 바로 뒤에 있는 셀렉터B를 선택한다. 셀렉터A와 셀렉터B사이에 다른 요소가 들어가면 선택되지 않는다.

만약 둘 사이에 다른 요소가 들어가면 선택되지 않는다.

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2015.png)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소의 형제 요소 중에 p 요소 바로 뒤에 위치하는 ul 요소를 선택한다. */
    p + ul { color: red; }
  </style>
</head>
<body>
  <div>A div element.</div>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  <p>The first paragraph.</p>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  <h2>Another list</h2>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2016.png)

### 일반 형제 셀렉터

일반 형제 셀렉터는 셀렉터A의 뒤에 있는 셀렉터B의 요소들을 모두 선택한다.

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2017.png)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소의 형제 요소 중에 p 요소 뒤에 위치하는 ul 요소를 모두 선택한다.*/
    p ~ ul { color: red; }
  </style>
</head>
<body>
  <div>A div element.</div>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  <p>The first paragraph.</p>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  <h2>Another list</h2>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2018.png)

# 가상 클래스 셀렉터

가상 클래스 셀렉터는 특정한 상황에 따라서 스타일을 정의할 때 사용한다. 특정상태의 예시는 다음과 같다.

- 마우스가 올라왔을 때
- 링크를 방문했을 때와 방문하지 않았을 때
- 포커스가 들어왔을 때

이러한 특정 상황에서는 원래 클래스가 존재하지 않지만 가상 클래스로 지정하여서 선택하는 방법이다.

```css
selector:pseudo-class {
  property: value;
}
```

다음은 a요소가 hover상태(마우스가 올라와 있는 상태)일 때 backgrond-color를 yellow로 정하는 예시이다.

```css
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소가 hover 상태일 때 */
    a:hover { color: red; }
    /* input 요소가 focus 상태일 때 */
    input:focus { background-color: yellow; }
  </style>
</head>
<body>
  <a href="#">Hover me</a><br><br>
  <input type="text" placeholder="focus me">
</body>
</html>
```

### 링크 셀렉터, 동적 셀렉터

| pseudo-class | Description |
| --- | --- |
| :link | 방문하기 전 링크 |
| :visited | 방문 한 다음 링크 상태 |
| :hover | 셀렉터에 마우스가 올라와져 있을 때 |
| :active | 셀렉터가 클릭되었을 때 |
| :focus | 포커스가 들어와있을 때  |

```css
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소가 방문하지 않은 링크일 때 */
    a:link { color: orange; }

    /* a 요소가 방문한 링크일 때 */
    a:visited { color: green; }

    /* a 요소에 마우스가 올라와 있을 때 */
    a:hover { font-weight: bold; }

    /* a 요소가 클릭된 상태일 때 */
    a:active { color: blue; }

    /* text input 요소와 password input 요소에 포커스가 들어와 있을 때 */
    input[type=text]:focus,
    input[type=password]:focus {
      color: red;
    }
    </style>
  </head>
<body>
  <a href="#" target="_blank">This is a link</a><br>
  <input type="text" value="I'll be red when focused"><br>
  <input type="password" value="I'll be red when focused">
</body>
</html>
```

### UI요소 상태 셀렉터

| pseudo-class | Description |
| --- | --- |
| :checked | 셀렉터가 체크되어있을 때 |
| :enabled | 셀렉터가 사용가능한 상태일 때 |
| :disabled | 셀렉터가 사용불가 상황일  |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* input 요소가 사용 가능한 상태일 때,
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:enabled + span {
      color: blue;
    }
    /* input 요소가 사용 불가능한 상태일 때,
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:disabled + span {
      color: gray;
      text-decoration: line-through;
    }
    /* input 요소가 체크 상태일 때,
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:checked + span {
      color: red;
    }
  </style>
</head>
<body>
  <input type="radio" checked="checked" value="male" name="gender"> <span>Male</span><br>
  <input type="radio" value="female" name="gender"> <span>Female</span><br>
  <input type="radio" value="neuter" name="gender" disabled> <span>Neuter</span><hr>

  <input type="checkbox" checked="checked" value="bicycle"> <span>I have a bicycle</span><br>
  <input type="checkbox" value="car"> <span>I have a car</span><br>
  <input type="checkbox" value="motorcycle" disabled> <span>I have a motorcycle</span>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2019.png)

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2020.png)

### 구조 가상 클래스 셀렉터

| pseudo-class | Description |
| --- | --- |
| :first-child | 셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택한다. |
| :last-child | 셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택한다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소 중에서 첫번째 자식을 선택 */
    p:first-child { color: red; }

    /* p 요소 중에서 마지막 자식을 선택 */
    /* body 요소의 두번째 p 요소는 마지막 자식 요소가 아니다.
       body 요소의 마지막 자식 요소는 div 요소이다. */
    p:last-child { color: blue; }
  </style>
</head>
<body>
  <p>This paragraph is the first child of its parent (body).</p>

  <h1>Welcome to My Homepage</h1>
  <p>This paragraph is not the first child of its parent.</p>

  <div>
    <p>This paragraph is the first child of its parent (div).</p>
    <p>This paragraph is not the first child of its parent.</p>
  </div>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2021.png)

| pseudo-class | Description |
| --- | --- |
| :nth-child(n) | 셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택한다. |
| :nth-last-child(n) | 셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택한다. |

위에 (n)에 들어가는 식이다.

| n | 2n+1 | 2n-1 | 3n-2 | 3n+1 | -n+5 |
| --- | --- | --- | --- | --- | --- |
| 0 | 1 | -1 | -2 | 1 | 5 |
| 1 | 3 | 1 | 1 | 4 | 4 |
| 2 | 5 | 3 | 4 | 7 | 3 |
| 3 | 7 | 5 | 7 | 10 | 2 |
| 4 | 9 | 7 | 10 | 13 | 1 |
| 5 | 11 | 9 | 13 | 16 | 0 |

0과 음수는 생략되기 때문에 2n+1과 2n-1, 3n-2와 3n+1은 결과적으로 같은 수열을 생성한다.

n에 수가 들어가면 그 식에 결과번째의 요소가 선택이 되고 선택이 된 요소는 스타일을 적용시킨다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* ol 요소의 자식 요소인 li 요소 중에서 짝수번째 요소만을 선택 */
    ol > li:nth-child(2n)   { color: orange; }
    /* ol 요소의 자식 요소인 li 요소 중에서 홀수번째 요소만을 선택 */
    ol > li:nth-child(2n+1) { color: green; }

    /* ol 요소의 자식 요소인 li 요소 중에서 첫번쨰 요소만을 선택 */
    ol > li:first-child     { color: red; }
    /* ol 요소의 자식 요소인 li 요소 중에서 마지막 요소만을 선택 */
    ol > li:last-child      { color: blue; }

    /* ol 요소의 자식 요소인 li 요소 중에서 4번째 요소 요소만을 선택 */
    ol > li:nth-child(4)    { background: brown; }

    /* ul 요소의 모든 자식 요소 중에서 뒤에서부터 시작하여 홀수번째 요소만을 선택 */
    ul > :nth-last-child(2n+1) { color: red; }
    /* ul 요소의 모든 자식 요소 중에서 뒤에서부터 시작하여 짝수번째 요소만을 선택 */
    ul > :nth-last-child(2n)   { color: blue; }
  </style>
</head>
<body>
  <ol>
    <li>Espresso</li>
    <li>Americano</li>
    <li>Caffe Latte</li>
    <li>Caffe Mocha</li>
    <li>Caramel Latte</li>
    <li>Cappuccino</li>
  </ol>

  <ul>
    <li>Espresso</li>
    <li>Americano</li>
    <li>Caffe Latte</li>
    <li>Caffe Mocha</li>
    <li>Caramel Latte</li>
    <li>Cappuccino</li>
  </ul>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2022.png)

| pseudo-class | Description |
| --- | --- |
| :first-of-type | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 요소를 선택한다. |
| :last-of-type | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 마지막에 등장하는 요소를 선택한다. |
| :nth-of-type(n) | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 앞에서 n번째에 등장하는 요소를 선택한다. |
| :nth-last-of-type(n) | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 뒤에서 n번째에 등장하는 요소를 선택한다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 p 요소 */
    p:first-of-type  { color: red; }
    /* p 요소의 부모 요소의 자식 요소 중 마지막 등장하는 p 요소 */
    p:last-of-type   { color: blue; }
    /* p 요소의 부모 요소의 자식 요소 중 앞에서 2번째에 등장하는 p 요소 */
    p:nth-of-type(2) { color: green; }
    /* p 요소의 부모 요소의 자식 요소 중 뒤에서 2번째에 등장하는 p 요소 */
    p:nth-last-of-type(2) { color: orange;}

    /* p 요소 중에서 첫번째 자식을 선택 */
    p:first-child { background: brown;}
  </style>
</head>
<body>
  <h1>This is a heading</h1>
  <p>The first paragraph.</p>
  <p>The second paragraph.</p>
  <p>The third paragraph.</p>
  <p>The fourth paragraph.</p>
  <div>
    <h1>This is a heading</h1>
    <p>The first paragraph.</p>
    <p>The second paragraph.</p>
    <p>The third paragraph.</p>
    <p>The fourth paragraph.</p>
  </div>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2023.png)

### 부정 셀렉터

| pseudo-class | Description |
| --- | --- |
| :not(셀렉터) | 셀렉터에 해당하지 않는 모든 요소를 선택한다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* input 요소 중에서 type 어트리뷰트의 값이 password가 아닌 요소를 선택 */
    input:not([type=password]) {
      background: yellow;
    }
  </style>
</head>
<body>
  <input type="text" value="Text input">
  <input type="email" value="email input">
  <input type="password" value="Password input">
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2024.png)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
    }
    div {
      float: left;
      width: 32%;
      height: 200px;
      background-color: red;
      /* margin-bottom: 2%; */
      color: #fff;
      font-size: 3em;
      line-height: 200px;
      text-align: center;
    }
    /* div 요소 중에서 1, 4, 7...번째 등장하는 요소가 아닌 요소만을 선택 */
    /* 1, 4, 7... : 공차가 3인 등차수열 */
    div:not(:nth-of-type(3n+1)) {
      margin-left: 2%;
    }
    /* div 요소 중에서 4번째 이후 등장하는 요소가 아닌 요소만을 선택 */
    div:not(:nth-of-type(n+4)) {
      margin-bottom: 2%;
    }
  </style>
</head>
<body>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2025.png)

### 정합성 체크 셀렉터

정합성이란 데이터와 데이터의 값이 일치하는가를 따지는 것이다

즉 입력 받아야 하는 값과 입력하는 값의 타입이 맞는가 안맞는가를 따질 때에도 사용이 된다.

| pseudo-class | Description |
| --- | --- |
| :valid(셀렉터) | 정합성 검증이 성공한 input 요소 또는 form 요소를 선택한다. |
| :invalid(셀렉터) | 정합성 검증이 실패한 input 요소 또는 form 요소를 선택한다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    input[type="text"]:valid {
      background-color: greenyellow;
    }

    input[type="text"]:invalid {
      background-color: red;
    }
  </style>
</head>
<body>
  <label>입력값이 반드시 필요
    <input type="text" required>
  </label>
  <br>
  <label>특수문자를 포함하지 않는 4자리 문자 또는 숫자
    <input type="text" value="ab1!"
      pattern="[a-zA-Z0-9]{4}" required>
  </label>
  <br>
  <label>핸드폰 번호 형식
    <input type="text" value="010-1111-2222"
      pattern="^\d{3}-\d{3,4}-\d{4}$" required>
  </label>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2026.png)

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2027.png)

## 가상 요소 셀렉터

가상 요소는 요소의 특정 부분에 스타일을 적용시키기 위해서 사용된다.

예를 들어서

- 요소 콘텐츠의 첫글자 또는 첫 줄
- 요소 콘텐츠의 앞 또는 뒤

가상 요소에는 콜론을 두개 사용한다(::). CSS표준에 따라서 이미 정해진 이름이 있기 때문에 임의의 이름을 사용할 수 없다.

| pseudo-element | Description |
| --- | --- |
| ::first-letter | 콘텐츠의 첫글자를 선택한다. |
| ::first-line | 콘텐츠의 첫줄을 선택한다. 블록 요소에만 적용할 수 있다. |
| ::after | 콘텐츠의 뒤에 위치하는 공간을 선택한다. 일반적으로 content 프로퍼티와 함께 사용된다. |
| ::before | 콘텐츠의 앞에 위치하는 공간을 선택한다. 일반적으로 content 프로퍼티와 함께 사용된다. |
| ::selection | 드래그한 콘텐츠를 선택한다. iOS Safari 등 일부 브라우저에서 동작 않는다. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소 콘텐츠의 첫글자를 선택 */
    p::first-letter { font-size: 3em; }
    /* p 요소 콘텐츠의 첫줄을 선택 */
    p::first-line   { color: red; }

    /* h1 요소 콘텐츠의 앞 공간에 content 어트리뷰트 값을 삽입한다 */
    h1::before {
      content: " HTML!!! ";
      color: blue;
    }
    /* h1 요소 콘텐츠의 뒷 공간에 content 어트리뷰트 값을 삽입한다 */
    h1::after {
      content: " CSS3!!!";
      color: red;
    }

    /* 드래그한 콘텐츠를 선택한다 */
    ::selection {
      color: red;
      background: yellow;
    }
  </style>
</head>
<body>
  <h1>This is a heading</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum sunt distinctio sed, tempore, repellat rerum et ea laborum voluptatum! Quisquam error fugiat debitis maiores officiis, tenetur ullam amet in!</p>
</body>
</html>
```

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2028.png)

![Untitled](%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%A5(selector)%20ccd6b3ae505543a8a8bfc5b2c0233444/Untitled%2029.png)