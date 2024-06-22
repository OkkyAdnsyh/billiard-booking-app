import { Types } from 'mongoose';
import { HTMLProps } from 'react';

export interface IProductTable {
    tableType: string,
    hourlyPrice: number,
    coachPrice: number,
    isPlaying: Types.ObjectId | null,
    onQueued: Types.ObjectId | null,
    createdAt: Date,
    updatedAt: Date
}

export interface IInput extends HTMLProps<HTMLInputElement>{
    label: string,
    value: string
}

export interface IFormBooking{
    fullName: string,
    email: string,
    waNumber: string,
    tableType: string,
    package: string | null,
    isOpenTable: boolean
}
export interface IPoolTable{
    tableType: string,
    tableNumber: number,
    hourlyPrice: number,
    coachPrice: number,
    isPlaying: Types.ObjectId | null,
    onQueued: Types.ObjectId | null,
    createdAt: Date,
    updatedAt: Date
}

export interface IPackage{
    packageName: string,
    price: number,
    timeCount: number,
    tableType: string,
    createdAt: Date,
    updatedAt: Date
}