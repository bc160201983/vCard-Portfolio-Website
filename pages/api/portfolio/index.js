import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  console.log(req.query);
  //   // Check for secret to confirm this is a valid request
  //   if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
  //     return res.status(401).json({ message: "Invalid token" });
  //   }
  await cors(req, res);
  if (req.method === "GET") {
    try {
      await res.unstable_revalidate("/portfolio");
      return res.json({ revalidated: true, msg: "get Request" });
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send("Error revalidating");
    }
  }
  //else if (req.query === "POST") {
  //   try {
  //     await res.unstable_revalidate("/portfolio/" + req.body.id);

  //     return res.json({ revalidated: true, msg: "POST REQUESt" });
  //   } catch (error) {
  //     return res.status(500).send("Error revalidating POST");
  //   }
  // }
}
