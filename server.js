// server.js - простой API для сравнения цен
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Маршрут: /compare?query=наушники
app.get('/compare', async (req, res) => {
  const query = req.query.query;
  if (!query) return res.json({ error: 'Укажите запрос, например ?query=earbuds' });

  try {
    // Пример данных (временно, без реальных API)
    const aliPrice = Math.random() * 20 + 10; // от 10 до 30 $
    const temuPrice = Math.random() * 15 + 5; // от 5 до 20 $

    res.json({
      query: query,
      aliexpress: { price: aliPrice.toFixed(2), url: `https://aliexpress.com/wholesale/${query}.html` },
      temu: { price: temuPrice.toFixed(2), url: `https://temu.com/search/${query}` },
      cheaper: temuPrice < aliPrice ? 'temu' : 'aliexpress'
    });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка' });
  }
});

app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));
