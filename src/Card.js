import React from 'react';
import CardPokemon from './CardPokemon';

class Card extends React.Component {
  render() {
    const { pokemons } = this.props;
    console.log('poke2', pokemons);
    return (
      <>
        {pokemons.map((item) => (
          <CardPokemon key={item.id} data={item} />
        ))}
      </>
    );
  }
}

export default Card;
