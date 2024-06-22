'use client'
import React, { useState } from 'react';
import styles from '@/styles/components/elements/form.module.scss';
import Input from '@/components/elements/Input/Input';
import { IFormBooking, IPackage } from '@/lib/Interface/interface';
import { getPackageDate } from '@/utils/action/action';
import Selector from '../../Select/Selector/Selector';
import BookingOption from '../../BookingOption/BookingOption';
import Submit from '@/components/elements/Button/Submit/Submit';
import Reset from '@/components/elements/Button/Reset/Reset';

const BookingForm = () => {
    const [bookingData, setBookingData] = useState<IFormBooking>({
        fullName: '',
        email: '',
        waNumber: '',
        tableType: '',
        package: null,
        isOpenTable: false
    })
    const [packages, setPackages] = useState<IPackage[] | []>([])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value} = e.target;
        setBookingData(bookingData => ({...bookingData, [name]:value}))
    }
    const handleTableSelect = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const {innerHTML} = e.currentTarget;
        setBookingData(bookingData => ({...bookingData, tableType:innerHTML}));
        const packagesData = await getPackageDate(innerHTML);
        setPackages(packagesData);
    }
    const handlePackageSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {innerHTML} = e.currentTarget;
        setBookingData(bookingData => ({...bookingData, package:innerHTML}))
    }
    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        let emptyBookingData: IFormBooking = {
            fullName:'',
            email: '',
            waNumber: '',
            tableType: '',
            package: null,
            isOpenTable: false
        }
        setPackages([]);
        setBookingData(bookingData => ({...bookingData, emptyBookingData}));
    }
  return (
    <>
        <section className={styles.container}>
            <Input type='text' name='fullName' label="your fullname" placeholder='fullname' onChange={handleInputChange} value={bookingData.fullName}/>
            <Input type='email' name='email' label="Email" placeholder='email@mail.com' onChange={handleInputChange} value={bookingData.email} />
            <Input type='tel' name='waNumber' label="Whatsapp number" placeholder='+62' onChange={handleInputChange} value={bookingData.waNumber}/>
            <Selector name='tableType' value={bookingData.tableType} onClick={handleTableSelect} option={['Reguler Table', 'VIP Room']} label='Choose Table Type' />
            {bookingData.tableType !== '' ? 
                <>
                    <BookingOption selectorName='package' checkboxName='isOpenTable' label='Playing with Open Table' info='Playing without timer, pay based on how long you played' option={packages.map(item => item?.packageName)} value={bookingData.package || ''} onCLick={handlePackageSelect} />                
                </> :
                <></>
            }
            <section className={styles['btn_group_main']}>
                <Submit content='Book Table' />
                <Reset content='Cancel' onClick={handleReset}/>
            </section>
        </section>
    </>
  )
}

export default BookingForm