import { ArrowUp2, ArrowDown2, ElementEqual } from 'iconsax-react';
import { useSelector } from 'react-redux';
import colors from 'tailwindcss/colors';

import { RootState } from '../../../store';

const ConversionRate = () => {
  const pairConversions = useSelector(
    (state: RootState) => state.pairConversionSlice.pairConversions
  );

  const renderIndicator = (rate: number, type: 'base' | 'target') => {
    const size = 14;

    let Left = <ArrowUp2 size={size} color={colors.green[700]} />;
    let Right = <ArrowDown2 size={size} color={colors.orange[700]} />;

    if (rate < 1) {
      Left = <ArrowDown2 size={size} color={colors.orange[700]} />;
      Right = <ArrowUp2 size={size} color={colors.green[700]} />;
    }

    if (rate === 1) {
      Left = <ElementEqual size={size} color={colors.gray[700]} />;
      Right = <ElementEqual size={size} color={colors.gray[700]} />;
    }

    if (type == 'base') {
      return Left;
    }

    return Right;
  };

  return (
    <div className="flex flex-col gap-2 overflow-auto">
      <span className="text-lg font-medium px-4">Conversion Rate</span>
      <div className="flex flex-col overflow-auto gap-2 p-4">
        {pairConversions.map(({ base_code, target_code, conversion_rate }) => (
          <div
            className="flex flex-row items-center text-sm justify-between"
            key={`${base_code}-${target_code}`}
          >
            <span className="font-semibold flex flex-row items-center gap-1 justify-start">
              <span className="w-8">{base_code}</span>
              {renderIndicator(conversion_rate, 'base')}
            </span>
            <span className="text-center">{conversion_rate}</span>
            <span className="font-semibold flex flex-row items-center gap-1 justify-end ">
              {renderIndicator(conversion_rate, 'target')}
              <span className="w-8 text-right">{target_code}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversionRate;
