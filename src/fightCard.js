import React from 'react';
import Fight from './Fight.js'

class FightCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 'all', // Par défaut, affiche tous les types
      currentPage: 1, // Page actuelle
      itemsPerPage: 100, // Nombre de Pokémon affichés par page
      fightInitiated: false,
    };
  }

  initFight = () => {
    this.setState({fightInitiated : true});
  }
  render() {
    return(
        <div>

            <button onClick={() => this.initFight()}>Start the fight</button>
            {this.state.fightInitiated? <Fight />: null}
        </div>

    )
   
  }
}

export default FightCard;