import React from 'react';


class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        infoFight: "Fight",
        poke1 : null,
        poke2 : null
    };
}
componentDidUpdate(prevProps, prevState) {

        if (this.props.pokeSelectorFight!== prevProps.pokeSelectorFight) {
        this.initSelectPoke()
        console.log(this.state.poke1)


        }
  }
  initSelectPoke  () {
    console.log("initSelectPoket",this.props.pokeSelectorFight)
    if(this.state.poke1 === null) {
        this.setState({ poke1: this.props.pokeSelectorFight });
        console.log("this.poke1",this.state.poke1)
        const poke1Value = this.state.poke1;
  console.log(poke1Value);
    }else if(this.state.poke2 === null) {
        this.setState({ poke2: this.props.pokeSelectorFight });
        console.log("this.poke2",this.state.poke2)
        const poke1Value2 = this.state.poke2;
        console.log(poke1Value2);
    }
  }
  removePoke = (e) => {
    console.log("removePoke",e)

    if(e.target.value === "1"){
        this.setState({poke1: null})
        
    }else if(e.target.value === "2"){
        this.setState({poke2: null})
    }
    
    
  }


  render() {
    return(
        <div>
            <h1>{this.state.infoFight}</h1>
            <div className='ring'>
                <div className='poke1'>
                    { this.state.poke1 === null ? 
                        <div className='waitPokeFight'></div> 
                    : 
                        <div className='fighter1'>
                            <h2>{this.state.poke1.name.en}</h2>
                            <img src={this.state.poke1.sprites.regular} alt={this.state.poke1.name} width={"128px"} height={"128px"}/>
                            <button onClick={this.removePoke} value={1}>remove</button>
                        </div> 
                    }
                    </div>
                <div className='poke2'>
                    { this.state.poke2 === null ? 
                        <div className='waitPokeFight'></div> 
                    : 
                        <div className='fighter2'>
                            <h2>{this.state.poke2.name.en}</h2>
                            <img src={this.state.poke2.sprites.regular} alt={this.state.poke2.name} width={"128px"} height={"128px"}/>
                            <button onClick={this.removePoke} value={2}>remove</button>
                        </div> 
                    }
                </div>

            </div>
        </div>



    )
   
  }
}

export default Fight;