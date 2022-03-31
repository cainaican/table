import './scss/index.scss'
import $ from "jquery";
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

const { createTemplate } = Main()

const header = $('.header')
header.append(Header())

const main = $('.main')
main.append(createTemplate())

const footer = $('.footer')
footer.append(Footer())

