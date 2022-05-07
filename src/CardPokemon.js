import React from 'react';

class CardPokemon extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    const { name, type, averageWeight, image } = data;

    return (
      <div className='pokecard'>
        <div className='infos'>
          <p className='name'>{name}</p>
          <p>{type}</p>
          <p className='weight'>
            AverageWeight:
            <span>{averageWeight.value}</span>
            <span>{averageWeight.measurementUnit}</span>
          </p>
        </div>
        <div className='pokeIMG'>
          <img src={image} alt='' srcset='' />
        </div>
      </div>
    );
  }
}

export default CardPokemon;
