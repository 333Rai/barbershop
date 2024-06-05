import './App.css';
import About from './components/about/About';
import Appointment from './components/appointment/Appointment';
import Barbers from './components/barbers/Barbers';
import Clients from './components/clients/Clients';
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Pricing from './components/pricing/Pricing';
import Services from './components/services/Services';

const AppContent = () => {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Services />
			<Clients />
			<Barbers />
			<Pricing />
			<Appointment />
			<Contacts />
		</div>
	);
};
const App = () => {
	return (
		<div>
			<AppContent />
		</div>
	);
};

export default App;
