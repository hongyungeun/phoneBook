import React,{ useState,useEffect } from 'react'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'
import {useSelector} from 'react-redux'
function ContactList() {
  const { contactList, keyword } = useSelector((state) => state);
  // const contactList = useSelector(state=>state.contactList)
  // const keyword = useSelector(state=>state.keyword)
  let [searchList,setSearchList] = useState([])

  useEffect(()=>{
    if(keyword !== ''){
      let list = contactList.filter((item) => item.name.includes(keyword));
      setSearchList(list)
    }else {
      setSearchList(contactList)
    }
  },[keyword])
  return (
    <div>
      <SearchBox/>
      <div>
        <p>num:{searchList.length}</p>
        {searchList && searchList.map((item,i)=>(
          <ContactItem item={item}key={i}/>
        ))}
      </div>
      
    </div>
  )
}

export default ContactList