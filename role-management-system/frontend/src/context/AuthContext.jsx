import  { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hook to handle persistent logins by parsing localStorage tokens
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.clear();
      }
    }
    setLoading(false);
  }, []);

  // Structural login controller that intercepts credentials for client-side testing
  const login = async (email, password) => {
    // Generates a mock system user structure based on the entry string prefix
    let mockUser = { 
      fullName: 'Henok Assefa', 
      email: email, 
      role: 'Admin' 
    };

    if (email.toLowerCase().includes('supervisor')) {
      mockUser.role = 'Supervisor';
    } else if (email.toLowerCase().includes('user')) {
      mockUser.role = 'User';
    }

    // Set persistence tokens
    localStorage.setItem('token', 'mock-jwt-token-string');
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    
    return { success: true, user: mockUser };
  };

  const signup = async (data) => {
    // Structure framework ready for later backend integration mapping
    return { success: true };
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
