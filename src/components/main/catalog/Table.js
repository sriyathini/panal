import React ,{useState}from "react";
import "./Categories.css";

function Table() {
    // const [tableData, setTableData] = useState([]);
    // const [formInputData, setFormInputData] = useState({
    //   category: "",
    //   subcategory: "",
    // });
  
  // const handleChange = (evnt) => {
  //   const newInput = { ...formInputData, [evnt.target.name]: evnt.target.value };
  //   setFormInputData(newInput);
  // };

  // const handleDelete = (index) => {
  //   const newData = [...tableData];
  //   newData.splice(index, 1);
  //   setTableData(newData);
  // };

  // const handleSubmit = (evnt) => {
  //   evnt.preventDefault();
  //   const checkEmptyInput = !Object.values(formInputData).every((res) => res === "");
  //   if (checkEmptyInput) {
  //     const newData = [...tableData, formInputData];
  //     setTableData(newData);
  //     const emptyInput = { category: "", subcategory: "" };
  //     setFormInputData(emptyInput);
  //   }
  // };

  return (
    <div className="table-responsive-mt-3"  >
    <table className="table" onScroll={{tableData}}>
      <thead>
        <tr>
          <th>S.N</th>
          <th>Category</th>
          <th>Subcategory</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.category}</td>
            <td>{data.subcategory}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                // onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        {/* </div>
              <Table tableData={tableData} handleDelete={handleDelete} /> 
           </div> */}
      </tbody>
      <div>
      <Table tableData={tableData} handleDelete={handleDelete} /> 
   </div>
    </table>
    </div>
  );
}

export default Table;