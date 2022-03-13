//Imports
import React from 'react'

//Styling
import '../styling/navbar.css'

const Navbar = () => {
  return (
    <div className='outerNav'>
        <div className='innerNav'>
            <div className='buttonContainer'>
                <button>Sea</button> //Magnifying glass? would like something more tea related
            </div>
            <div className='buttonContainer'>
                <button>Not</button> //Tea kettle that starts steaming when you click on it
            </div>
            <div className='buttonContainer'>
                <button>Mes</button> Teabox that opens when you click on it
            </div>
            <div className='buttonContainer'>
                <button>Pro</button> //Profile img or avatar
            </div>
            <div className='buttonContainer'>
                <button>Set</button> //Stove Knob
            </div>
        </div>
    </div>
  )
}

export default Navbar