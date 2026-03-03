import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 7777;
const FAST_API_URL = 'https://sayo-menu-api.onrender.com';

app.use(express.json());
app.use(express.static(__dirname));

// ---------- PROXY ENDPOINTS ----------

app.get('/api/get_all', async (req, res) => {
    try {
        const response = await fetch(`${FAST_API_URL}/get_all`);
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/get_all:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.get('/api/get_signature_food', async (req, res) => {
    try {
        const response = await fetch(`${FAST_API_URL}/get_signature_food`);
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/get_signature_food:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

// ✅ FIXED: use DELETE method to match FastAPI
app.delete('/api/delete_signature_food', async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ success: false, message: 'Missing name parameter' });
    }
    try {
        const response = await fetch(`${FAST_API_URL}/delete_signature_food?name=${encodeURIComponent(name)}`, { method: 'DELETE' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/delete_signature_food:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.post('/api/insert', async (req, res) => {
    const params = new URLSearchParams(req.query).toString();
    try {
        const response = await fetch(`${FAST_API_URL}/insert?${params}`, { method: 'POST' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/insert:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.post('/api/insert_signature', async (req, res) => {
    const params = new URLSearchParams(req.query).toString();
    try {
        const response = await fetch(`${FAST_API_URL}/insert_signature?${params}`, { method: 'POST' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/insert_signature:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.put('/api/update_name', async (req, res) => {
    const params = new URLSearchParams(req.query).toString();
    try {
        const response = await fetch(`${FAST_API_URL}/update_name?${params}`, { method: 'PUT' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/update_name:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.put('/api/update_description', async (req, res) => {
    const params = new URLSearchParams(req.query).toString();
    try {
        const response = await fetch(`${FAST_API_URL}/update_description?${params}`, { method: 'PUT' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/update_description:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.put('/api/update_price', async (req, res) => {
    const params = new URLSearchParams(req.query).toString();
    try {
        const response = await fetch(`${FAST_API_URL}/update_price?${params}`, { method: 'PUT' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/update_price:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.put('/api/update_category', async (req, res) => {
    const params = new URLSearchParams(req.query).toString();
    try {
        const response = await fetch(`${FAST_API_URL}/update_category?${params}`, { method: 'PUT' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/update_category:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.put('/api/update_image', async (req, res) => {
    const params = new URLSearchParams(req.query).toString();
    try {
        const response = await fetch(`${FAST_API_URL}/update_image?${params}`, { method: 'PUT' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/update_image:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.put('/api/update_availability', async (req, res) => {
    const params = new URLSearchParams(req.query).toString();
    try {
        const response = await fetch(`${FAST_API_URL}/update_availability?${params}`, { method: 'PUT' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/update_availability:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.put('/api/update_full', async (req, res) => {
    const params = new URLSearchParams(req.query).toString();
    try {
        const response = await fetch(`${FAST_API_URL}/update_full?${params}`, { method: 'PUT' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/update_full:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.delete('/api/delete', async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ success: false, message: 'Missing name parameter' });
    }
    try {
        const response = await fetch(`${FAST_API_URL}/delete?name=${encodeURIComponent(name)}`, { method: 'DELETE' });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in /api/delete:', error.message);
        res.status(500).json({ success: false, message: 'Failed to connect to FastAPI' });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', node_port: PORT, fastapi: FAST_API_URL });
});

// Serve admin4.html for any unmatched route
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Admin server running at http://localhost:${PORT}`);
    console.log(`➡️  API proxy to ${FAST_API_URL}`);
});
