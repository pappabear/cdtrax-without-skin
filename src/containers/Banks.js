import React, { Component } from "react";
import { connect } from "react-redux";
import { getBanks, addBank, deleteBank } from '../actions';

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
        this.handleDelete = this.handleDelete.bind(this)
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
        this.props.addBank(this.state.code, this.state.description)
        this.setState({ code: "", description: "" })
    }

    handleDelete(id) 
    {
        //this.props.addBank("xxx", "hardcoded")
        //this.setState({ code: "", description: "" })
    }

    render() {

        return (
            <div>
                <h1>Banks</h1>
                <ul>
                    {this.props.banks.map(bank =>
                        <li key={bank.id}>({bank.id}) {bank.description} + [edit] <input type="button" value="Delete me" onClick={ () => this.props.deleteBank(bank.id)} /> </li>
                    )}
                </ul>

                <form onSubmit={this.handleSubmit}>
                <h3>Add a Bank</h3>
                    <div>Code
                        <input type="text" 
                               name="code" 
                               id="code" 
                               onChange={this.handleChange} 
                               value={this.state.code} />
                    </div>
                    <div>Description
                        <input type="text" 
                               name="description" 
                               id="description" 
                               onChange={this.handleChange} 
                               value={this.state.description} />
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
        addBank: (code, description) => dispatch(addBank(code, description)),
        deleteBank: (id) => dispatch(deleteBank(id))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Banks)

