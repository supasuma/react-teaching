---
title: "JSX - pretty much HTML"
---
So in my opinion it's preeeeeetty much HTML, actually it's more of a hybrid of HTML and Javascript - HT-script or Java-ML!

The official word is that it's a "syntax extension to JavaScript"

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


<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>