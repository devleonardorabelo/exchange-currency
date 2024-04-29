import axios from 'axios';

import { BASE_URL } from '..';
import { PairConversion } from '../types';

const getPairConversion = (base: string, target: string) =>
  axios.get<PairConversion>(`${BASE_URL}/pair/${base}/${target}`);

export default getPairConversion;
