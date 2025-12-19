import Contact from "../models/ContactMessage.js";

export const saveMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await Contact.create({ name, email, message });
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
