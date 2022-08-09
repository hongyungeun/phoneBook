import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch,useSelector} from 'react-redux'
function SearchBox() {
  const [keyword,setKeyword] = useState('')
  const dispatch = useDispatch()
  let key = useSelector((state)=>(state))
  const searchBtn = ()=>{
    
    dispatch({
      type:'SEARCH',
      payload:{keyword}
    })
    console.log(key)
  }
  return (
    <Row>
      <Col>
        <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(event)=>setKeyword(event.target.value)}/>
      </Col>
      <Col>
        <Button variant="primary" type="button" onClick={searchBtn}>
          찾기
        </Button>
      </Col>
    </Row>
  )
}

export default SearchBox