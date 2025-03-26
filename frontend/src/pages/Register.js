// import React, { useState } from "react";
// import { useAuthContext } from "../contexts/AuthContext";

// const Register = () => {
//   const { register } = useAuthContext();
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register(formData.username, formData.email, formData.password);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="register-page">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// src/pages/Register.js
// import React, { useState } from 'react';
// import { useAuthContext } from '../contexts/AuthContext';

// const Register = () => {
//   const { register } = useAuthContext(); // Ensure useAuthContext is working correctly
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register(formData.username, formData.password); // Ensure register function is defined
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="register-page">
//       <h2>Register</h2>
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
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

//src/pages/Register.js
// import api from "../api/axios"; 
// import React, { useState } from 'react';
// import { useAuthContext } from '../contexts/AuthContext';
// import { Container, Form, Button, Card } from 'react-bootstrap'; // Import Bootstrap components
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// const Register = () => {
//   const { register } = useAuthContext(); // Ensure useAuthContext is working correctly
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register(formData.username, formData.email, formData.password); // Ensure register function is defined
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post("register/", { email, password }); // Use api instead of axios
//       // Redirect or show success message
//     } catch (err) {
//       setError(err.response.data.detail);
//     }
//   };


//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card style={{ width: '100%', maxWidth: '400px' }}>
//         <Card.Body>
//           <Card.Title className="text-center">Register</Card.Title>
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
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
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
//               Register
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Register;





// import React, { useState } from "react";
// import api from "../api/axios"; // Adjust the path to your API module


// const Register = () => {
//   // Define state variables for email, password and error
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Assuming you want to send a POST request for registration
//       const response = await api.post("register/", {
//         email,
//         password,
//       });

//       console.log("Registration success:", response.data);
//       // Handle success (e.g., navigate to another page, show a success message, etc.)
//     } catch (err) {
//       console.error("Registration failed:", err);
//       setError("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;





// import React, { useState } from "react";
// import api from "../api/axios"; // Adjust the path to your API module
// import { Container, Form, Button, Alert } from "react-bootstrap";

// const Register = () => {
//   // Define state variables for email, password, and error
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Assuming you want to send a POST request for registration
//       const response = await api.post("register/", {
//         email,
//         password,
//       });

//       console.log("Registration success:", response.data);
//       // Handle success (e.g., navigate to another page, show a success message, etc.)
//     } catch (err) {
//       console.error("Registration failed:", err);
//       setError("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <h2>Register</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Enter your email"
//           />
//         </Form.Group>

//         <Form.Group controlId="formPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             placeholder="Enter your password"
//           />
//         </Form.Group>

//         {error && <Alert variant="danger">{error}</Alert>}

//         <Button variant="primary" type="submit">
//           Register
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default Register;





// src/pages/Register.js
import api from "../api/axios"; 
import React, { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'; // Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Register = () => {
  const { register } = useAuthContext(); // Ensure useAuthContext is working correctly
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  // Add error state
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(); // Call handleRegister instead of directly calling register
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await api.post("register/", {
        email: formData.email,
        password: formData.password,
        username: formData.username, // Include username in the registration request if needed
      });
      // Call your register function here if needed
      register(formData.username, formData.email, formData.password);
      // Handle successful registration (e.g., redirect or success message)
    } catch (err) {
      // Check if err.response exists
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail); // Display specific error message
      } else {
        setError("An unexpected error occurred. Please try again later."); // Fallback message
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '100%', maxWidth: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">Register</Card.Title>
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
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
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
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;