import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:2233/insert/categories");
        console.log(response.data); // Log the entire response for debugging
        setCategories(response.data.categories); // Access the 'categories' property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="categories">
        <div className="home2">
         <div className="header">
           <div className="row">
               <div className="col-lg-2 ps-4">
                 <h2>Catagories</h2>
               </div>
               <div className="col-lg-1 hometext pt-2">
                 <Link to="/admin/catalog/categories" style={{color:"gray",fontSize:"20px",textDecoration:"none"}}>Home<IoIosArrowForward /></Link>
               </div>
               <div className="col-lg-1 text2 pt-2">
                 <Link to="/admin/catalog/categories"style={{color:"blue",fontSize:"20px",textDecoration:"none"}}>Categories</Link>
               </div>
               <div className="col-lg-6"></div>
               <div className="col-lg-2 ps-2 addnew">
                 <Link to="/admin/catalog/categories/add" style={{textDecoration: 'none'}}   title="Add New"> <FaPlus style={{backgroundColor:'blue'}} className="icon ps-1 pe-1 " /></Link>
                 <Link to="#" style={{textDecoration: 'none'}}   title="Reset"> <FiRefreshCw style={{backgroundColor:'gray'}}  className="icon ps-1 pe-1" /></Link>
                 <Link to="#" style={{textDecoration: 'none'}}   title="Delete"> <MdDelete style={{backgroundColor:'red'}} className="icon ps-1 pe-1" /></Link>
               </div>
               <hr></hr>
             </div> 
         </div>

      <div className="table-responsive mt-3">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>SNo</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.category}</td>
                <td>{item.subcategory}</td>
                <td>{item.Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default Categories;
