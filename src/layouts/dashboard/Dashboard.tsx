import ConversionRate from './components/ConversionRate';
import Converter from './components/Converter';
import CurrencyDetails from './components/CurrencyDetails';

const Dashboard = () => {
  return (
    <div className="bg-gray-950 text-gray-200 h-screen p-2 flex gap-2">
      <div className="bg-gray-900 inline-grid grid-rows-[min-content,1fr] gap-4 rounded-lg">
        <Converter />
        <ConversionRate />
      </div>
      <div className="bg-gray-900 rounded-lg grow">
        <CurrencyDetails />
      </div>
    </div>
  );
};

export default Dashboard;
