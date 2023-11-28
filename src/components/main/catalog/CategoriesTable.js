import React ,{useState}from "react";
import * as AiIcons from "react-icons/ai";
import './Categories.css';


const CategoriesTable = ({
  data = [],
  onSelectAll,
  onEdit,
  selectedItems,
  onToggleSelect,
  onDeleteSelected
}) => {
  const [tableData, setTableData] = useState([]);
  const [stateVariable, setStateVariable] = useState([]); // Replace with appropriate initial value

  const handleSelectAll = (allItemIds) => {
    onSelectAll(allItemIds);
  };

  const handleEdit = (itemId) => {
    console.log("Edit item with ID:", itemId);
  };

  const handleToggleSelect = (itemId) => {
    onToggleSelect(itemId);
  };

  const handleDeleteSelected = (selectedItems) => {
    console.log("Delete selected items:", selectedItems);
  };

  const [sortBy, setSortBy] = useState("sno");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortBy === "sno") {
      return sortOrder === "desc" ? b.id - a.id : a.id - b.id;
    } else if (sortBy === "name") {
      return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortBy === "price") {
      return sortOrder === "desc" ? b.price - a.price : a.price - b.price;
    } else {
      return 0;
    }
  });

  return (
    <div style={{ marginLeft: "300px", backgroundColor: "rebeccapurple" }}>
    <button onClick={() => onDeleteSelected(selectedItems)} className="del-btn">
      <AiIcons.AiFillDelete />
    </button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="radio"
                onChange={handleSelectAll}
                checked={selectedItems?.length === data?.length}
              />
            </th>
            <th onClick={() => handleSort("sno")}>S.No</th>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("price")}>Price</th>
            <th onClick={() => handleSort("description")}>Description</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:"skyblue",marginLeft:"150px"}}>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => onToggleSelect(item.id)}
                />
              </td>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button
                  className="btn"
                  style={{ backgroundColor: "green", color: "white", padding: "5px 10px", marginRight: "5px" }}
                  onClick={() => onEdit(item.id)}
                >
                  <AiIcons.AiFillEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default CategoriesTable;