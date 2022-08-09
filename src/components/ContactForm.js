import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux';
function ContactForm() {
  const dispatch = useDispatch()
  const [name,setName] = useState('')
  const [phoneNum,setPhoneNum] = useState('')
  const addContact = (event)=>{
    event.preventDefault();
    dispatch({
      type:'ADD_CONTACT',
      payload : {name,phoneNum}
    })
    setName("");
    setPhoneNum('');
  }
  return (
    <div>
       <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="이름을 입려해주세요." onChange={(event)=>setName(event.target.value)} value={name}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event)=>setPhoneNum(event.target.value)} value={phoneNum}/>
        </Form.Group>
        
        <Button variant="primary" type="submit" >
          추가하기
        </Button>
      </Form>
    </div>
  )
}


export default ContactForm