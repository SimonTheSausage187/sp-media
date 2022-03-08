import React from 'react';
import ImagePopup from './ImagePopup';


class ImageCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            spans: 0,
            reference: this.props.imageID,
            popup: false
        };
    }


    setSpans = () => {

        const height = document.getElementById(`${this.state.reference}`).clientHeight  
        const spans = Math.ceil(height / 5) + 3

        this.setState({spans: spans})
    }
    
    render(){
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    id={`${this.state.reference}`}
                    src={this.props.src.regular}
                    onLoad={() => this.setSpans()}
                    onClick={this.setState({popup: !this.state.popup})}
                />
            </div>
        );
    }
}

export default ImageCard;