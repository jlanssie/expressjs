const endpoint = "http://localhost:3000";

const query = "?input=" + Math.random().toString(36).substr(2, 7);

const queryRequest = endpoint + query;

const payload = {
  context: "docker-container",
  id: Date.now(),
  data: Math.random().toString(36).substr(2, 7),
};

fetch(queryRequest, {
  method: "GET",
  headers: {
    "Content-Type": "text/html",
  },
})
  .then((response) =>
    response ? response.toString() : "Server did not respond."
  )
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
  .then((response) =>
    response ? response.toString() : "Server did not respond."
  )
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
