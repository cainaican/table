import Menu from '../menu/Menu'
import Search from '../search/Search'
import Table from '../table/Table'
import MainFooter from '../main-footer/MainFooter'
import store from '../../store/store'

const Main = () => {

  const { template, fetchList } = Table()

  fetchList(store)

  const createTemplate = () => {
    let main = document.getElementsByClassName('.main__inner')
    main.innerHTML = ''
      main.innerHTML = Menu()
      main.innerHTML += Search()
      main.innerHTML += template() 
      main.innerHTML += MainFooter()
    return main.innerHTML
  }

  return {createTemplate: createTemplate}
} 

export default Main