import { IProductTable } from "@/lib/Interface/interaface";
import { connect } from "@/service/connectDB/connectDB";
import Table from "@/service/model/product/table/Table";
import { HydratedDocument } from "mongoose";

export async function POST(req : Request, res : Response) {
    await connect();

    const table = await Table.insertMany([
        {
            tableType: 'reguler',
            hourlyPrice: 35000,
            coachPrice: 35000
        },
        {
            tableType: 'vip',
            hourlyPrice: 55000,
            coachPrice: 55000
        }
    ])

    return Response.json({message : 'success'});

} 