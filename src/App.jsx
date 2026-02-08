import { BookingProvider } from './context/BookingContext';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';

export default function App() {
  return (
    <BookingProvider>
      <Home />
      <BookingModal />
    </BookingProvider>
  );
}
