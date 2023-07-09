import React from 'react';

class Afficher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 'all', // Par défaut, affiche tous les types
      currentPage: 1, // Page actuelle
      itemsPerPage: 100, // Nombre de Pokémon affichés par page
    };
  }

  resetInfo = () =>{
    console.log('resetInfo');

  }
  render() {
    return(
        <div>
            {this.props.info === null? null :  <h1 onClick={() => this.resetInfo()}>{this.props.info.name.fr}</h1>}
        </div>

    )
   
  }
}

export default Afficher;