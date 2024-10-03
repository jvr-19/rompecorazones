import React from 'react'
import './App.css'
import Ficha from './components/Ficha'
import FormRegistro from './components/FormRegistro'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

function App() {

  const animals = [{
    id: 0,
    animal: 'gato',
    atribute: 'feliz',
    imageUrl: '/cat-4189697_640.jpg',
    imageSize: 150,
    description: 'Gato común',
  },
  {
    id: 1,
    animal: 'perro',
    atribute: 'bello',
    imageUrl: '/dog.jpg',
    imageSize: 150,
    description: 'Perro callejero',
  },
  {
    id: 2,
    animal: 'loro',
    atribute: 'hablador',
    imageUrl: '/bird.jpg',
    imageSize: 150,
    description: 'Loro de la jungla',
  },
  {
    id: 3,
    animal: 'tortuga',
    atribute: 'perezosa',
    imageUrl: '/turtle.jpg',
    imageSize: 150,
    description: 'Tortuga',
  }]

  return (
    <>
      <List>
        {animals.map((animal) => (
          <ListItem>
            <Ficha
              animal={animal.animal}
              atribute={animal.atribute}
              imageUrl={animal.imageUrl}
              imageSize={animal.imageSize}
              description={animal.description}
            />
          </ListItem>
        ))}
      </List>



      {/* <FormRegistro /> */}
    </>
  )
}

export default App
