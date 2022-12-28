import axios, { AxiosResponse } from "axios";
import type { BonbastJsonResponse } from "./types";

const api = axios.create({
  baseURL: "https://bonbast.com",
  headers: {
    "User-Agent": Math.random(),
    Cookie: "rf_bb=true; st_bb=0",
  },
});

const getSourceCode = async (): Promise<string> => {
  const { data } = await api.get("/");
  return data;
};

const extractToken = (sourceCode: string): string => {
  const findBy = `{ data:"`;
  const cutBy = `",`;
  return sourceCode.split(findBy)[1].split(cutBy)[0];
};

const getExchangeRates = async (
  token: string
): Promise<BonbastJsonResponse> => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("data", token);
  urlencoded.append("webdriver", "false");

  const { data }: AxiosResponse<BonbastJsonResponse> = await api.post(
    "/json",
    urlencoded
  );
  return data;
};

const bonbast = async (): Promise<BonbastJsonResponse> => {
  const sourceCode = await getSourceCode();
  const token = extractToken(sourceCode);
  return await getExchangeRates(token);
};

export default bonbast;
