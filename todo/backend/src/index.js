const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.post("/todo", async function (req, res) {
  const todoPayload = req.body;
  const parsePayload = createTodo.safeParse(todoPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      message: "Please check the input",
    });
  }

  await todo.create({
    title: todoPayload.title,
    description: todoPayload.description,
    completed: false,
  });

  res.status(201).json({
    message: "Create new todo",
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      message: "Please check the input",
    });
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3001, () => {
  console.log("App is running on port 3000");
});
