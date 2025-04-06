import axios from "axios";
import useSWR from "swr";

export const useGetData = () => {

    const user = import.meta.env.VITE_USER;
    const api_url = import.meta.env.VITE_API_URL;

    const fetchData = async (url: string) => {
        const data = await axios.get(`${url}`);

        return data;
    }

    const {data} = useSWR(`${api_url}${user}`, fetchData);

    return {
        data
    }

}