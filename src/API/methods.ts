import instance from "@/API/axiosProvider";

const Post = async (url: string, data: any) => {
    const response = await instance.post(url, data);
    return response.data;
};
const Get = async <T>(url: string): Promise<{ data: T, message: string }> => {
    try {
        const response = await instance.get<{ data: T, message: string }>(url);
        return {
            data: response.data.data,
            message: response.data.message,
        };
    } catch (error:any) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
};
export {
    Get,Post
}