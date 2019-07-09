import React from "react"
import axios from "axios";

class GetDogPhoto extends React.Component {
    // you only need to pass props to the constructor if you want to access it there
    constructor() {
        super();
        this.state = {
            imageURL: this.getDog(),
        }
    }
    
    //look at using async / await
    componentDidMount() {
        // this.intervalThingy = setInterval(function(){ this.getDog(); }, 3000);

        this.intervalThingy = setInterval(() => {
            this.getDog();
        }, 3000);
 // Why doesn't the below work? OR throw any error.  Because this.getDog() calls the method
 // right away because it isn't inside a function. 
        // this.intervalThingy = setInterval(this.getDog(), 3000)
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

    componentWillUnmount() {
        clearInterval(this.intervalThingy);
    }

    render() {
        const { imageURL } = this.state;
        return (
            <div>
                <h3 >{this.props.title}</h3>
                <img src={imageURL} />
            </div>
        );
    }
}

export default GetDogPhoto;