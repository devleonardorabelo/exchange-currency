export interface CurrencyDetail {
  currency: string;
  symbol: string;
  value: number;
  info?: CurrencyDetailInfo;
}

export interface CurrencyDetailInfo {
  code: string;
  name: string;
  country: string;
  flag: string;
}
