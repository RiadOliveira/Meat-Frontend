import axios from 'axios';
import { backendUrl } from 'constants/baseUrls';

export const api = axios.create({
  baseURL: backendUrl,
});
