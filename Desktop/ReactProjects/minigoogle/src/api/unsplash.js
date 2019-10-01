import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7eb899b9660a6e935a485055a228f000ac9624abe3100972c2ceba17598410aa"
  }
});
