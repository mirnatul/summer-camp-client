// utils/authUtils.js

// Decodes the JWT token and returns the payload
export function decodeToken(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  
    return JSON.parse(jsonPayload);
  }
  
  // Checks if the JWT token is valid (not expired)
  export function isTokenValid(token) {
    if (!token || !token.exp) {
      return false;
    }
  
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime < token.exp;
  }
  