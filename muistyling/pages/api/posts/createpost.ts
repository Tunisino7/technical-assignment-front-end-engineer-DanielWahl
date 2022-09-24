import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

type Data = {
    data?: any;
    status: number | string;
    error?: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === "POST") {
        try {
            let body = req.body;
            const jsonDirectory = path.join(process.cwd(), "data");

            //Read the json data file data.json
            const array = await fs
                .readFile(jsonDirectory + "/posts.json", "utf-8")
                .then((result) => {
                    return JSON.parse(result);
                })
                .then((result) => {
                    result.push(body);
                    return result;
                });

            await fs.writeFile(
                jsonDirectory + "/posts.json",
                JSON.stringify(array),
                "utf-8",
            );

            const now = await fs
                .readFile(jsonDirectory + "/posts.json", "utf-8")
                .then((result) => JSON.parse(result));

            res.status(200).json({
                status: 200,
                data: { success: true, data: now },
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
