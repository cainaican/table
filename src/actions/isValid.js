
  //валидация формы
  export const isValid = (data) => {
    if (data.name.length < 1){
      console.log('Неверно указано имя')
      return false
    }
    if (data.username.length < 1){
      console.log('Неверно указана должность')
      return false
    }
    if (data.age < 18 || isNaN(data.age)){
      console.log('Неверно указан возраст')
      return false
    }
    if (data.company.bs < 1){
      console.log('Неверно указаны компетенции')
      return false
    }
    return true
  }
  
  //валидация поля
  export const isValidHeader = (e) => {
    let v = false
    switch (e.target.name){
      case 'name': e.target.value.length < 1 ? v = false : v = true;
        break; 
      case 'position': e.target.value.length < 1 ? v = false  : v = true;
        break;
      case 'age': e.target.value < 18 || isNaN(e.target.value) ? v = false  : v = true;
        break;
      case 'competitions': e.target.value.length < 1 ? v = false  : v = true;
        break;
      default: false
    }
    return v
  }