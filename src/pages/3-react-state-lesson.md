---
title: "Look at the state of you..."
---

To make a component truly reusable and encapsulated it needs a way to update other than ReactDom.render() and this is
achieved through state.

My super awesome doggy component updates it's state 3 seconds with a new pic


So here we have created a GetDogPhoto class component which allows us to be able to use React local state & lifecycle methods,
where our state is `imageURL`.  This state is initially set to an empty string but will be updated within the getDog method.
getDog uses axios to make an http and once it receives a response uses React's `setState` method.
If setState changes the current state of the component the `render()` method will be called!!

IMP: The only place where you can assign this.state is the constructor & you can only use this.setState to modify state thereafter

However in order to trigger that very first update we need to use some lifecycle methods.

```jsx
import React from "react"
import axios from "axios";

class GetDogPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
        }
    }

    getDog() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({ imageURL: response.data.message });
            })
            .catch(error => {
                console.log(error);
        })
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

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

We can declare special methods on the component class to run some code when a component mounts and unmounts:




```jsx

 componentDidMount() {
        this.getDog();
        this.intervalThingyId = setInterval(() => {
            this.getDog();
        }, 3000);
    }



    componentWillUnmount() {
        clearInterval(this.intervalThingyId);
    }

```

So you can see state is similar to props, but it is private and fully controlled by the component.  With more complex
applications parent components if they need to share state with their children would pass it down as props.


Let’s quickly recap what’s going on and the order in which the methods are called:

When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.

When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.

Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.






