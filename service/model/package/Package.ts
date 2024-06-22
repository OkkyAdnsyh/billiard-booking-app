import { IPackage } from "@/lib/Interface/interface";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const packageSchema = new Schema<IPackage>({
    packageName: String,
    price: Number,
    timeCount: Number,
    tableType: {
        type: String,
        enum: ['Reguler Table', 'VIP Room']
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

const Package = mongoose.models.Package || model<IPackage>('Package', packageSchema);

export default Package