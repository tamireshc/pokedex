import React from 'react';
import CardPokemon from './CardPokemon';
import pokemons from './data';

class Card extends React.Component {

  constructor() {
    super()
    this.state = {
      index: 0,
      type: ''
    }
  }

  pokeType = (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText === "Fire") {
      this.setState(() => ({
        type: "Fire"
      }))

    }
    if (event.target.innerText === "Psychic") {
      this.setState(() => ({
        type: "Psychic"
      }))
    }
    if (event.target.innerText === "Electric") {
      this.setState(() => ({
        type: "Electric"
      }))
    }
    if (event.target.innerText === "all") {
      this.setState(() => ({
        type: ""
      }))
    }

  }

  filterPokemon = () => {
    if (this.state.type) {
      return pokemons.filter((item) => item.type.includes(this.state.type))
    }
    return pokemons

  }

  handleClick = () => {
    if (this.state.index === this.filterPokemon().length - 1) {
      this.setState(() => ({
        index: 0
      }))
    }
    this.setState((initial) => ({
      index: initial.index + 1
    }))

  }

  render() {
    const { pokemons } = this.props;
    console.log('poke2', pokemons[ 1 ]);
    const arrayIds1 = this.filterPokemon().map((item) => item.id)
    console.log('id', arrayIds1);

    return (
      <>
        { this.filterPokemon().filter((item) => item.id === arrayIds1[ this.state.index ]).map((item) => (
          <CardPokemon key={ item.id } data={ item } />
        )) }

        <div>
          <button onClick={ this.handleClick } style={ { backgroundColor: "gray" } }>Próximo Pokémon</button>
          <button onClick={ this.pokeType } >Fire</button>
          <button onClick={ this.pokeType } style={ { backgroundColor: "rgb(63, 63, 163)" } } >Psychic</button>
          <button onClick={ this.pokeType } style={ { backgroundColor: "rgb(207, 226, 1)" } } >Electric</button>
          <button onClick={ this.pokeType } style={ { backgroundColor: "gray" } }>all</button>
        </div>

      </>
    );
  }
}

export default Card;

// .filter((item) => item.id === arrayIds[ this.state.index ])
// .filter((item) => item.type.includes(this.state.type))

