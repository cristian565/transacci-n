import axios from "axios";

export async function getDataSearch(
  path: string,
  token: string,
  setLoading: Function,
  setData: Function,
  id?: string,
  reference?: string,
  status?: string,
  paymentMethod?: string,
  customer?: string,
  fromDate?: string,
  untilDate?: string
) {
  //Cambio de contrasena
  try {
    console.log(paymentMethod,"getDataSearch");
    setLoading(true);
    const response = await axios.get(
      `${path}?${status ? "status=" + status : ""}${
        paymentMethod ? "&paymentMethod=" + paymentMethod : ""
      }${id ? "id=" + id : ""}${reference ? "&reference=" + reference : ""}${
        customer ? "&customer=" + customer : ""
      }${fromDate ? "&fromDate=" + fromDate : ""}${
        untilDate ? "&untilDate=" + untilDate : ""
      }`,
      {
        headers: {
          "x-store-id": "hardtech",
          Authorization: `Bearer ${token}`,
          "Content-Type": "applicaton/json",
        },
      }
    );

    setLoading(false);
    setData(response.data);
  } catch (error) {
    setLoading(false);
    console.log("ERROR ", error);
  }
}
