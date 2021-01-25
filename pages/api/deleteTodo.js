import { table, getMinifiedRecord } from "./utils/Airtable";

export default async (req, res) => {
  const { id } = req.body;

  try {
    await table.destroy([id]);

    res.statusCode = 200;
    return res.json("Todo deleted");
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: "Failed to delete todo" });
  }
};
