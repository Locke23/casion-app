import { IPost } from "./../types/index";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.93:8080/api/v1/post",
  timeout: 1000,
});

export const GetAllPosts = async () => {
  try {
    const { data } = await instance.get<IPost[]>("/all");
    return data;
  } catch (err) {
    console.log(err);
  }
};
