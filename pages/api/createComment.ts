// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from "@sanity/client";
import type { NextApiRequest, NextApiResponse } from "next";
const { nanoid } = require("nanoid");

type Data = {
  name: string;
};
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_TOKEN,
};
export const client = sanityClient(config);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } = JSON.parse(req.body);

  try {
    await client
      .patch(_id)
      // Add the items after the last item in the array (append)
      .insert("after", "comments[-1]", [
        // Add a `_key` unique within the array to ensure it can be addressed uniquely
        // in a real-time collaboration context
        {
          _key: nanoid(),
          _type: "comment",
          active: false,
          name,
          email,
          comment,
        },
      ])
      .commit()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  } catch (error) {
    return res.status(500).json({ message: `Couldn't submit comment`, error });
  }

  res.status(200).json({ message: `Comment of ${name} submitted for review` });
}
