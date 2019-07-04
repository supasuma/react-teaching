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
It's just a function which accepts props (which we'll come to in a moment) & returns a React element.  But you can also use ES6 class syntax to write components.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
This demonstrates a concept we can look at later [Class versus Functional components](/4-functional-or-class-components/).

But now, let's talk about Props (baby)!!!
============================

To make these reusable pieces dynamic you need to be able to supply them with different data.
You do that with input called “props”. Props are (appropriately enough) properties supplied to User defined React components.

User defined Components & Props go together like peas & carrots

![Alt Text](https://media.giphy.com/media/qyxyGxszt6LXW/giphy.gif)


When React sees a user defined element e.g `const element = <Welcome name="Sweet little Kitty" />;` any attributes passed
through are as one object "props".

Props are read only
===================

So for anything in your app that needs to be dynamic / changeable use `state`.  Though keep in mind that the dynamic / changeable
state of a parent component can be used to set the props of it's child or children components.

Props:

>Props are short for properties. These are static properties on a React component that are immutable (cannot be changed).

State:

>State is mutable, and defines at any given time, the current state of the React component that is being rendered.









