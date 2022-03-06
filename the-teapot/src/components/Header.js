//Imports
import React from 'react'

const Header = () => {
  return (
    <section className='outerContainer'>
        <div className='innerContainer'>
            <div className='leftHeader'>
                <div className='innerLeftHeader'>
                    //Profile pic here that would take you to your profile...how others see your profile
                </div>
            </div>
            <div className='midHeader'>
                <div className='innerMidHeader'>
                    //Main logo right here that will link to refresh main page or take you to the main feed page
                </div>
            </div>
            <div className='rightHeader'>
                <div className='innerRightHeader'>
                    <button>
                        //Setting button...I'm thinking something like a knob on a stove to play off the whole teapot thing
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header