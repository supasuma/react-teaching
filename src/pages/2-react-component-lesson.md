---
title: "Component"
---
As briefly touched on in our JSX lesson:-

>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. -- <cite>React Docs</cite>

The simplest way to define a component in React is to write a JavaScript function:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
It's ust a function which accepts props (which we'll come to in a moment) & returns a React element.  But you can also use ES6 class syntax to write components.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
This demonstrates a concept we can look at later [Class versus Functional components](/4-functional-or-class-components/).

But now, let's talk Props!!!

User defined Components & Props go together like peas & carrots

![Alt Text](https://media.giphy.com/media/qyxyGxszt6LXW/giphy.gif)




function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
It’s just a function which accepts props and returns a React element.
But you can also use the ES6 class syntax to write components.

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
Both versions are equivalent and will give you the exact same output.
Now you might ask yourself: “When should I use a function and when a class?”











