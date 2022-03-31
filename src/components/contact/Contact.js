import './index.scss'

const Contact = (prop) => {

  const createTemplate = (prop) => {

    const contact = document.getElementsByClassName('.contact')
    contact.innerHTML = ` 
      <div class="contact-inner">
        <form id="form${prop.id}" class="contact-from">
          <div class="input-group mb-3">
            <input name="name" type="text" class="form-control" 
            placeholder="ФИО" aria-label="ФИО" 
            aria-describedby="basic-addon1" value=${prop.name}>
          </div>
          <div class="input-group mb-3">
            <input name="position" type="text" class="form-control" 
            placeholder="Должность" aria-label="Должность" 
            aria-describedby="basic-addon1" value=${prop.username}>
          </div>
          <div class="input-group mb-3">
            <input name="age" type="text" class="form-control" 
            placeholder="Возраст" aria-label="Возраст" 
            aria-describedby="basic-addon1" value=${prop?.age || 18}>
          </div>
          <div class="input-group">
            <textarea name="competitions" class="form-control" 
            aria-label="Компетенции" >${prop.company.bs}</textarea>
          </div>
          <div class="contact-remove-button">
            <button 
              id=${prop.id} 
              type="button" 
              class="btn btn-outline-danger btn${prop.id}"
              >
                -
              </button>
          </div>
        </form>
      </div >
      `
    return contact.innerHTML
  } 
  
  return createTemplate(prop)
} 

export default Contact