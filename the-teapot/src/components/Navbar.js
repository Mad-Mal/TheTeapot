//Imports
import React from 'react'

//Styling
import '../styling/navbar.css'

const Navbar = () => {
  return (
    <div className='outerNav'>
        <div className='innerNav'>
            <div className='buttonContainer'>
                <button /> //Search
            </div>
            <div className='buttonContainer'>
                <button /> //Notifications
            </div>
            <div className='buttonContainer'>
                <button /> //Messages
            </div>
            <div className='buttonContainer'>
                <button /> //Profile
            </div>
            <div className='buttonContainer'>
                <button /> //Settings...I'm thinking like a stove knob to kind of play on the tea thing
            </div>
        </div>
    </div>
  )
}

export default Navbar