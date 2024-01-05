import { Router } from 'express';
const router = Router();

router.get('/api', (_, res) => {
    res.status(200).json({ message: 'TSN - API' });
});

router.post('/api/user', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({
            message: 'Username or password missing.',
        });
        return;
    }

    // TODO
});

export default router;
