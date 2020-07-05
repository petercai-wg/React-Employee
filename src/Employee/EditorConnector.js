import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import  { updateEmployee } from  "./actions"

export const EditorConnector = ( presentationComponent) => {

    // for link to map
    /*
    const mapStateToProps = (storeData, ownProps) => {
        const id = Number(ownProps.match.params.id);   
        //const id = Number(ownProps.id);  
        console.log( "ownProps id " + id);
        return {      
            // don't pass store reference, pass copy     
            employee:  Object.assign({},  storeData.employees.find(p => p.id == id))
           
        }
    }
        
    const mapDispatchToProps = (dispatch, ownProps) =>{  
      
        return {      
            saveCallback: (data) => {
                dispatch(updateEmployee(data));
                ownProps.history.push(`/isolate`);
            },
            cancelCallback: (data) => {     
                console.log("cancellcall back") ;       
                ownProps.history.push(`/isolate`);
            }
        }
    }*/

    ///mergProps as an extra control and intercept
    // const mergeProps = (dataProps, functionProps, ownProps) => {
    //     // console.log("EditConnector mergeProps");
    //     // console.log(dataProps);
    //     // console.log(functionProps);
    //     // console.log(ownProps);

    //     let routedDispatchers = {
    //         cancelCallback: (data) => {
    //             //console.log("EditConnector cancelCallback");
    //             saveAndEndEditing(data);
                
    //         },
    //         saveCallback: (data) => {
    //             console.log("EditConnector saveCallback");   
    //            // ownProps.saveCallback(data);           
    //         }
    //     }
    //     return Object.assign({}, dataProps, functionProps, ownProps);     
       
    // }

    // return withRouter(connect(mapStateToProps, //null, mergeProps)(presentationComponent));
    //     mapDispatchToProps  //, mergeProps
    //     )(presentationComponent));

    //  for popupModal
    const mapStateToProps = (storeData, ownProps) => {
        
        const id = Number(ownProps.id);  
        console.log( "ownProps id " + id);
        return {      
            // don't pass store reference, pass copy     
            employee:  Object.assign({},  storeData.employees.find(p => p.id == id))
           
        }
    }
        
    const mapDispatchToProps = (dispatch, ownProps) =>{  
      
        return {      
            saveCallback: (data) => {
                console.log("save and back") ;    
                dispatch(updateEmployee(data));
                ownProps.onClose.call();
            },
            cancelCallback: (data) => {     
                console.log("cancellcall back") ;       
                ownProps.onClose.call();
            }
        }
    }

return connect(mapStateToProps,   mapDispatchToProps)(presentationComponent);        
}
