
class Store {
  #contacts = []
  
  constructor(data){
    this.#contacts.concat(data)
  }

  pushContact(data){
    this.#contacts.push(data)
  }

  deleteContact(id){
    this.#contacts = this.#contacts.filter(data => data.id != id)
  }

  contacts(){
    return this.#contacts
  }
  
  save(data){
    this.#contacts = this.#contacts.map(contact => {
      if (contact.id === data.id){
        return data
      }
      return contact
    })
  }
}

const store = new Store()

export default store