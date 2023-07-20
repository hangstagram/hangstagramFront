import './App.css';
import { AuthProvider } from './Hooks/authContext';
import Router from './shared/router';

function App() {
  
  return (
  <>
  <AuthProvider>
   <Router/>
  </AuthProvider>
   </>
  );
}

export default App;

