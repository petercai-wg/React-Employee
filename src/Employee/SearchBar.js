import { connect } from 'react-redux'
import React, { Component } from "react"

/// action object to reducer
export const setSearchFilter = (text) => ({
    type: 'SEARCH',
    text: text
})
  

function mapDispatchToProps(dispatch) {
  return {
    setSearchFilter: text => dispatch(setSearchFilter(text))   
  };
}


export class  AddSearchBar extends Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);     
    }
 
   handleFilterTextChange (e) {
    let text =   e.target.value;  
    this.props.setSearchFilter(text);  
  }

  render() {
        return (
          <div>
              <input  
                type="text"
                placeholder="Search..."          
                onChange={this.handleFilterTextChange}
              />

          </div>  )
  }
  
}

export default connect(null,   mapDispatchToProps)(AddSearchBar)