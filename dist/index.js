"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    baseURL: "https://bonbast.com",
    headers: {
        "User-Agent": Math.random(),
        Cookie: "rf_bb=true; st_bb=0",
    },
});
const getSourceCode = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield api.get("/");
    return data;
});
const extractToken = (sourceCode) => {
    const findBy = `{ data:"`;
    const cutBy = `",`;
    return sourceCode.split(findBy)[1].split(cutBy)[0];
};
const getExchangeRates = (token) => __awaiter(void 0, void 0, void 0, function* () {
    var urlencoded = new URLSearchParams();
    urlencoded.append("data", token);
    urlencoded.append("webdriver", "false");
    const { data } = yield api.post("/json", urlencoded);
    return data;
});
const bonbast = () => __awaiter(void 0, void 0, void 0, function* () {
    const sourceCode = yield getSourceCode();
    const token = extractToken(sourceCode);
    return yield getExchangeRates(token);
});
exports.default = bonbast;
