import axios from "axios";

export class HttpClient {

  async get( url: string ) {
    const { data, status } = await axios.get(url);
    return { data, status };
  }
  async delete( url: string ) {
    const { data, status } = await axios.delete(url);
    return { data, status };
  }
  async post( url: string, payload = {} ) {
    const { data, status } = await axios.post(url, payload);
    return { data, status };
  }
  async put( url: string, payload = {} ) {
    const { data, status } = await axios.put(url, payload);
    return { data, status };
  }

}