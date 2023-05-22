import './App.css';
import Listing from './components/Listing/Listing';
import etsy from './data/etsy.json';

function App() {
  const processedItems = etsy.map(item => ({
    listing_id: item.listing_id || "N/A",
    url: item.url || "#",
    MainImage: item.MainImage ? item.MainImage.url_570xN : 'https://prikolist.club/wp-content/uploads/2019/11/Screenshot_2-12.jpg',
    title: item.title || "No description",
    currency_code: item.currency_code || "-",
    price: item.price || "-",
    quantity: item.quantity || 0,
  }));
  return (
    <Listing items={processedItems}></Listing>
  );
}

export default App;
