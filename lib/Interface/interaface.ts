import { Types } from 'mongoose';

export interface IProductTable {
    tableType: string,
    hourlyPrice: number,
    coachPrice: number,
    isPlaying: Types.ObjectId,
    onQueued: Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
}