import News from '../models/news.js';

export async function createNews(req, res) {
  try {
    console.log("reqbody",req.body)
    const news = new News(req.body);
    await news.save();
    res.status(201).send(news);
  } catch (error) {
    res.status(400).send({ error: 'Error saving news' });
  }
}

export async function getAllNews(req, res) {
  try {
    const news = await  News.find({});
    res.status(200).send(news);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching news' });
  }
}