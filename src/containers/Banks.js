import React, { Component } from "react";
import { connect } from "react-redux";
import { getBanks, addBank, deleteBank, updateBank } from '../actions';

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
            id: "",
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
        this.props.addBank(this.state.code, this.state.description)
        this.setState({ code: "", description: "" })
    }

    handleUpdate(id, code, description) 
    {
        this.props.updateBank(id, code + "-e", description + "-e")
    }

    render() {

        return (
            <div>
                <h1>Banks</h1>
                <ul>
                    {this.props.banks.map(bank =>
                        <li key={bank.id}>({bank.id}) {bank.description} 
                            <a href="#" onClick={ () => this.handleUpdate(bank.id, bank.code, bank.description)}>Update</a> 
                            <a href="#" onClick={ () => this.props.deleteBank(bank.id)}>Delete</a> </li>
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
        deleteBank: (id) => dispatch(deleteBank(id)),
        updateBank: (id, code, description) => dispatch(updateBank(id, code, description))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Banks)

