import React,{Component} from 'react';

class createRef extends Component{
    input = React.createRef();

    handelFocus = () => {
        this.input.current.focus();
    }

    render(){
        return (
            <div>
                <input ref={this.input}/>
            </div>
        );
    }
    
};

export default createRef;