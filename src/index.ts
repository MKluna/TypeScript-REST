import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;
import diaryRouter from './routes/diaries'; 

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log("Server Ready");
});
