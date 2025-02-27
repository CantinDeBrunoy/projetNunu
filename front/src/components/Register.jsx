import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register({ email, password });
    if (success) {
      navigate('/dashboard');
    } else {
      setError("Erreur lors de l'inscription");
    }
  };

  return (
    <div
      className="register-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
        margin: '0',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          color: '#333',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          width: '300px',
          textAlign: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'bounce-in 0.8s ease-out',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>Inscription</h2>
        {error && (
          <p
            className="error"
            style={{
              color: 'red',
              background: '#ffecec',
              border: '1px solid red',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '15px',
            }}
          >
            {error}
          </p>
        )}
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '80%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '80%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;