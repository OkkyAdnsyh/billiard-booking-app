import React from 'react';
import { Booking } from '@/components/blocks/Booking';
import { FormControl } from '@/components/modules/FormControl';
import Form from '@/components/elements/Form/Form';
import { sendFormData } from '@/utils/action/action';

const page = () => {
  return (
    <>
      <Booking.CreateBooking>
        <Form method='POST' action={sendFormData}>
          <FormControl.BookingForm/>
        </Form>
      </Booking.CreateBooking>
    </>
  )
}

export default page