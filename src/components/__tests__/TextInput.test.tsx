import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import TextInput from '../TextInput';

describe('TextInput', () => {
  it('renders input element correctly', () => {
    const { getByTestId } = render(<TextInput />);
    const inputElement = getByTestId('text-input');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders icon correctly when provided', () => {
    const TestIcon = () => <span />;
    const { getByTestId } = render(<TextInput Icon={TestIcon} />);
    const iconElement = getByTestId('text-input-icon');
    expect(iconElement).toBeInTheDocument();
  });
});
