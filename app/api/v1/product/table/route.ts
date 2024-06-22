import { connect } from "@/service/connectDB/connectDB";
import Package from "@/service/model/package/Package";
import PoolTable from "@/service/model/product/poolTable/PoolTable";
import { HydratedDocument } from "mongoose";

export async function POST(req : Request, res : Response) {
    await connect();

    const packages = await Package.insertMany([
        {
            packageName: '2-Hour Play',
            price: 70000,
            timeCount: 2 * 1000 * 60 * 60,
            tableType: 'Reguler Table'
        },
        {
            packageName: '7-Hour Play Daylight',
            price: 70000,
            timeCount: 7 * 1000 * 60 * 60,
            tableType: 'Reguler Table'
        },
        {
            packageName: '1-Hour Play',
            price: 35000,
            timeCount: 1 * 1000 * 60 * 60,
            tableType: 'Reguler Table'
        },
        {
            packageName: '2-Hour Play',
            price: 70000,
            timeCount: 2 * 1000 * 60 * 60,
            tableType: 'VIP Room'
        },
        {
            packageName: '7-Hour Play Daylight',
            price: 70000,
            timeCount: 7 * 1000 * 60 * 60,
            tableType: 'VIP Room'
        },
        {
            packageName: '1-Hour Play',
            price: 35000,
            timeCount: 1 * 1000 * 60 * 60,
            tableType: 'VIP Room'
        }
    ])
    const tables = await PoolTable.insertMany([
        {
            tableType: 'Reguler Table',
            tableNumber: 1,
            hourlyPrice: 35000,
            coachPrice: 50000
        },
        {
            tableType: 'VIP Room',
            tableNumber: 2,
            hourlyPrice: 35000,
            coachPrice: 50000
        },
    ])

    return Response.json({message : 'success'});

} 