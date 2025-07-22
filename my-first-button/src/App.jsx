import { useState } from 'react'
import './App.css'

const TYPES = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}

const CONFIG = {
  [TYPES.DEFAULT]: { BG_COLOR: '#448a97', TEXT: 'Color por defecto' },
  [TYPES.PRIMARY]: { BG_COLOR: '#0c1c36', TEXT: 'Color primario' },
  [TYPES.SECONDARY]: { BG_COLOR: '#18360c', TEXT: 'Color secundario' }
}

const CONFIG_FLOW = new Map([
  [TYPES.DEFAULT, TYPES.PRIMARY],
  [TYPES.PRIMARY, TYPES.SECONDARY],
  [TYPES.SECONDARY, TYPES.DEFAULT],
])

const App = () => {
  const [type, setType] = useState(TYPES.DEFAULT)

  const handleType = () => {
    const nextType = CONFIG_FLOW.get(type)
    setType(nextType);
  }
  
  return (
    <>
      <MyButton type={type} handleType={handleType} />
    </>
  );
}

const MyButton = ({ type, handleType }) => {
   const background = CONFIG[type].BG_COLOR
   const text = CONFIG[type].TEXT.toLowerCase();
   const nextType = CONFIG_FLOW.get(type)
  
   return (
     <>
     <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 8 }}>
       <p>Haga clic en el botón si desea cambiar el tipo { type } por el {nextType} </p>
       
       <button onClick={handleType} style={{ color: 'white', padding: 8, borderRadius: 8, background: background }}>
         Este es el { text }
       </button>
     </div>
    </>
  );
}

export default App