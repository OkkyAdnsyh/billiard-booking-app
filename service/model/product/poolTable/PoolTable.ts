import { IPoolTable } from "@/lib/Interface/interface";
import mongoose from "mongoose";

const {Schema, model} = mongoose;

const poolTableSchema = new Schema<IPoolTable>({
    tableType: {
        type: String,
        enum: ['Reguler Table', 'VIP Room']
    },
    tableNumber: Number,
    hourlyPrice: Number,
    coachPrice: Number,
    isPlaying: {
        type: mongoose.SchemaTypes.ObjectId,
        default: null
    },
    onQueued: {
        type: mongoose.SchemaTypes.ObjectId,
        default: null
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }
})

const PoolTable = mongoose.models.PoolTable || model<IPoolTable>('PoolTable', poolTableSchema);

export default PoolTable;