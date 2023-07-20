import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../store/features/home_page_card/cardSlice';

const CardList = () => {
  const dispatch = useDispatch();
  const { cards, status, error } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {cards.map((card) => (
        <div key={card.url}>
          <h3>{card.string}</h3>
          <img src={card.url} alt="Card" />
        </div>
      ))}
    </div>
  );
};

export default CardList;
