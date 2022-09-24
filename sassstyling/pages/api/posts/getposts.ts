import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    data?: any;
    status: number | string;
    error?: any;
};

let posts = require("../../data/posts.json");

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    //console.log(posts);
    if (req.method === "GET") {
        try {
            res.status(200).json({
                status: 200,
                data: posts ?? [],
            });
        } catch (error: any) {
            res.status(400).json({
                data: error,
                status: error.status,
                error: error?.response?.text ?? error,
            });
        }
    } else {
        res.status(405).json({
            status: 405,
            error: `Method '${req.method}' Not Allowed`,
        });
    }
};
export default handler;
