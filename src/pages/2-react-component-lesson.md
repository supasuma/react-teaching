---
title: "Components & Props - BFF's 4 lyf"
---
As briefly touched on in the JSX lesson:-

>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. -- <cite>React Docs</cite>

The simplest way to define a component in React is to write a JavaScript function:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sweet Kitty" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
It's just a function which accepts props & returns a React element. Props are JSX attributes passed to a component as a single object and then be accessed within the component, as in the example above where "Hello Sweet Kitty" would be displayed.

You can also use ES6 class syntax to write components.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
This demonstrates a concept we can look at later [Class versus Functional components](/4-functional-or-class-components/)















