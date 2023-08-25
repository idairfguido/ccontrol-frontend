import './App.css'
import { Card } from './components/card/card';
import { useAddressData } from './hooks/useAddressData';

function App() {
  const { data } = useAddressData();
  return (
    <div className='contatiner'>
      <h1>CControl</h1>
      <div className="card-grid">
        {data?.map(addressData => <Card
          number={addressData.number}
          status={addressData.status}
          cep={addressData.cep}
          street={addressData.street}
          district={addressData.district}
          city={addressData.city}
          state={addressData.state}
        />
        )}
      </div>
    </div>
  )
}

export default App
