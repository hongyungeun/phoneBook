import React from 'react'
import {Row,Col} from 'react-bootstrap'
function ContactItem({item}) {
  return (
    <div className='right_box'>
      <Row className='item_list'>
        <Col lg={2}>
          <img width={50} src='https://www.pngitem.com/pimgs/m/433-4332914_13-circle-hd-png-download.png' />
        </Col>
        <Col lg={10}>
          <div>
            {item?.name}
          </div>
          <div>
            {item?.phoneNum}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem