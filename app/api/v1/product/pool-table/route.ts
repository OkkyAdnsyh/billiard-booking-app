import { TPoolTableCard } from "@/lib/Type/type";
import { connect } from "@/service/connectDB/connectDB";
import Table from "@/service/model/product/table/Table";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    await connect();

    try{
        const allPoolTable = await Table.find({}).select('tableType isPlaying onQueued');
        const result: TPoolTableCard[] = allPoolTable.map(table => ({
            productType: table?.tableType,
            isOpenTable: table?.isPlaying?._id || null,
            playerID: table?.isPlaying?._id || null,
            bookingID: table?.onQueued?._id || null,
        }))
        return Response.json(result);
    }catch(err){
        return Response.json(err);
    }


}