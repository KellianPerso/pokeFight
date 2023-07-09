import React from 'react';


class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        infoFight: "Fight"
    };
    this.poke1 = null
    this.poke2 = null
}


  render() {
    return(
        <div>
            <h1>{this.state.infoFight}</h1>
            <div className='ring'>
                <div className='poke1'>
                    { this.poke1 === null ? 
                        <div className='waitPokeFight'></div> 
                    : 
                        <div></div> 
                    }
                    </div>
                <div className='poke2'></div>

            </div>
        </div>



    )
   
  }
}

export default Fight;