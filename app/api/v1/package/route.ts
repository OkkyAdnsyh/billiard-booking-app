import { connect } from "@/service/connectDB/connectDB";
import Package from "@/service/model/package/Package";
import { NextRequest } from "next/server";

export async function POST(req:Request, res:Response) {
  await connect();
  const body = await req.json();
  const packages = await Package.find({tableType:body?.tableType}).select('packageName')

  return Response.json(packages);
}