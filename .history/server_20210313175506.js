import express from 'express';
const app =express();
const PORT= process.env.PORT || 5000;
app.get('/', function(req, res) {res.send()})
app.listen(PORT, ()=>console.log('listening on http:localhost:${PORT}'));