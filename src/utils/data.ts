export const getFactionDataArr = (descr: string, solarSystemName: string) => {
  return [
    {
      title: 'Description',
      text: descr,
      id: 1,
    },
    {
      title: 'Solar system name',
      text: solarSystemName,
      id: 2,
    },
    {
      title: 'Corporation',
      id: 3,
    },
  ];
};

export const getCorporationDataArr = (
  name: string,
  member_count: number,
  description: string
) => {
  return [
    {
      title: 'Name',
      text: name,
      id: 1,
    },
    {
      title: 'Member count',
      text: member_count,
      id: 2,
    },
    {
      title: 'Description',
      text: description,
      id: 3,
    },
    {
      title: 'Ceo',
      id: 4,
    },
  ];
};

export const getSeoDataArr = (name: string, birthday: string, race: string) => {
  return [
    {
      title: 'Name',
      text: name,
      id: 1,
    },
    {
      title: 'Birthday',
      text: birthday,
      id: 2,
    },
    {
      title: 'Race',
      text: race,
      id: 3,
    },
  ];
};
