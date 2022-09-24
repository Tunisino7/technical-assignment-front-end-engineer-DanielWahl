import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";
import { IPost } from "../../../types/types";

type Data = {
    data?: any;
    status: number | string;
    error?: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === "GET") {
        try {
            const slug = req.query.slug;
            const jsonDirectory = path.join(process.cwd(), "data");

            //Read the json data file data.json
            const post = await fs
                .readFile(jsonDirectory + "/posts.json", "utf-8")
                .then((result) => {
                    return JSON.parse(result);
                })
                .then((result) => {
                    let single = result.filter(
                        (item: IPost) => item.slug === slug,
                    );
                    if (single.length > 0) return single[0];
                    return null;
                });

            res.status(200).json({
                status: 200,
                data: post ?? null,
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
