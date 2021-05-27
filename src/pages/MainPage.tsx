import React, { FC, useEffect } from 'react';

import { FactionCard } from 'components/factionCard/FactionCard';

import { FactionCards } from './MainPage.style';
import { TitleH1 } from 'components/common/Titles.style';
import { useDispatch, useSelector } from 'react-redux';
import { getFactionsDataRequest } from 'store/actions';
import { getFactionsDataSelector } from 'store/selectors';

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  const factionsData = useSelector(getFactionsDataSelector);
  useEffect(() => {
    dispatch(getFactionsDataRequest());
  }, []);

  return (
    <>
      <TitleH1>EVA-app</TitleH1>
      <FactionCards>
        {factionsData.map((faction: { name: string; description: string }) => (
          <FactionCard name={faction.name} descr={faction.description} />
        ))}
      </FactionCards>
    </>
  );
};
