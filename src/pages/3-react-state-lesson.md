---
title: "Look at the *state* of you..."
---

To make a component truly reusable and encapsulated it needs a way to update other than `ReactDom.render()` and this is
achieved through state.

My super awesome doggy component updates it's state every 3 seconds with a new pic.

It is a class component so it allows us to be able to use React local state & lifecycle methods.

My only state in this example is `imageURL` which is initially set to a method call.

**The only place where you can assign `this.state` is the constructor! `this.setState()` to modify state thereafter**


```jsx
import React from "react"
import axios from "axios";

class CuteDoggyPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: this.getDoggyPhoto(),
        }
    }


    render() {
        const { imageURL } = this.state;
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={imageURL} />
            </div>
        );
    }
}

export default GetDogPhoto;
```
<br/>
In order to update state a `getDoggyPhoto()` method needs to be implemented - obviously! 
<br/>
<br/>

```jsx

    getDoggyPhoto() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({ imageURL: response.data.message });
            })
            .catch(error => {
                console.log(error);
        })
    }

```
<br/>

getDoggyPhoto uses axios to make an http request and once it receives a response uses React's `setState()` method to update
our cute doggy photos.

Every time `this.setState()` is called the `render()` method will be triggered; regardless of whether the photo has actually changed or not! 
In some cases this can become inefficient but there is a React lifecycle method to help with this `shouldComponentUpdate(nextProps)`.


In order to update a cute doggy photo every three seconds we need to set up a timer and for this we use some lifecycle methods.
 
 Whenever CuteDoggyPhoto is rendered to the DOM for the first time it is called "mounting" (insert some lame dog / mounting pun) - this is where we set our timer.
 
 And whenever the DOM produced by CuteDoggyPhoto is removed it's called "unmounting" - this is where we can clear our timer.
  
```jsx
    componentDidMount() { 
        this.intervalThingy = setInterval(() => {
            this.getDog();
        }, 3000);
    }
    
    componentWillUnmount() { 
        clearInterval(this.intervalThingy);
    }

```

And because Javascript. The above arrow method could also be written as the below

```jsx
        this.intervalThingy = setInterval(function() { 
            this.getDog(); 
         }, 3000);
```

## Some other things about state

State is private and fully controlled by the component and within more complex applications where parent components may 
need to share state with its children it could pass it down as props.

Which prompts a second point that data flows down and is commonly called "top-down" or "unidirectional".  So any data or 
UI derived from the state of a component can only affect components "below" them.

State updates may be asynchronous!  React may batch multiple `setState()` calls for performance.  So don't rely on the values
of `this.props` & `this.state` for calculating the next state!  For instance updating  a counter
<br/>

```jsx 
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
}); 
```

To fix this use a second form of `setState()` that accepts a function rather than an object.   Previous state is the 
first argument and the props at the time the update is applied the second.
<br/>

```jsx 
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

Again, because of Javascript, and because I sometimes find the different ways of writing methods confusing

The above arrow function can be written as a regular function:
<br/>

```jsx
// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});

```






