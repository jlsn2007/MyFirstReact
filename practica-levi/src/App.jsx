import './App.css'
import Navbar from './components/Navbar'
import Boton from './components/Boton'
import Alerta from './components/Alert'
import Acordion from './components/Accordion'
import Fr from './components/TittleCard'
import Btngrp from './components/Buttongroup'
import Card from './components/Card'
import Carru from './components/Carrousel'
import Clsbtn from './components/Clsbtn'
import Listgroup from './components/Listgroup'
import Modal from './components/Modal'
import Progress from './components/Progress'
import Spinner from './components/Spinners'
import Toast from './components/Toasts'
import Cianlert from './components/Cianlert'

function App() {

  return (
    <>

        <Navbar></Navbar>
        <Clsbtn></Clsbtn>
        <h1>Hola crack 😎🤙</h1>
        <Toast></Toast>
        <Boton titulo={"Hola"}/>
        <Alerta></Alerta>
        <Acordion></Acordion>
        <Fr></Fr>
        <Btngrp></Btngrp>
        <Card></Card>
        <Carru></Carru>
        <Listgroup></Listgroup>
        <Modal></Modal>
        <Progress></Progress>
        <Spinner></Spinner>
        <Cianlert></Cianlert>

        
    </>
  )
}

export default App
