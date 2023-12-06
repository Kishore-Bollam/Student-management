//import css file

import React from "react";
// import { GridCell } from "../../atomic/grid-cell/grid-cell.component";


const GridComponent = (props) => {

   function editRecord(item){
    props.edit(item)
   }
   function deleteRecord(item){
    props.delete(item)
   }
    
  return (
    <div>
      <table className="table table-striped table-bordered table-hover ">
        <thead className="table-dark">
          <tr>
            {props &&
              props.headers &&
              props.headers.map((item, index, arr) => {
                return <th>{item}</th>;
              })}
          </tr>
        </thead>

        <tbody>
          {props &&
            props.data &&
           props.data.map((item, index, arr) => {
              return (
                <tr>
                  {Object.values(item).map((d) => {
                     return(
                       <td>{d}</td>
                     )
                  })}
                  <div>
                    <input type="button" value="EDIT"  className="btn btn-primary " onClick={()=>{editRecord(item)}}/>
                    <input type="reset" value="DELETE" className="btn btn-danger ms-3"  onClick={()=>{deleteRecord(item)}}/>
                  </div>
                </tr>
              );
            })}
            {
                props && props.data?.length === 0 && <h4 className=" text-white p-2 m-2 bg-danger">No Records Found......!</h4>
            }
        </tbody>
      </table>
    </div>
  );
};
export default GridComponent;
