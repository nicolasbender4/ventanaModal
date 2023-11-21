import logo from './logo.svg';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody,ModalFooter, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


function App() {
  const [abrir,setAbrir] = useState(false);
  console.log(abrir)

  const abrirModal = () => setAbrir(!abrir); 

  const modalStyles = {
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)"
  }

  return (
    <>
    <div className="App">
      <header className="App-header">
        <Button color='success' onClick={()=> {abrirModal(true)}}>Mostrar Modal</Button>
      </header>
    </div>

    <Modal isOpen={abrir} style={modalStyles}>
      <ModalHeader>
        Iniciar Sesión
      </ModalHeader>
      <ModalBody>
      <FormGroup>
          <Label for='usuario'>Usuario</Label>
          <Input type='text'id='usuario'/>
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input type='text'id='password'/>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color='primary'>Iniciar Sesión</Button>
        <Button color='secondary' onClick={abrirModal}>Cerrar</Button>
      </ModalFooter>
    </Modal>
    </>
  );
}

export default App;
