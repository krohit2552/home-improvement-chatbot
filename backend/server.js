const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Route to handle lead capture
app.post('/api/lead', (req, res) => {
    const { name, email, phone, service } = req.body;
    // Here, you would typically store or process the lead data
    console.log(`Lead captured: Name: ${name}, Email: ${email}, Phone: ${phone}, Service: ${service}`);
    res.json({ message: 'Lead captured successfully!' });
});

// Route to handle appointment scheduling (simulation)
app.post('/api/appointment', (req, res) => {
    const { name, email, phone, contractor } = req.body;
    // Simulate scheduling appointment
    console.log(`Appointment scheduled with ${contractor} for ${name}`);
    res.json({ message: 'Appointment scheduled successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
