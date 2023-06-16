import React, {Component, ReactPropTypes} from "react";
import Grid from "./grid";

class SelectButton extends Component {
    constructor(props){
        super(props);
        //set default color
        this.state = {
            color: "red",
        };

        //bind function
        this.colorSelect = this.colorSelect.bind(this);
    }

    //select colors
    colorSelect(x){
        this.setState({color: x.currentTarget.value});
        //console.log(this.state.color);
    }
    

    //return a select dropdown
    render(){
        return(
            // selection drop down
            <div>

                <Grid color={this.state.color}/>

                <select name="colors" id="colors" onChange={this.colorSelect}>
                    <option value="red" >red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                    <option value="orange">orange</option>
                    <option value="tomato">tomato</option>
                    <option value="pink">pink</option>
                    <option value="purple">purple</option>
                    <option value="gray">gray</option>
                    <option value="black">black</option>
                </select>
            </div>

          
        )
    }
}

export default SelectButton;