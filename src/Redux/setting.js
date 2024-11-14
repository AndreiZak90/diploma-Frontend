export const sortTrain = (list, setting) => {
  if (list === []) return list;
  console.log(list);
  console.log(setting);
  return list
    .sort((item) => item.departure.have_first_class === setting.first_class)
    .sort((item) => item.departure.have_fourth_class === setting.fourth_class)
    .sort((item) => item.departure.have_second_class === setting.second_class)
    .sort((item) => item.departure.have_third_class === setting.third_class)
    .sort((item) => item.departure.have_wifi === setting.wifi)
    .sort((item) => item.departure.is_express === setting.express);
};
