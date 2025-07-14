import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';


function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div style={styles.container}>
        <h1>{showLogin ? "Login" : "Signup"}</h1>
        {showLogin ? <Login /> : <Signup />}
        <button onClick={() => setShowLogin(!showLogin)} style={styles.toggleBtn}>
          {showLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',

  },
  toggleBtn: {
    marginTop: '20px',
    padding: '10px 20px',
  }
};

export default App;



