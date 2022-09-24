import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    data?: any;
    status: number | string;
    error?: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ status: 200, data: "John Doe" });
};

export default handler;
