import './App.css';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

export const App = () => {
	return (
		<div className="App">
			<Header></Header>
			<Main></Main>
			<Footer></Footer>
		</div>
	);
};