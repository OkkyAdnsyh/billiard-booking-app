import React from 'react';
import { Booking } from '@/components/blocks/Booking';
import { FormControl } from '@/components/modules/FormControl';

const page = () => {
  return (
    <>
      <Booking.CreateBooking>
        <FormControl.CreateBookForm />
      </Booking.CreateBooking>
    </>
  )
}

export default page