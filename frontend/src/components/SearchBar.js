// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search tasks..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { useTaskContext } from "../contexts/TaskContext";

// const SearchBar = () => {
//   const { searchTasks } = useTaskContext();
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     searchTasks(searchQuery);
//   };

//   const handleChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search tasks..."
//         value={searchQuery}
//         onChange={handleChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
// Handle search functionality and update the task list
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search tasks..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState, useEffect } from "react";
// import SearchBar from "./SearchBar";

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     // Invoke the parent function to handle search functionality
//     onSearch(searchQuery);
//   };

//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleClearSearch = () => {
//     setSearchQuery("");
//     onSearch(""); // Pass an empty string or reset to show all tasks
//   };

//   // Optional: Automatically search on input change
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       handleSearch();
//     }, 300); // debounce time in milliseconds

//     return () => {
//       clearTimeout(handler); // Cleanup the timeout on unmount
//     };
//   }, [searchQuery]);

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search tasks..."
//         value={searchQuery}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <button onClick={handleClearSearch}>Clear</button>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState, useEffect } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     // Invoke the parent function to handle search functionality
//     onSearch(searchQuery);
//   };

//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleClearSearch = () => {
//     setSearchQuery("");
//     onSearch(""); // Pass an empty string or reset to show all tasks
//   };

//   // Optional: Automatically search on input change
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       handleSearch();
//     }, 300); // debounce time in milliseconds

//     return () => {
//       clearTimeout(handler); // Cleanup the timeout on unmount
//     };
//   }, [searchQuery]);

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search tasks..."
//         value={searchQuery}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <button onClick={handleClearSearch}>Clear</button>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     // Call the onSearch function passed as a prop
//     onSearch(searchTerm);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search..."
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";

// const SearchComponent = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     if (typeof onSearch === "function") {
//       onSearch(searchTerm);
//     } else {
//       console.error("onSearch is not a function");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchComponent;

// import React from "react";
// import { InputGroup, FormControl, Button } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   return (
//     <div className="d-flex justify-content-center my-4">
//       <InputGroup className="rounded-pill" style={{ maxWidth: "400px" }}>
//         <FormControl
//           placeholder="Search..."
//           aria-label="Search"
//           aria-describedby="search-button"
//           className="border-0"
//         />
//         <InputGroup.Append>
//           <Button
//             variant="outline-secondary"
//             id="search-button"
//             className="rounded-pill border-0"
//           >
//             <FaSearch />
//           </Button>
//         </InputGroup.Append>
//       </InputGroup>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";


// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     // Perform search logic here
//     console.log("Searching for:", searchTerm);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSearch}>
//         <FaSearch />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { Form, Button, Container } from "react-bootstrap";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     // Perform search logic here
//     console.log("Searching for:", searchTerm);
//   };

//   return (
//     <Container
//       className="d-flex justify-content-center align-items-center"
//       style={{ height: "100vh" }}
//     >
//       <Form inline>
//         <Form.Control
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleInputChange}
//           className="mr-2"
//         />
//         <Button onClick={handleSearch}>
//           <FaSearch />
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { Form, Button, Container, InputGroup } from "react-bootstrap";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     // Perform search logic here
//     console.log("Searching for:", searchTerm);
//   };

//   return (
//     <Container
//       className="d-flex justify-content-center align-items-center"
//       style={{ height: "100vh" }}
//     >
//       <InputGroup className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <InputGroup.Append>
//           <Button onClick={handleSearch}>
//             <FaSearch />
//           </Button>
//         </InputGroup.Append>
//       </InputGroup>
//     </Container>
//   );
// };

// export default SearchBar;


import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Form, Button, Container, InputGroup } from "react-bootstrap";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button onClick={handleSearch}>
          <FaSearch />
        </Button>
      </InputGroup>
    </Container>
  );
};

export default SearchBar;