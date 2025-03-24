// // src/components/FilterPanel.js
// import React, { useState } from "react";

// const FilterPanel = ({ onFilter }) => {
//   const [filters, setFilters] = useState({
//     dueDate: "",
//     priority: "",
//     category: "",
//     state: "",
//   });

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   const handleApplyFilters = () => {
//     onFilter(filters);
//   };

//   return (
//     <div className="filter-panel">
//       <div className="filter-item">
//         <label htmlFor="dueDate">Due Date:</label>
//         <input
//           type="text"
//           id="dueDate"
//           name="dueDate"
//           value={filters.dueDate}
//           onChange={handleFilterChange}
//         />
//       </div>
//       <div className="filter-item">
//         <label htmlFor="priority">Priority:</label>
//         <select
//           id="priority"
//           name="priority"
//           value={filters.priority}
//           onChange={handleFilterChange}
//         >
//           <option value="">Select Priority</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//       </div>
//       <div className="filter-item">
//         <label htmlFor="category">Category:</label>
//         <select
//           id="category"
//           name="category"
//           value={filters.category}
//           onChange={handleFilterChange}
//         >
//           <option value="">Select Category</option>
//           {/* Populate options from available categories */}
//         </select>
//       </div>
//       <div className="filter-item">
//         <label htmlFor="state">State:</label>
//         <select
//           id="state"
//           name="state"
//           value={filters.state}
//           onChange={handleFilterChange}
//         >
//           <option value="">Select State</option>
//           <option value="todo">To Do</option>
//           <option value="inProgress">In Progress</option>
//           <option value="done">Done</option>
//         </select>
//       </div>
//       <button className="apply-filters" onClick={handleApplyFilters}>
//         Apply
//       </button>
//     </div>
//   );
// };

// export default FilterPanel;

// src/components/FilterPanel.js
// import React, { useState } from "react";
// import { Row, Col, Form, Button } from "react-bootstrap";

// const FilterPanel = ({ onFilter }) => {
//   const [filters, setFilters] = useState({
//     dueDate: "",
//     priority: "",
//     category: "",
//     state: "",
//   });

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   const handleApplyFilters = () => {
//     onFilter(filters);
//   };

//   return (
//     <Form className="filter-panel">
//       <Row className="d-flex justify-content-center">
//         <Col>
//           <Form.Group controlId="dueDate">
//             <Form.Label>Due Date:</Form.Label>
//             <Form.Control
//               type="text"
//               name="dueDate"
//               value={filters.dueDate}
//               onChange={handleFilterChange}
//             />
//           </Form.Group>
//         </Col>
//         <Col>
//           <Form.Group controlId="priority">
//             <Form.Label>Priority:</Form.Label>
//             <Form.Control
//               as="select"
//               name="priority"
//               value={filters.priority}
//               onChange={handleFilterChange}
//             >
//               <option value="">Select Priority</option>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </Form.Control>
//           </Form.Group>
//         </Col>
//         <Col>
//           <Form.Group controlId="category">
//             <Form.Label>Category:</Form.Label>
//             <Form.Control
//               as="select"
//               name="category"
//               value={filters.category}
//               onChange={handleFilterChange}
//             >
//               <option value="">Select Category</option>
//               {/* Populate options from available categories */}
//             </Form.Control>
//           </Form.Group>
//         </Col>
//         <Col>
//           <Form.Group controlId="state">
//             <Form.Label>State:</Form.Label>
//             <Form.Control
//               as="select"
//               name="state"
//               value={filters.state}
//               onChange={handleFilterChange}
//             >
//               <option value="">Select State</option>
//               <option value="todo">To Do</option>
//               <option value="inProgress">In Progress</option>
//               <option value="done">Done</option>
//             </Form.Control>
//           </Form.Group>
//         </Col>
//         <Col>
//           <Button className="apply-filters" onClick={handleApplyFilters}>
//             Apply
//           </Button>
//         </Col>
//       </Row>
//     </Form>
//   );
// };

// export default FilterPanel;

// src/components/FilterPanel.js
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const FilterPanel = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    dueDate: "",
    priority: "",
    category: "",
    state: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="filter-panel-container">
      <h2 className="filter-panel-title">Task Filter Panel</h2>
      <Form className="filter-panel">
        <Row className="d-flex justify-content-center">
          <Col>
            <Form.Group controlId="dueDate">
              <Form.Label>Due Date:</Form.Label>
              <Form.Control
                type="text"
                name="dueDate"
                value={filters.dueDate}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="priority">
              <Form.Label>Priority:</Form.Label>
              <Form.Control
                as="select"
                name="priority"
                value={filters.priority}
                onChange={handleFilterChange}
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="category">
              <Form.Label>Category:</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
              >
                <option value="">Select Category</option>
                {/* Populate options from available categories */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="state">
              <Form.Label>State:</Form.Label>
              <Form.Control
                as="select"
                name="state"
                value={filters.state}
                onChange={handleFilterChange}
              >
                <option value="">Select State</option>
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button className="apply-filters" onClick={handleApplyFilters}>
              Apply
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FilterPanel;