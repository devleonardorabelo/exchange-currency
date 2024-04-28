import axios from 'axios';

import { PairConversion } from '../types/pairConversion';

const getPairConversion = (from: string, to: string) =>
  axios.get<PairConversion>(
    `${process.env.REACT_APP_EXCHANGE_API_URL}/${process.env.REACT_APP_EXCHANGE_API_KEY}/pair/${from}/${to}`
  );

export default getPairConversion;
