import axios from "axios";

const customHeaders = {

    'Content-Type': 'application/json',
    
  };
 
const baseUrl ="https://e0dsnfvhhc.execute-api.us-east-1.amazonaws.com/live/";

const api = axios.create({
  baseURL: baseUrl,
  headers: customHeaders,
});

async function getQuestions(examCode: string, section_module: string) {
  const { data } = await api.get(
    `questions?querytype=get&examcode=${examCode}&section_module=${section_module}`
  );
  return data;
}

export async function getSections(examCode: string) {
  const { data } = await api.get(`module_section?examcode=${examCode}`);
  return data;
}


export default getQuestions;
// https://4uma4ssz71.execute-api.us-east-1.amazonaws.com/dev/questions?examcode=SAA-CO3&section_module=1


