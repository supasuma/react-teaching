---
title: "JSX - the hybrid vehicle of code"
---
So JSX is a hybrid of HTML and Javascript - HTM-script or Java-TML! &nbsp;&nbsp;The official word is that it's a "syntax extension to JavaScript".

It allows us to produce React "elements" and which can combine presentation work with logic.

###Simple expression 

```jsx
import React from 'react';
import { ReactDOM } from 'react-dom';

const HelloWorld = () => {
  const name = 'World';
  return <div className="fancy">Hello {name}!</div>;
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
```

So in the above example the "logic" of declaring a const name & displaying it within the string "Hello World!" is combined with the html `<div>`'s.  

You can put ANY valid JavaScript expression within those curly braces.

Beware that JSX uses `className` rather than `class` within the HTML-like bits - I think there are few other instances of this as well.


React deals with it's separation of concerns using *components*.

###Other "interesting" bits to know about JSX 

JSX tags may contain children:

```jsx
const element = (
  <div className="fancy">
    <h1>Hello Doggy!</h1>
    <h2>Are you friends with kitty?</h2>
  </div>
);
```

To get up with the lingo (aka language), the above is a "React element".  They are the smallest building blocks and are descriptions of what you want to see on the screen.  

To render your element in a simple React app there will likely be an index.html file containing `<div id="root"></div>` which is the "root" DOM node as everything inside it is managed by React DOM.  

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

To Render an element (or your whole react app) into this node, pass it and your element/App to `ReactDOM.render()` as we saw in the first example

```jsx
ReactDOM.render(element, document.getElementById('root'));
```


[Onto Components & Props](/2-react-component-lesson/)






