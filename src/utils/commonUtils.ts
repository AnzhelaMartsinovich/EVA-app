export const getFactionArr = (descr: string, solarSystemName: string) => {
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
