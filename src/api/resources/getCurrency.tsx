import axios from 'axios';

import { BASE_URL } from '..';
import { CurrencyExchange } from '../types';

const getCurrency = (code: string) =>
  axios.get<CurrencyExchange>(`${BASE_URL}/latest/${code}`);

export default getCurrency;
