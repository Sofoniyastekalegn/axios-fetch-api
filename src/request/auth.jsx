// POST Request

axios.post("https://api.example.com/users",

  { name: "Abdullah", age: 25 }, // Request body

  { headers: { "Content-Type": "application/json" } }

)

.then(response => console.log(response.data))

.catch(error => console.error("Axios POST Error:", error));

// PUT Request

axios.put("https://api.example.com/users/123",

  { name: "Updated Name" }, // Updated data

  { headers: { "Authorization": Bearer ${localStorage.getItem("token")} } }

)

.then(response => console.log(response.data))

.catch(error => console.error("Axios PUT Error:", error));

// DELETE Request

axios.delete("https://api.example.com/users/123", {

  headers: { "Authorization": Bearer ${localStorage.getItem("token")} }

})

.then(response => console.log("User deleted successfully"))

.catch(error => console.error("Axios DELETE Error:", error));