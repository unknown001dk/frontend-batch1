const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory user store (replace with DB in production)
const users = [];

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: true
}));

// Routes
app.get('/', (req, res) => res.redirect('/login'));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views/login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views/register.html')));
app.get('/home', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.sendFile(path.join(__dirname, 'views/home.html'));
});
app.get('/user-info', (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ message: 'Not logged in' });
  }
});
app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.json({ message: 'User already exists' });
  }
  users.push({ username, email, password });
  res.json({ message: 'Registered successfully' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.json({ message: 'Invalid credentials' });
  req.session.user = { username: user.username, email: user.email };
  res.json({ message: 'Login successful' });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
