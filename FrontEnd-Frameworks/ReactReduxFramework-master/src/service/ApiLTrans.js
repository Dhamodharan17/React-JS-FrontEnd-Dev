import axiosInstance from "./axios";

export const getTransactionApi = async () => {
    console.log("line 4 api method")
    const response = await axiosInstance.get("http://localhost:3000/transaction");
    return response;
}