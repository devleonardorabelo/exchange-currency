const currencyList = [
  {
    code: 'AED',
    name: 'UAE Dirham',
    country: 'United Arab Emirates',
    flag: 'AE',
  },
  { code: 'AFN', name: 'Afghan Afghani', country: 'Afghanistan', flag: 'AF' },
  { code: 'ALL', name: 'Albanian Lek', country: 'Albania', flag: 'AL' },
  { code: 'AMD', name: 'Armenian Dram', country: 'Armenia', flag: 'AM' },
  {
    code: 'ANG',
    name: 'Netherlands Antillian Guilder',
    country: 'Netherlands Antilles',
    flag: 'AN',
  },
  { code: 'AOA', name: 'Angolan Kwanza', country: 'Angola', flag: 'AO' },
  { code: 'ARS', name: 'Argentine Peso', country: 'Argentina', flag: 'AR' },
  { code: 'AUD', name: 'Australian Dollar', country: 'Australia', flag: 'AU' },
  { code: 'AWG', name: 'Aruban Florin', country: 'Aruba', flag: 'AW' },
  { code: 'AZN', name: 'Azerbaijani Manat', country: 'Azerbaijan', flag: 'AZ' },
  {
    code: 'BAM',
    name: 'Bosnia and Herzegovina Mark',
    country: 'Bosnia and Herzegovina',
    flag: 'BA',
  },
  { code: 'BBD', name: 'Barbados Dollar', country: 'Barbados', flag: 'BB' },
  { code: 'BDT', name: 'Bangladeshi Taka', country: 'Bangladesh', flag: 'BD' },
  { code: 'BGN', name: 'Bulgarian Lev', country: 'Bulgaria', flag: 'BG' },
  { code: 'BHD', name: 'Bahraini Dinar', country: 'Bahrain', flag: 'BH' },
  { code: 'BIF', name: 'Burundian Franc', country: 'Burundi', flag: 'BI' },
  { code: 'BMD', name: 'Bermudian Dollar', country: 'Bermuda', flag: 'BM' },
  { code: 'BND', name: 'Brunei Dollar', country: 'Brunei', flag: 'BN' },
  { code: 'BOB', name: 'Bolivian Boliviano', country: 'Bolivia', flag: 'BO' },
  { code: 'BRL', name: 'Brazilian Real', country: 'Brazil', flag: 'BR' },
  { code: 'BSD', name: 'Bahamian Dollar', country: 'Bahamas', flag: 'BS' },
  { code: 'BTN', name: 'Bhutanese Ngultrum', country: 'Bhutan', flag: 'BT' },
  { code: 'BWP', name: 'Botswana Pula', country: 'Botswana', flag: 'BW' },
  { code: 'BYN', name: 'Belarusian Ruble', country: 'Belarus', flag: 'BY' },
  { code: 'BZD', name: 'Belize Dollar', country: 'Belize', flag: 'BZ' },
  { code: 'CAD', name: 'Canadian Dollar', country: 'Canada', flag: 'CA' },
  {
    code: 'CDF',
    name: 'Congolese Franc',
    country: 'Democratic Republic of the Congo',
    flag: 'CD',
  },
  { code: 'CHF', name: 'Swiss Franc', country: 'Switzerland', flag: 'CH' },
  { code: 'CLP', name: 'Chilean Peso', country: 'Chile', flag: 'CL' },
  { code: 'CNY', name: 'Chinese Renminbi', country: 'China', flag: 'CN' },
  { code: 'COP', name: 'Colombian Peso', country: 'Colombia', flag: 'CO' },
  { code: 'CRC', name: 'Costa Rican Colon', country: 'Costa Rica', flag: 'CR' },
  { code: 'CUP', name: 'Cuban Peso', country: 'Cuba', flag: 'CU' },
  {
    code: 'CVE',
    name: 'Cape Verdean Escudo',
    country: 'Cape Verde',
    flag: 'CV',
  },
  { code: 'CZK', name: 'Czech Koruna', country: 'Czech Republic', flag: 'CZ' },
  { code: 'DJF', name: 'Djiboutian Franc', country: 'Djibouti', flag: 'DJ' },
  { code: 'DKK', name: 'Danish Krone', country: 'Denmark', flag: 'DK' },
  {
    code: 'DOP',
    name: 'Dominican Peso',
    country: 'Dominican Republic',
    flag: 'DO',
  },
  { code: 'DZD', name: 'Algerian Dinar', country: 'Algeria', flag: 'DZ' },
  { code: 'EGP', name: 'Egyptian Pound', country: 'Egypt', flag: 'EG' },
  { code: 'ERN', name: 'Eritrean Nakfa', country: 'Eritrea', flag: 'ER' },
  { code: 'ETB', name: 'Ethiopian Birr', country: 'Ethiopia', flag: 'ET' },
  { code: 'EUR', name: 'Euro', country: 'European Union', flag: 'EU' },
  { code: 'FJD', name: 'Fiji Dollar', country: 'Fiji', flag: 'FJ' },
  {
    code: 'FKP',
    name: 'Falkland Islands Pound',
    country: 'Falkland Islands',
    flag: 'FK',
  },
  { code: 'FOK', name: 'Faroese Króna', country: 'Faroe Islands', flag: 'FO' },
  {
    code: 'GBP',
    name: 'Pound Sterling',
    country: 'United Kingdom',
    flag: 'GB',
  },
  { code: 'GEL', name: 'Georgian Lari', country: 'Georgia', flag: 'GE' },
  { code: 'GGP', name: 'Guernsey Pound', country: 'Guernsey', flag: 'GG' },
  { code: 'GHS', name: 'Ghanaian Cedi', country: 'Ghana', flag: 'GH' },
  { code: 'GIP', name: 'Gibraltar Pound', country: 'Gibraltar', flag: 'GI' },
  { code: 'GMD', name: 'Gambian Dalasi', country: 'The Gambia', flag: 'GM' },
  { code: 'GNF', name: 'Guinean Franc', country: 'Guinea', flag: 'GN' },
  { code: 'GTQ', name: 'Guatemalan Quetzal', country: 'Guatemala', flag: 'GT' },
  { code: 'GYD', name: 'Guyanese Dollar', country: 'Guyana', flag: 'GY' },
  { code: 'HKD', name: 'Hong Kong Dollar', country: 'Hong Kong', flag: 'HK' },
  { code: 'HNL', name: 'Honduran Lempira', country: 'Honduras', flag: 'HN' },
  { code: 'HRK', name: 'Croatian Kuna', country: 'Croatia', flag: 'HR' },
  { code: 'HTG', name: 'Haitian Gourde', country: 'Haiti', flag: 'HT' },
  { code: 'HUF', name: 'Hungarian Forint', country: 'Hungary', flag: 'HU' },
  { code: 'IDR', name: 'Indonesian Rupiah', country: 'Indonesia', flag: 'ID' },
  { code: 'ILS', name: 'Israeli New Shekel', country: 'Israel', flag: 'IL' },
  { code: 'IMP', name: 'Manx Pound', country: 'Isle of Man', flag: 'IM' },
  { code: 'INR', name: 'Indian Rupee', country: 'India', flag: 'IN' },
  { code: 'IQD', name: 'Iraqi Dinar', country: 'Iraq', flag: 'IQ' },
  { code: 'IRR', name: 'Iranian Rial', country: 'Iran', flag: 'IR' },
  { code: 'ISK', name: 'Icelandic Króna', country: 'Iceland', flag: 'IS' },
  { code: 'JEP', name: 'Jersey Pound', country: 'Jersey', flag: 'JE' },
  { code: 'JMD', name: 'Jamaican Dollar', country: 'Jamaica', flag: 'JM' },
  { code: 'JOD', name: 'Jordanian Dinar', country: 'Jordan', flag: 'JO' },
  { code: 'JPY', name: 'Japanese Yen', country: 'Japan', flag: 'JP' },
  { code: 'KES', name: 'Kenyan Shilling', country: 'Kenya', flag: 'KE' },
  { code: 'KGS', name: 'Kyrgyzstani Som', country: 'Kyrgyzstan', flag: 'KG' },
  { code: 'KHR', name: 'Cambodian Riel', country: 'Cambodia', flag: 'KH' },
  { code: 'KID', name: 'Kiribati Dollar', country: 'Kiribati', flag: 'KI' },
  { code: 'KMF', name: 'Comorian Franc', country: 'Comoros', flag: 'KM' },
  { code: 'KRW', name: 'South Korean Won', country: 'South Korea', flag: 'KR' },
  { code: 'KWD', name: 'Kuwaiti Dinar', country: 'Kuwait', flag: 'KW' },
  {
    code: 'KYD',
    name: 'Cayman Islands Dollar',
    country: 'Cayman Islands',
    flag: 'KY',
  },
  { code: 'KZT', name: 'Kazakhstani Tenge', country: 'Kazakhstan', flag: 'KZ' },
  { code: 'LAK', name: 'Lao Kip', country: 'Laos', flag: 'LA' },
  { code: 'LBP', name: 'Lebanese Pound', country: 'Lebanon', flag: 'LB' },
  { code: 'LKR', name: 'Sri Lanka Rupee', country: 'Sri Lanka', flag: 'LK' },
  { code: 'LRD', name: 'Liberian Dollar', country: 'Liberia', flag: 'LR' },
  { code: 'LSL', name: 'Lesotho Loti', country: 'Lesotho', flag: 'LS' },
  { code: 'LYD', name: 'Libyan Dinar', country: 'Libya', flag: 'LY' },
  { code: 'MAD', name: 'Moroccan Dirham', country: 'Morocco', flag: 'MA' },
  { code: 'MDL', name: 'Moldovan Leu', country: 'Moldova', flag: 'MD' },
  { code: 'MGA', name: 'Malagasy Ariary', country: 'Madagascar', flag: 'MG' },
  {
    code: 'MKD',
    name: 'Macedonian Denar',
    country: 'North Macedonia',
    flag: 'MK',
  },
  { code: 'MMK', name: 'Burmese Kyat', country: 'Myanmar', flag: 'MM' },
  { code: 'MNT', name: 'Mongolian Tögrög', country: 'Mongolia', flag: 'MN' },
  { code: 'MOP', name: 'Macanese Pataca', country: 'Macau', flag: 'MO' },
  {
    code: 'MRU',
    name: 'Mauritanian Ouguiya',
    country: 'Mauritania',
    flag: 'MR',
  },
  { code: 'MUR', name: 'Mauritian Rupee', country: 'Mauritius', flag: 'MU' },
  { code: 'MVR', name: 'Maldivian Rufiyaa', country: 'Maldives', flag: 'MV' },
  { code: 'MWK', name: 'Malawian Kwacha', country: 'Malawi', flag: 'MW' },
  { code: 'MXN', name: 'Mexican Peso', country: 'Mexico', flag: 'MX' },
  { code: 'MYR', name: 'Malaysian Ringgit', country: 'Malaysia', flag: 'MY' },
  {
    code: 'MZN',
    name: 'Mozambican Metical',
    country: 'Mozambique',
    flag: 'MZ',
  },
  { code: 'NAD', name: 'Namibian Dollar', country: 'Namibia', flag: 'NA' },
  { code: 'NGN', name: 'Nigerian Naira', country: 'Nigeria', flag: 'NG' },
  { code: 'NIO', name: 'Nicaraguan Córdoba', country: 'Nicaragua', flag: 'NI' },
  { code: 'NOK', name: 'Norwegian Krone', country: 'Norway', flag: 'NO' },
  { code: 'NPR', name: 'Nepalese Rupee', country: 'Nepal', flag: 'NP' },
  {
    code: 'NZD',
    name: 'New Zealand Dollar',
    country: 'New Zealand',
    flag: 'NZ',
  },
  { code: 'OMR', name: 'Omani Rial', country: 'Oman', flag: 'OM' },
  { code: 'PAB', name: 'Panamanian Balboa', country: 'Panama', flag: 'PA' },
  { code: 'PEN', name: 'Peruvian Sol', country: 'Peru', flag: 'PE' },
  {
    code: 'PGK',
    name: 'Papua New Guinean Kina',
    country: 'Papua New Guinea',
    flag: 'PG',
  },
  { code: 'PHP', name: 'Philippine Peso', country: 'Philippines', flag: 'PH' },
  { code: 'PKR', name: 'Pakistani Rupee', country: 'Pakistan', flag: 'PK' },
  { code: 'PLN', name: 'Polish Złoty', country: 'Poland', flag: 'PL' },
  { code: 'PYG', name: 'Paraguayan Guaraní', country: 'Paraguay', flag: 'PY' },
  { code: 'QAR', name: 'Qatari Riyal', country: 'Qatar', flag: 'QA' },
  { code: 'RON', name: 'Romanian Leu', country: 'Romania', flag: 'RO' },
  { code: 'RSD', name: 'Serbian Dinar', country: 'Serbia', flag: 'RS' },
  { code: 'RUB', name: 'Russian Ruble', country: 'Russia', flag: 'RU' },
  { code: 'RWF', name: 'Rwandan Franc', country: 'Rwanda', flag: 'RW' },
  { code: 'SAR', name: 'Saudi Riyal', country: 'Saudi Arabia', flag: 'SA' },
  {
    code: 'SBD',
    name: 'Solomon Islands Dollar',
    country: 'Solomon Islands',
    flag: 'SB',
  },
  { code: 'SCR', name: 'Seychellois Rupee', country: 'Seychelles', flag: 'SC' },
  { code: 'SDG', name: 'Sudanese Pound', country: 'Sudan', flag: 'SD' },
  { code: 'SEK', name: 'Swedish Krona', country: 'Sweden', flag: 'SE' },
  { code: 'SGD', name: 'Singapore Dollar', country: 'Singapore', flag: 'SG' },
  {
    code: 'SHP',
    name: 'Saint Helena Pound',
    country: 'Saint Helena',
    flag: 'SH',
  },
  {
    code: 'SLL',
    name: 'Sierra Leonean Leone',
    country: 'Sierra Leone',
    flag: 'SL',
  },
  { code: 'SOS', name: 'Somali Shilling', country: 'Somalia', flag: 'SO' },
  { code: 'SRD', name: 'Surinamese Dollar', country: 'Suriname', flag: 'SR' },
  {
    code: 'SSP',
    name: 'South Sudanese Pound',
    country: 'South Sudan',
    flag: 'SS',
  },
  {
    code: 'STN',
    name: 'São Tomé and Príncipe Dobra',
    country: 'São Tomé and Príncipe',
    flag: 'ST',
  },
  { code: 'SYP', name: 'Syrian Pound', country: 'Syria', flag: 'SY' },
  { code: 'SZL', name: 'Swazi Lilangeni', country: 'Eswatini', flag: 'SZ' },
  { code: 'THB', name: 'Thai Baht', country: 'Thailand', flag: 'TH' },
  {
    code: 'TJS',
    name: 'Tajikistani Somoni',
    country: 'Tajikistan',
    flag: 'TJ',
  },
  {
    code: 'TMT',
    name: 'Turkmenistan Manat',
    country: 'Turkmenistan',
    flag: 'TM',
  },
  { code: 'TND', name: 'Tunisian Dinar', country: 'Tunisia', flag: 'TN' },
  { code: 'TOP', name: 'Tongan Paʻanga', country: 'Tonga', flag: 'TO' },
  { code: 'TRY', name: 'Turkish Lira', country: 'Turkey', flag: 'TR' },
  {
    code: 'TTD',
    name: 'Trinidad and Tobago Dollar',
    country: 'Trinidad and Tobago',
    flag: 'TT',
  },
  { code: 'TVD', name: 'Tuvaluan Dollar', country: 'Tuvalu', flag: 'TV' },
  { code: 'TWD', name: 'New Taiwan Dollar', country: 'Taiwan', flag: 'TW' },
  { code: 'TZS', name: 'Tanzanian Shilling', country: 'Tanzania', flag: 'TZ' },
  { code: 'UAH', name: 'Ukrainian Hryvnia', country: 'Ukraine', flag: 'UA' },
  { code: 'UGX', name: 'Ugandan Shilling', country: 'Uganda', flag: 'UG' },
  {
    code: 'USD',
    name: 'United States Dollar',
    country: 'United States',
    flag: 'US',
  },
  { code: 'UYU', name: 'Uruguayan Peso', country: 'Uruguay', flag: 'UY' },
  { code: 'UZS', name: 'Uzbekistan Som', country: 'Uzbekistan', flag: 'UZ' },
  { code: 'VES', name: 'Venezuelan Bolívar', country: 'Venezuela', flag: 'VE' },
  { code: 'VND', name: 'Vietnamese Đồng', country: 'Vietnam', flag: 'VN' },
  { code: 'VUV', name: 'Vanuatu Vatu', country: 'Vanuatu', flag: 'VU' },
  { code: 'WST', name: 'Samoan Tālā', country: 'Samoa', flag: 'WS' },
  {
    code: 'XAF',
    name: 'Central African CFA Franc',
    country: 'Central Africa',
    flag: 'CF',
  },
  {
    code: 'XCD',
    name: 'East Caribbean Dollar',
    country: 'East Caribbean',
    flag: 'EC',
  },
  {
    code: 'XDR',
    name: 'Special Drawing Rights',
    country: 'International Monetary Fund',
    flag: 'IMF',
  },
  {
    code: 'XOF',
    name: 'West African CFA Franc',
    country: 'West Africa',
    flag: 'WF',
  },
  { code: 'XPF', name: 'CFP Franc', country: 'French Territories', flag: 'PF' },
  { code: 'YER', name: 'Yemeni Rial', country: 'Yemen', flag: 'YE' },
  {
    code: 'ZAR',
    name: 'South African Rand',
    country: 'South Africa',
    flag: 'ZA',
  },
  { code: 'ZMW', name: 'Zambian Kwacha', country: 'Zambia', flag: 'ZM' },
  { code: 'ZWL', name: 'Zimbabwean Dollar', country: 'Zimbabwe', flag: 'ZW' },
];

export default currencyList;
