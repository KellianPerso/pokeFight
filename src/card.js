import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 'all', // Par défaut, affiche tous les types
      currentPage: 1, // Page actuelle
      itemsPerPage: 100, // Nombre de Pokémon affichés par page
    };
  }

  handleTypeChange = (type) => {
    this.setState({ selectedType: type, currentPage: 1 }); // Réinitialiser la page lors du changement de type
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  infoPoke = (info) => {
    console.log("infoPoke", info);
    console.log("infoPoke result", this.props.poke[info]);
    this.props.afficher(this.props.poke[info]);
  };

  render() {
    const { selectedType, currentPage, itemsPerPage } = this.state;
    const poke = this.props.poke || [];

    if (!poke) {
      return null;
    }

    // Filtrer les Pokémon en fonction du type sélectionné
    const filteredPokemon = selectedType === 'all'
      ? poke
      : poke.filter(pokemon => pokemon.types && pokemon.types.some(type => type.name === selectedType));

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPokemon = filteredPokemon.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

    // Obtenir les types de Pokémon disponibles
    const availableTypes = Array.from(new Set(poke.flatMap(pokemon => pokemon.types && pokemon.types.map(type => type.name))));

    return (
      <div>
        <nav>
          <ul>
            <li onClick={() => this.handleTypeChange('all')}>Tous</li>
            {availableTypes.map(type => (
              <li key={type} onClick={() => this.handleTypeChange(type)}>{type}</li>
            ))}
          </ul>
        </nav>
        <div className='grid'>
          {currentPokemon.map((pokemon, index) => (
            <div key={index} className='card' onClick={() => this.infoPoke(index)}>
              <img src={pokemon.sprites.regular} alt={pokemon.name.fr} width={"64px"} height={"64px"} />
              <h3>{pokemon.name.fr}</h3>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={pageNumber === currentPage ? "active" : ""}
              onClick={() => this.handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;