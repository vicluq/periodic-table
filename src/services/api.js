import axios from "axios";

const BASE_URL = "https://neelpatel05.pythonanywhere.com/";

async function makeRequest() {
  try {
    const { data } = await axios.get(BASE_URL);
    return { data, error: false };
  } catch (e) {
    return { data: null, error: true };
  }
}

export default makeRequest;
