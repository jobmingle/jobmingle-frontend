// pages/_app.js
import AOS from "aos";
import "aos/dist/aos.css";

function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			offset: 1,
		});
	}, []);

	return <Component {...pageProps} />;
}

export default App;
