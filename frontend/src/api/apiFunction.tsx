import myApi from './api';

export const getStartupsData = async (callback: any) => {
  try {
    const response = await myApi.get('/startups');
    // console.log(response.data);
    callback(response.data);
  } catch (error) {
    console.log(error);
  }
};
