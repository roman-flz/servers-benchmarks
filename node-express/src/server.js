import express from "express";
const app = express();

const PORT = process.env.PORT | 3000;
const root = "/api/v1";

app.get(`${root}/`, (req, res) => {});
app.get(`${root}/:id/todo`, (req, res) => {});
app.post(`${root}/todo`, (req, res) => {});
app.delete(`${root}/:id/delete`, (req, res) => {});
app.put(`${root}/:id/delete`, (req, res) => {});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
