import express from "express";

const app = express();

app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.status(200).send("Hello, World Ayushman!");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "B joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "C joke",
      content:
        "Why don't skeletons fight each other? They don't have the guts!",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
