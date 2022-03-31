import './index.scss'
import template from './index.pug'
import Contact from '../contact/Contact'
import actions from '../../actions/actions'


const Table = () => {

  const fetchList = (store) => {
    const listOfTickets = fetch(`https://jsonplaceholder.typicode.com/users`)
    return listOfTickets
      .then(res => res.json())
      .then(data => {
        data.forEach(d => {
          store.pushContact(d)
        })
        showContacts(store)
        actions()
      })
      .catch(e => console.warn(e.message))
  }
  

  const showContacts = (store) => {

    let table__contacts = document.querySelector('.table__contacts')

    let contactsArray = store.contacts()
      contactsArray = contactsArray.map(el => {
          return Contact(el)
        })
    table__contacts.innerHTML = contactsArray.join('')
  }

  return {  
    template: template, 
    showContacts: showContacts, 
    fetchList:fetchList, 
  }
} 

export default Table