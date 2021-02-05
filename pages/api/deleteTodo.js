import { table, getMinifiedRecord } from "./utils/Airtable";
import auth0 from "../../utils/auth0";
import OwnsRecord from "../../middleware/OwnsRecord";

export default OwnsRecord(async (req, res) => {
  const { id } = req.body;
  const { user } = await auth0.getSession(req);
  try {
    await table.destroy([id]);

    res.statusCode = 200;
    return res.json("Todo deleted");
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: "Failed to delete todo" });
  }
});
