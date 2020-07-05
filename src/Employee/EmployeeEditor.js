import React, { Component } from "react";

export default class EmployeeEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: props.employee
        }

    }

    handleChange = (ev) => {
        ev.persist();
        this.setState(state => state.employee[ev.target.name] = ev.target.value);
    }

    handleSaveClick = () => { 
        this.props.saveCallback(this.state.employee);
    }

    handleCancelClick = () => {
        this.props.cancelCallback(this.state.employee);
    }
    render() {
        return (<div className="p-3 w-35">
            <table><tbody>
                <tr className="form-group">
                    <td>
                        <label>ID</label>
                    </td>
                    <td>
                        <input className="form-control" name="id"
                            disabled
                            value={this.state.employee.id}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>First Name</label>
                    </td>
                    <td>
                        <input className="form-control" name="firstName"
                            value={this.state.employee.firstName}
                            onChange={this.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Last Name</label>
                    </td>
                    <td>
                        <input className="form-control" name="lastName"
                            value={this.state.employee.lastName}
                            onChange={this.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Description</label>
                    </td>
                    <td>
                        <input className="form-control" name="description"
                            value={this.state.employee.description}
                            onChange={this.handleChange} />
                    </td>
                </tr>
                <tr className="text-center">
                    <td>
                        <button className="btn btn-primary m-1" onClick={this.handleSaveClick}>
                            Save
                    </button>
                    </td>
                    <td>
                        <button className="btn btn-secondary"
                            onClick={this.handleCancelClick}>
                            Cancel
                    </button>
                    </td>

                </tr>
                </tbody></table>
        </div>)
    }
}
