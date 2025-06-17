import express from 'express';
import type { Request, Response } from 'express';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

const router = express.Router();

const users: User[] = [
  { id: 1, username: 'user1', email: 'user1@example.com', password: 'pass1' },
  { id: 2, username: 'user2', email: 'user2@example.com', password: 'pass2' },
  { id: 1750136101943, username: 'niharika', email: 'niharika_r@srmap.edu.in', password: 'pass123' }
];

const generateNewId = (): number => {
  return users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
};

router.post('/register', function(req: Request, res: Response) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing username, email, or password' });
  }

  const userExists = users.some(u => u.username === username || u.email === email);
  if (userExists) {
    return res.status(409).json({ error: 'Username or email already exists' });
  }

  const newUser: User = {
    id: generateNewId(),
    username,
    email,
    password,
  };

  users.push(newUser);

  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json(userWithoutPassword);
});

router.post('/login', function(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Missing username or password' });
  }

  const user = users.find(u => u.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  res.json({ message: 'Login successful', userId: user.id });
});

router.get('/user/:id', function(req: Request<{ id: string }>, res: Response) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'User ID must be a number' });
  }

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

export default router;
