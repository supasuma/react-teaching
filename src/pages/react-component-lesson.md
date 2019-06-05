---
title: "Component"
---

>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React Docs

The simplest way to define a component in React is to write a JavaScript function:
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108



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











