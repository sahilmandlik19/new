document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const user = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };
  
    // Save to Local Storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  
    // AJAX POST (to fake server endpoint - adjust for real backend)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 201) {
        // Redirect to user list page
        window.location.href = "users.html";
      }
    };
  
    xhr.send(JSON.stringify(user));
  });