
import RestDataSource from "./RestDataSource"


const callback = () => console.log("Rest call ...");
const dataSources = new RestDataSource(callback);

//  action to dispatch
export const updateEmployeeStore = (data) => ({
    type: 'UPDATE',
    employee: data
})

export const updateEmployee = (data) => {
    return dispatch => {
       // dataSources.Update(data, callback);
        dispatch(updateEmployeeStore(data));
    }

}

export const loadEmployeeStore = (data) => ({
    type: 'LOAD',
    employee: data
})

export const loadEmployee = () => {
    return dispatch => {
        dataSources.GetData( data =>  dispatch(loadEmployeeStore(data)) );
    }

}