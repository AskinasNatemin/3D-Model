import multer from "multer";
import imageSchema from "./imageSchema.js";

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
export const upload = multer({ storage });

export const addModel = async (req, res) => {
  try {
    const newModel = new imageSchema({
      filename: req.file.filename,
      filepath: req.file.path,
    });
    await newModel.save();
    res.status(201).json(newModel);
  } catch (error) {
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

export const getAllModels = async (req, res) => {
  try {
    const models = await imageSchema.find();

    if (models.length === 0) {
      return res.status(404).json({ message: "No models found" });
    }

    res.status(200).json(models);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch models", details: error.message });
  }
};
