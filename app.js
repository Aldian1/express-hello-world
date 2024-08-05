const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3001;

// Middleware for parsing JSON bodies
app.use(express.json());

// Utility function for making API requests
const makeApiRequest = async (method, endpoint, params = {}, data = {}) => {
  try {
    const response = await axios({
      method,
      url: `https://app.documenso.com/api/v1${endpoint}`,
      headers: {
        'Authorization': `Bearer ${process.env.DOCUMENSO_API_KEY}`
      },
      params,
      data
    });
    return response.data;
  } catch (error) {
    console.error(`Error making ${method.toUpperCase()} request to ${endpoint}:`, error);
    throw error;
  }
};

// Route to fetch documents
app.get("/documents", async (req, res) => {
  try {
    const data = await makeApiRequest('get', '/documents', { page: req.query.page || 1, perPage: req.query.perPage || 10 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching documents' });
  }
});

// Route to create a new document
app.post("/documents", async (req, res) => {
  try {
    const data = await makeApiRequest('post', '/documents', {}, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating a document' });
  }
});

// Route to fetch a specific document by ID
app.get("/documents/:id", async (req, res) => {
  try {
    const data = await makeApiRequest('get', `/documents/${req.params.id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the document' });
  }
});

// Route to update a specific document by ID
app.put("/documents/:id", async (req, res) => {
  try {
    const data = await makeApiRequest('put', `/documents/${req.params.id}`, {}, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the document' });
  }
});

// Route to delete a specific document by ID
app.delete("/documents/:id", async (req, res) => {
  try {
    const data = await makeApiRequest('delete', `/documents/${req.params.id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the document' });
  }
});

// Route to fetch templates
app.get("/templates", async (req, res) => {
  try {
    const data = await makeApiRequest('get', '/templates', { page: req.query.page || 1, perPage: req.query.perPage || 10 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching templates' });
  }
});

// Route to create a new template
app.post("/templates", async (req, res) => {
  try {
    const data = await makeApiRequest('post', '/templates', {}, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating a template' });
  }
});

// Route to fetch a specific template by ID
app.get("/templates/:id", async (req, res) => {
  try {
    const data = await makeApiRequest('get', `/templates/${req.params.id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the template' });
  }
});

// Route to update a specific template by ID
app.put("/templates/:id", async (req, res) => {
  try {
    const data = await makeApiRequest('put', `/templates/${req.params.id}`, {}, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the template' });
  }
});

// Route to delete a specific template by ID
app.delete("/templates/:id", async (req, res) => {
  try {
    const data = await makeApiRequest('delete', `/templates/${req.params.id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the template' });
  }
});

// Route to fetch users
app.get("/users", async (req, res) => {
  try {
    const data = await makeApiRequest('get', '/users', { page: req.query.page || 1, perPage: req.query.perPage || 10 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
});

// Route to create a new user
app.post("/users", async (req, res) => {
  try {
    const data = await makeApiRequest('post', '/users', {}, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating a user' });
  }
});

// Route to fetch a specific user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const data = await makeApiRequest('get', `/users/${req.params.id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
});

// Route to update a specific user by ID
app.put("/users/:id", async (req, res) => {
  try {
    const data = await makeApiRequest('put', `/users/${req.params.id}`, {}, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
});

// Route to delete a specific user by ID
app.delete("/users/:id", async (req, res) => {
  try {
    const data = await makeApiRequest('delete', `/users/${req.params.id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
});

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      document.addEventListener('click', (event) => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight },
          disableForReducedMotion: true
        });
      });
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
       top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%);
}
</head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`;
