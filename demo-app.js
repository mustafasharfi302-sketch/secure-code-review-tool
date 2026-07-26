const express = require('express');
const app = express();
 const dbPassword = "admin123";
   eval("console.log('test')");

// Intentionally insecure demo code for testing the security scanning pipeline

// Hardcoded credential (should be flagged by Semgrep/Gitleaks)
const apiKey = "sk_test_51H8x9K2eZvKYlo2C0lIC5b3d";

// SQL built via string concatenation (should be flagged - SQL injection risk)
function getUser(db, userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// Admin route with no visible auth check (should be flagged - broken access control)
app.get('/admin/deleteUser', (req, res) => {
  const userId = req.query.id;
  res.send(`Deleted user ${userId}`);
});

// Insecure TLS verification disabled
const axios = require('axios');
axios.get('https://example.com', { rejectUnauthorized: false });

module.exports = { getUser };
