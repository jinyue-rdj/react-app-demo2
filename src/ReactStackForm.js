import React, {Component} from "react"

export default class ReactStackForm extends Component{
    constructo(props){
        super(props);
        this.state={react:false, redux:false, mobx:false};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        const target = e.target;
        this.setState({[e.target.name]:target.checked});
    }

    handleSubmit(e){
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>React
                <input type="checkbox" 
                name="react" 
                value="react" 
                checked={this.state.react} 
                onChange={this.handleChange}
                />
            </label>
            <label>Redux
                <input type="checkbox" 
                name="redux" 
                value="redux" 
                checked={this.state.redux} 
                onChange={this.handleChange}
                />
            </label>
            <label>Mobx
                <input type="checkbox" 
                name="Mobx" 
                value="Mobx" 
                checked={this.state.mobx} 
                onChange={this.handleChange}
                />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
} 