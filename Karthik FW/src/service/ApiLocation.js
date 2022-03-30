import axiosInstance from "./axios";

export const getLocationApi = async () => {
    const response = await axiosInstance.get("http://localhost:3000/country");
    return response;
}
export const getBooksApi = async () => {
    const response = await axiosInstance.get("https://mukundphase1-78966-ruby.b78966.dev.eastus.az.svc.builder.cafe/bx_block_catalogue/book_listing/");
    return response;
}

