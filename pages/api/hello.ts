import { NextApiRequest, NextApiResponse } from "next";

//Could be interface or type
interface Data {
  name:string;
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req: NextApiRequest, res:NextApiResponse<Data>) {
  res.status(200).json({
    name:'John Wick',
  })
}