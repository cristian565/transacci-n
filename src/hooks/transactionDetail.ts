import axios from 'axios';

export async function getTransactionDetail(
  path: string,
  token: string,
  storeId: string,
  paymentGateway: string,
  transactionId: string,
  setLoading: Function,
  setData: Function,
  setIsError: Function,
) {

  try {
    setLoading(true);
    const myConfig = {
      headers: {
        'x-store-id': storeId,
        Authorization:
          `Bearer ${token}`,
        'Content-Type': 'applicaton/json',
      },
    }
    const response = await axios.get(`${path}${paymentGateway}/${transactionId}`, myConfig);
    setData(response.data);
    setIsError(false);
  } catch (error) {
    setIsError(true)
  }

  setLoading(false);
}
