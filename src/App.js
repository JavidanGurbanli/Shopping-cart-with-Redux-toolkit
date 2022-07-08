import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
function App() {
  const travels = data.map(item => {
    return (
      <Card
       title = {item.title}
       location = {item.location}
       startDate = {item.startDate}
       endDate = {item.endDate}
       description = {item.description}
       imageUrl = {item.imageUrl}
       mapsUrl = {item.googleMapsUrl}
      />
    )
  })
  return (
    <div className="App">
    <Navbar/>
    {travels}
    </div>
  );
}

export default App;
