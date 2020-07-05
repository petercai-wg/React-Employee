import { connect } from 'react-redux'
import React, { Component } from "react"
import {  Link,  useParams} from "react-router-dom";

import Modal from "./Modal";

import { EditorConnector } from './EditorConnector';
import EmployeeEditor from './EmployeeEditor';

const ConnectedEditor = EditorConnector(EmployeeEditor);



const getVisibleList = (employeelist, searchFilter) => {

  let returnList = employeelist;

  if (searchFilter != '') {
    returnList = employeelist.filter(p => {
      return p.firstName.toUpperCase().indexOf(searchFilter.toUpperCase()) >= 0;
    });

  }

  return returnList;
}

//  functin return store showlist
const mapStateToProps = (state) => (
  {
    employeeList: getVisibleList(state.employees, state.searchFilter)
  }
);

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModal: false,
      editID : 0
    };
  }

  handleEdit = (evt) => {
    let pid = evt.target.getAttribute("pid")    
    console.log("handleEdit " + pid );  
    this.setState( { editModal: true, editID: pid});
  }

  handleCloseModal = () => {
    this.setState({editModal: false});
  }
  render() {

    return (
      <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Description</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{
          this.props.employeeList.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
                <td>{p.description}</td>
                <td>
                <Link  className="btn btn-sm btn-warning mx-2" 
                                    to={`/isolate/edit/${p.id}`}>
                                LinkEdit
                </Link>                  
                </td>
                <td>
                  <button className="btn btn-sm btn-primary"  pid={`${p.id}`}  disabled={this.state.editModal}
                  onClick={this.handleEdit}>
                    PopupEdit
                  </button>
                </td>
              </tr>
            )
          }//  map function  return
          )}
        </tbody>
      </table>
      { this.state.editModal &&
        <Modal>
         <ConnectedEditor id={this.state.editID}  onClose={this.handleCloseModal} />
          
        </Modal>
      }
     
      </React.Fragment>
    )  ///  return
  }//  render()
}


export default connect(mapStateToProps)(ShowList)
