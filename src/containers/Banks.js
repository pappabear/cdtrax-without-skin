import React, { Component } from "react";
import { connect } from "react-redux";
import { getBanks } from '../actions';
import { addBank } from '../actions';

const mapStateToProps = state => {
      return { 
        banks: state.banks
        };
};

class Banks extends Component {
    
    constructor(props) 
    {
        super(props)

        this.state = {
            code: "",
            description: ""
          }
      
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
    componentDidMount() 
    {
        this.props.getBanks();
    }

    handleChange(event) 
    {
        this.setState({ [event.target.id]: event.target.value });
    }
    
    handleSubmit(event) 
    {
        event.preventDefault()
        const { code, description } = this.state
        this.props.addBank("xxx", "hardcoded")
        this.setState({ code: "", description: "" })
    }
    
    render() {

        /*
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        */

        return (
            <div>
                <ul>
                    {this.props.banks.map(bank =>
                        <li>{bank.description}</li>
                    )}
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <h3>Add</h3>
                    <div>Code
                        <input type="text" name="code" id="code" />
                    </div>
                    <div>Description
                        <input type="text" name="description" id="description" />
                    </div>
                    <input type="submit" onClick={this.handleSubmit} />

                </form>

            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getBanks: () => dispatch(getBanks()),
        addBank: (code, description) => dispatch(addBank(code, description))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Banks)

