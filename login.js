function login(username, password) {
    // Simulated login check
    if (username === 'admin' && password === 'password123') {
      return 'Login successful';
    } else {
      return 'Invalid credentials';
    }
  }
  
  module.exports = login;
  