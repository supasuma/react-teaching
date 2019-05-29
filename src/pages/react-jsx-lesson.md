---
title: "JSX - pretty much HTML"
---
So in my opinion it's preeeeeetty much HTML, actually it's more of a hybrid of HTML and Javascript - HT-script or Java-ML!

The official word is that it's a "syntax extension to JavaScript".

JSX produces React "elements" and allows us combine markup/UI work with the logic.

#Simple expression 

```jsx
import React from 'react';
import { render } from 'react-dom';

const HelloWorld = () => {
  const name = 'World';
  return <div>Hello {name}!</div>;
};

render(<HelloWorld />, document.getElementById('root-1'));
```
the `render` in the above example is 



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Our First React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```







