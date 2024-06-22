import React from 'react';
import Form from '@/components/elements/Form/Form';
import Input from '@/components/elements/Input/Input';
import { Selector } from '../../Select';
import styles from '@/styles/components/modules/selector.module.scss'
import Checkbox from '@/components/elements/Checkbox/Checkbox';
import { ButtonElements } from '@/components/elements/Button';


const CreateBookForm = () => {
  return (
    <>
      <Form>
        <Input type='text' name='fullname' inputLabel="your fullname" placeholder='fullname' />
        <Input type='email' name='email' inputLabel="Email" placeholder='email@mail.com' />
        <Input type='tel' pattern='+62-8[0-9]{2}-[0-9]{4}-[0-9]{4}' name='waNumber' inputLabel="Whatsapp number" placeholder='+62' />
        <Selector.TableSelect />
        <Selector.PackageSelect />
        <p className={styles.separator}>Or</p>
        <Checkbox name='isOpenTable' label='Playing with Open Table' info='Playing without timer, pay based on how long you played'/>
        <section className={styles['btn_group_main']}>
          <ButtonElements.Submit content='Book Table' />
          <ButtonElements.Reset content='Cancel' />
        </section>
      </Form>
    </>
  )
}

export default CreateBookForm