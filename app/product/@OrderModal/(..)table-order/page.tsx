import Modal from '@/components/blocks/Modal/Modal';
import Summary from '@/components/modules/Order/Summary';
import React from 'react';

const ModalOrderPage = () => {
  return (
    <>
      <Modal>
        <Summary 
          type='Modal' 
          tableType='Reguler' 
          orderID={'#234213'} 
          onWaiting={true}
          onQueued={false}
          isOpen={false}
        />
      </Modal>
    </>
  )
}

export default ModalOrderPage