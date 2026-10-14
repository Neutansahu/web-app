
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Containerized Web Application</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #eef2ff;
          text-align: center;
          padding: 70px 20px;
        }
        .card {
          background: white;
          max-width: 600px;
          margin: auto;
          padding: 35px;
          border-radius: 15px;
          box-shadow: 0 4px 18px #0002;
        }
        h1 { color: #1d4ed8; }
        .status { color: #15803d; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Containerized Web Application</h1>
        <p>Welcome to my AWS and Docker DevOps project!</p>
        <p class="status">Application is running successfully.</p>
        <p>Technology: Node.js, Express, Docker, AWS EC2</p>
      </div>
    </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
