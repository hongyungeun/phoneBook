import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactForm from './components/ContactForm';
import {Container, Row, Col} from 'react-bootstrap'
import ContactList from './components/ContactList';
// 왼쪽에는 연락처 등록폼 오른쪽에는 연락처 리스트와 search창이 있다
// 리스트에 유저 이름과 전화번호를 추가할 수 있다.
// 리스트에 아이템이 몇개 있는지 보인다.
// 사용자가 유저를 이름 검색으로 찾을 수 있다.

function App() {
  return (
    <div className="App">
      <h1>Phone Book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
