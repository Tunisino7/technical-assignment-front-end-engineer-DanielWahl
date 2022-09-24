import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";
type Data = {
    data?: any;
    status: number | string;
    error?: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === "GET") {
        try {
            const jsonDirectory = path.join(process.cwd(), "data");

            //Read the json data file data.json
            const posts = await fs.readFile(
                jsonDirectory + "/posts.json",
                "utf-8",
            );

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
