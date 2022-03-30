import axiosInstance from "./axios";

export const getTransactionApi = async () => {
    const response = await axiosInstance.get("http://localhost:3000/transaction");
    return response;
}

export const getProducts = async () =>{
const response = await axiosInstance.get("https://fakestoreapi.com/products").catch((err) => {
  console.log("Err: ", err);
});

return response;
}