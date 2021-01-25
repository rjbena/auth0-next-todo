import { table } from "./utils/Airtable";

export default async (req, res) => {
  const { desc } = req.body;
  try {
    const createdRecords = await table.create([{ fields: { desc } }]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };

    res.statusCode = 200;
    return res.json(createdRecord);
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: "Failed to create table" });
  }
};
