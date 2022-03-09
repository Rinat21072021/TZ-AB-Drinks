import React, { useState } from 'react';
import { ReactComponent as Like } from '../assets/img/like.svg';
import { ReactComponent as DeleteIcon } from '../assets/img/deleteIcon.svg';
import { deleteCardAC, FilterValueType, setLikeAC } from '../bll/Drinks-Reducer';
import { useDispatch } from 'react-redux';

type IDrinkCard = {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
  filter: FilterValueType

}

export const DrinkCard: React.FC<IDrinkCard> = ({strDrink, strDrinkThumb, idDrink, filter}) => {
  const dispatch = useDispatch()
  const [like, setLike] = useState(false)

  const handlerLike = (id: string, filter: boolean) => {
    dispatch(setLikeAC(id, filter))
    setLike(!like)
  }

  const handlerDeleteCard = (id: string) => {
    dispatch(deleteCardAC(id))
  }

  return (
    <div className="item">
      <h3 className="title">{strDrink}</h3>
      <img className="image" src={strDrinkThumb} alt={'picture should be here'}/>
      <div className="buttons">
        <button className="button" onClick={() => handlerLike(idDrink, filter)}>
          <Like className={['like', like ? 'active' : ''].join(' ')}/>
        </button>
        <button className="button" onClick={() => handlerDeleteCard(idDrink)}>
          <DeleteIcon className="delete"/>
        </button>
      </div>
    </div>
  );
};
