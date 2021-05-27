import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FactionCard } from 'components/factionCard/FactionCard';
import { getFactionsDataRequest } from 'store/actions';
import { getFactionsDataSelector } from 'store/selectors';

import { FactionCards } from './MainPage.style';
import { TitleH1 } from 'components/common/Titles.style';

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
        {factionsData.map(
          (faction: {
            faction_id: number;
            solar_system_id: number;
            name: string;
            description: string;
          }) => (
            <FactionCard
              key={faction.faction_id}
              id={faction.solar_system_id}
              name={faction.name}
              descr={faction.description}
            />
          )
        )}
      </FactionCards>
    </>
  );
};
