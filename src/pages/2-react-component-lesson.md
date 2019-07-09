---
title: "Components & Props - Like peas and carrots"
---
As briefly touched on in the JSX lesson:-

>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
<cite>React Docs</cite>

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
It's just a function which accepts props (which we'll come to in a moment) & returns a React element.  

You can also use ES6 class syntax to write components.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
This demonstrates a concept we can look at later [Class versus Functional components](/4-functional-or-class-components/)


<br/>
<br/>

But now, let's talk about Props (baby)!!!
============================

To make these reusable pieces dynamic you need to be able to supply them with different data.
You do that with input called “props”. Props are (appropriately enough) properties (JSX attributes) supplied to User defined React components.

When React sees a user defined element e.g `const element = <Welcome name="Sweet little Kitty" />;` any attributes passed
through are saved as one object "props".

They can then be accessed within the component, as in the example above where "Hello Sweet Kitty" would be displayed.

![Alt Text](https://media.giphy.com/media/qyxyGxszt6LXW/giphy.gif) 

**User defined Components & Props go together like peas & carrots**


##Props are read only

So for anything in your app that needs to be dynamic / changeable use `state`.  Though keep in mind that the dynamic / changeable
state of a parent component can be used to set the props of its child or children components.

Props:

>Props are short for properties. These are static properties on a React component that are immutable (cannot be changed).

State:

>State is mutable, and defines at any given time, the current state of the React component that is being rendered.

[More on State](/3-react-state-lesson/)








