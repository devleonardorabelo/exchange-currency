import useGetPairConversion from './api/hooks/useGetPairConversion';

function App() {
  const { data, isLoading, error } = useGetPairConversion({
    from: 'BRL',
    to: 'USD',
  });

  if (isLoading) return <div>loading</div>;

  if (!data || error) return <div>error</div>;

  return (
    <div>
      <div>
        <span>{data.base_code} - 1</span>
        <span>
          {data.target_code} - {1 * data.conversion_rate}
        </span>
      </div>
    </div>
  );
}

export default App;
