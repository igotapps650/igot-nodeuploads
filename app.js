const express = require("express");
const app = express();
const multer = require("multer");
const ejs = require("ejs");

// EJS
app.set("view engine", "ejs");

// Public Folder
app.use(express.static("./public"));

const upload = require("./model/multer");
//UPLOADING A SINGLE IMAGE -FILE TYPE IS NOT CHECKED
app.post("/singleImage", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single File Uploaded");
});

//UPLOADING MULTIPLE IMAGES -FILE TYPE IS NOT CHECKED
app.post("/multipleImages", upload.array("images", 5), (req, res) => {
  console.log(req.files);
  res.send("Multiple  Files Uploaded");
});

app.get("/", (req, res) => res.render("index"));

const port = 3000;

app.listen(process.env.PORT || port, () =>
  console.log(`Server started on port ${port}`)
);
