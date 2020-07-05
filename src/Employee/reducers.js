import { combineReducers } from 'redux'


const employees = (employeeList = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      const newList = [...employeeList];
      let objIndex = newList.findIndex((obj => obj.id == action.employee.id));
      newList[objIndex] = action.employee;
      //console.log(newList);
      return newList;


    case 'LOAD':
       return action.employee; 
     

    default:
      return employeeList;
  }
}


const searchFilter = (filter = "", action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.text;

    default:
      return filter;
  }
}


const editFilter = (id = "", action) => {
  switch (action.type) {
    case 'EDIT':
      return action.id;

    default:
      return id;
  }
}

export default combineReducers({
  employees,
  searchFilter,
  editID: editFilter
})