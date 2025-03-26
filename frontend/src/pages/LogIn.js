// // src/pages/Login.js
// import React, { useState } from "react";
// import { useAuthContext } from "../contexts/AuthContext";

// const Login = () => {
//   const { login } = useAuthContext();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(formData.username, formData.password);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="login-page">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// // src/pages/Login.js
// import React, { useState } from "react";
// import { useAuthContext } from "../contexts/AuthContext";
// import { Container, Form, Button, Card } from "react-bootstrap"; // Import Bootstrap components
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// const Login = () => {
//   const { login } = useAuthContext();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post("login/", { email, password });
//       localStorage.setItem("token", response.data.access); // Store your token
//       // Redirect to dashboard or home page
//     } catch (err) {
//       setError(err.response.data.detail);
//     }
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(formData.username, formData.password);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card style={{ width: '100%', maxWidth: '400px' }}>
//         <Card.Body>
//           <Card.Title className="text-center">Login</Card.Title>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formUsername">
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="username"
//                 placeholder="Enter your username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit" block>
//               Login
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Login;

// src/pages/Login.js
import React, { useState } from "react";
import api from "../api/axios"; // Import the api instance, make sure the path is correct
import { useAuthContext } from "../contexts/AuthContext";
import { Container, Form, Button, Card, Alert } from "react-bootstrap"; // Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Login = () => {
  const { login } = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Define error state
  const [error, setError] = useState(null);

  // Function to handle login operation
  const handleLogin = async () => {
    try {
      const response = await api.post("login/", {
        username: formData.username, // Use formData to get username
        password: formData.password, // Use formData to get password
      });
      localStorage.setItem("token", response.data.access); // Store your token
      // Redirect to dashboard or home page
    } catch (err) {
      // Check if err.response is defined and has data property
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(); // Call handleLogin on form submission
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '100%', maxWidth: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>} {/* Show error messages */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;