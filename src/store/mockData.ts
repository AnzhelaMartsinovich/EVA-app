import { MainPageState } from 'store/interfaces';

const error = 'Ooop. Something was wrong.';
export const mainPageState: MainPageState = {
  factionsData: [
    {
      corporation_id: 1,
      description: 'description',
      faction_id: 1,
      is_unique: true,
      militia_corporation_id: 1,
      name: 'name',
      size_factor: 1,
      solar_system_id: 1,
      station_count: 1,
      station_system_count: 1,
    },
  ],
  factionsError: error,
  solarSystemName: 'Solar system name',
  solarSystemNameError: error,
  corporationData: [
    {
      ceo_id: 3003881,
      creator_id: 1,
      description:
        'The Imperial Navy operates under the simple doctri…een refitted for decades and are almost obsolete.',
      home_station_id: 60008368,
      member_count: 90,
      name: 'Amarr Navy',
      shares: 100000000,
      tax_rate: 0,
      ticker: 'AN',
    },
  ],
  corporationDataError: error,
  seoData: [
    {
      birthday: '27/03/2003',
      bloodline_id: 6,
      corporation_id: 1000084,
      description: '',
      gender: 'male',
      name: 'Kezti Sundara',
      race_id: 4,
      security_status: 0,
    },
  ],
  seoDataError: error,
  race: [
    {
      alliance_id: 500001,
      description:
        'Founded on the tenets of patriotism and hard work that carried its ancestors through hardships on an inhospitable homeworld, the Caldari State is today a corporate dictatorship, led by rulers who are determined to see it return to the meritocratic ideals of old. Ruthless and efficient in the boardroom as well as on the battlefield, the Caldari are living emblems of strength, persistence, and dignity.',
      name: 'Caldari',
      race_id: 1,
    },
  ],
  raceError: error,
};
