import Converter from './components/Converter';

const Dashboard = () => {
  return (
    <div className="bg-gray-950 text-gray-200 h-screen p-2 flex gap-2">
      <div className="bg-gray-900 inline-flex p-4 rounded-lg">
        <Converter />
      </div>
      <div className="bg-gray-900 inline-flex p-4 rounded-lg grow"></div>
    </div>
  );
};

export default Dashboard;
