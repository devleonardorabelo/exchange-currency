import { Icon as IIcon } from 'iconsax-react';
import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: IIcon;
}

const TextInput: FC<Props> = ({ Icon, ...rest }) => {
  return (
    <div className="relative">
      {Icon && (
        <span className="absolute top-0 bottom-0 flex items-center left-3">
          <Icon size={16} />
        </span>
      )}
      <input
        type="text"
        className={`rounded-lg border p-2 border-gray-700 bg-gray-900 flex focus:border-blue-500 outline-none ${Icon && 'pl-9'}`}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
