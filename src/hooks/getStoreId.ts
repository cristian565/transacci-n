import axios from 'axios';

export async function getStoreId(
  path: string,
  token: string,
  setLoading: Function,
  setData: Function,
  setIsError: Function,
) {

  try {
    setLoading(true);
    const myConfig = {
      headers: {
        Authorization:`Bearer ${token}`,
        'Content-Type': 'applicaton/json',
      },
    }
    const response = await axios.get(`${path}`, myConfig);
    if(response.data.storeId.length===0){
      setIsError(true)
    }
    setData(response.data.storeId);
    setIsError(false);
  } catch (error) {
    setIsError(true)
  }
  setLoading(false);
}