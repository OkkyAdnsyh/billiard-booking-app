import { IProductTable } from "@/lib/Interface/interaface";
import mongoose from "mongoose";

const {Schema, model} = mongoose;

const tableSchema = new Schema<IProductTable>({
    tableType: String,
    hourlyPrice: Number,
    coachPrice: Number,
    isPlaying: mongoose.SchemaTypes.ObjectId,
    onQueued: mongoose.SchemaTypes.ObjectId,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }    
})

const Table = model<IProductTable>('Table', tableSchema);

export default Table