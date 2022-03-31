import store from "../store/store";
import Table from "../components/table/Table";
import { isValid, isValidHeader } from "./isValid";
import { sendData } from "./sendData";


export default () => {

  const { showContacts } = Table()

  // работа со store
  const deleteContact = (e) => {
    store.deleteContact(e.target.id)
    showContacts(store)
    deleteButtonListener(store)
    onInputChangeListener(store)
  }

  const pushContact = (data) => {
    store.pushContact(data)
    showContacts(store)
    deleteButtonListener(store)
    onInputChangeListener(store)
  }

  //добавление нового сотрудника
  const addButton = document.querySelector('.btn-primary')

  addButton.addEventListener('click', () => {
    let newContact = {
      id: (Math.random() * 1000).toFixed(0),
      name: '',
      username: '',
      age: '',
      company: {
        bs: ''
      }
    }
    pushContact(newContact)
  })

  //Отправка контактов

  const onSubmit = () => {
    store.contacts().map(c => {
    const formSubmit = document.querySelector(`#form${c.id}`)
    const formData = new FormData(formSubmit)
        
      let newContact = {
        id: c.id,
        name: formData.get('name'),
        username: formData.get('position'),
        age: formData.get('age'),
        company: {
          bs: formData.get('competitions')
        }
      }
        if (isValid(newContact)) {
          formSubmit.classList.remove('validation-error')
          store.save(newContact)
        } else {
          formSubmit.classList.add('validation-error')
        }
    })

    if (document.querySelectorAll('.validation-error').length > 0){
      alert('Неправильно заполнены поля')
    } else {
      sendData('https://jsonplaceholder.typicode.com/users', JSON.stringify(store.contacts()))
    }
  }
  
  // работа c listeners

  const deleteButtonListener = (store) => {
    store.contacts().map((c) => {
      const button = document.querySelector(`.btn${c.id}`)  
      button.addEventListener('click', event => deleteContact(event));
    })
  }
  
  const onInputChangeListener = (store) => {
    store.contacts().map((c) => {

      const form = document.querySelector(`#form${c.id}`)
      const checkValidHeader = (e) => {
        if (!isValidHeader(e)) {
          e.target.classList.add('validation-error')
        } else {
          e.target.classList.remove('validation-error')
        }
      }
      form.addEventListener('change', e => checkValidHeader(e));
    })
  }
 
  const storeSubmit = document.querySelector('.btn-submit-all')
  storeSubmit.addEventListener('click', onSubmit)  
  
  //Listeners для стартовых данных
  deleteButtonListener(store)
  onInputChangeListener(store)
}
