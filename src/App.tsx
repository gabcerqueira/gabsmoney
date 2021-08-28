import { createServer } from "miragejs";
import Dashboard, { dataItem } from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";

createServer({
	routes() {
		this.namespace = "api";
		this.get("/transactions", () => {
			return [
				{
					titulo: "Trabalho Faculdade",
					preço: 3000,
					categoria: "Venda",
					ativo: true,
					data: "25/10/2021",
				},
				{
					titulo: "Hot dog",
					preço: 25,
					categoria: "Alimentação",
					ativo: false,
					data: "29/10/2021",
				},
			] as dataItem[];
		});
	},
});

const App = () => {
	return (
		<>
			<Header />
			<Dashboard />
			<GlobalStyle />
		</>
	);
};

export default App;
