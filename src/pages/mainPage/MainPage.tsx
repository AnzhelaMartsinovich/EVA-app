import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FactionCard } from 'components/factionCard/FactionCard';
import { getFactionsDataRequest } from 'store/actions';
import { getFactionsDataSelector } from 'store/selectors';

import { MainPageContainer, FactionCards } from './MainPage.style';
import { TitleH1 } from 'components/common/Titles.style';

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  const factionsData = useSelector(getFactionsDataSelector);
  useEffect(() => {
    dispatch(getFactionsDataRequest());
  }, []);

  return (
    <MainPageContainer>
      <TitleH1>EVA-app</TitleH1>
      <FactionCards>
        {factionsData.map(
          (faction: {
            faction_id: number;
            solar_system_id: number;
            corporation_id: number;
            name: string;
            description: string;
          }) => (
            <FactionCard
              key={faction.faction_id}
              solarSystemId={faction.solar_system_id}
              corporationId={faction.corporation_id}
              name={faction.name}
              descr={faction.description}
            />
          )
        )}
      </FactionCards>
    </MainPageContainer>
  );
};
