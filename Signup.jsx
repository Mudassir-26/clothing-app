import { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmpassword]= useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // clear error
    console.log('Signup Data:', { name, email, password, confirmpassword });

    // TODO: Send data to backend here 
  };
 


  return (
    <div style={{ maxWidth: "400px", margin: "auto" ,}}>
      {error && <p style={{ color: "red" }}>{error}</p>}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br /><br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br /><br />
      <input
        type="confirm password"
        placeholder="confirm Password"
        value={confirmpassword}
        onChange={(e) => setconfirmpassword(e.target.value)}
        required
      /><br /><br />
      <button type="submit">Signup</button>
    </form>
    </div>
  );
}

export default Signup;
