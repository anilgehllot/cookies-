document.addEventListener('DOMContentLoaded', function() {
    // Function to get the value of a cookie by name
    function getCookie(name) {
      let cookieArray = document.cookie.split('; '); // Get all cookies as an array
      let cookie = cookieArray.find((row) => row.startsWith(name + '=')); // Find our specific cookie
      return cookie ? cookie.split('=')[1] : null; // Return cookie value or null
    }
  
    // Function to set a cookie
    function setCookie(name, value, daysToExpire) {
      let date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000); // Set expiration date
      document.cookie =
        name + '=' + value + ';expires=' + date.toUTCString() + ';path=/;SameSite=None;Secure'; // Set cookie
    }
  
    // Get the current value of the 'count' cookie
    let count = parseInt(getCookie('count')) || 0; // If cookie exists, use it; otherwise, start at 0
  
    count++; // Increment the count
  
    // Update the cookie with the new count
    setCookie('count', count, 7); // Store for 7 days
  
    // Display the updated count
    document.getElementById('countDisplay').innerText = `You have visited this page ${count} times.`;
  });
  