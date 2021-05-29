export const getFactionDataArr = (descr: string, solarSystemName: string) => {
  return [
    {
      title: 'Description',
      text: descr,
    },
    {
      title: 'Solar system name',
      text: solarSystemName,
    },
    {
      title: 'Corporation',
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
    },
    {
      title: 'Member count',
      text: member_count,
    },
    {
      title: 'Description',
      text: description,
    },
    {
      title: 'Ceo',
    },
  ];
};

export const getSeoDataArr = (name: string, birthday: string, race: string) => {
  return [
    {
      title: 'Name',
      text: name,
    },
    {
      title: 'Birthday',
      text: birthday,
    },
    {
      title: 'Race',
      text: race,
    },
  ];
};
