import { Types } from 'mongoose';

export interface IProductTable {
    tableType: string,
    hourlyPrice: number,
    coachPrice: number,
    isPlaying: Types.ObjectId | null,
    onQueued: Types.ObjectId | null,
    createdAt: Date,
    updatedAt: Date
}

export interface IPoolTable{
    type: string,
    hourlyPrice: number,
    coachPrice: number,
    isPlaying: Types.ObjectId | null,
    onQueued: Types.ObjectId | null,
    package: Types.ObjectId[],
    createdAt: Date,
    updatedAt: Date
}