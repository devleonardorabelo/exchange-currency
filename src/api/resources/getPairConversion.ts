import axios from 'axios';

import { BASE_URL } from '..';
import { PairConversion } from '../types';

const getPairConversion = (from: string, to: string) =>
  axios.get<PairConversion>(`${BASE_URL}/pair/${from}/${to}`);

export default getPairConversion;
