import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormularioInvitado from './components/FormularioInvitado';
import ListaFamilias from './components/ListaFamilias';
import Bienvenida from './weddingPublicApp/components/Bienvenida';
import Confirmacion from './weddingPublicApp/components/Confirmacion';
import Despedida from './weddingPublicApp/components/Despedida';
import ListaDeConfirmados from './components/ListaDeConfirmados';
import ListaDeNoConfirmados from './components/ListaDeNoConfirmados';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/:codigo" element={<Bienvenida />} />
					<Route path="/confirmacion/:codigo" element={<Confirmacion />} />
					<Route path="/despedida/:codigo/:trigger" element={<Despedida />} />
					<Route path="/admin" element={
						<ContenedorAdmin>
							<Titulo>Wedding Admin</Titulo>
							<FormularioInvitado />
							<ListasDeConfirmaciones>
								<ListaDeConfirmados />
								<ListaDeNoConfirmados />
							</ListasDeConfirmaciones>	
							<ListaFamilias />
						</ContenedorAdmin>
					} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

const ListasDeConfirmaciones = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 1em;
    width: 100%;

	@media (max-width: 600px) {
		flex-direction: column;
		font-size: 17px;
        width: 100%;
	}
`;
 
const ContenedorAdmin = styled.div`
	background-color: rgba(200, 170, 255, 0.657);
    box-shadow: 0.4em 0.4em 10px rgb(136, 66, 248), -0.4em -0.4em 10px rgb(136, 66, 248); 
    backdrop-filter: blur(5px);
	margin-top: 2em;
	margin-bottom: 2em;
	width: 100%;
	margin: 2em 0;
	padding: 2em 0.5em 2em 0.5em;
	border-radius: 5px;
	text-align: center;
	justify-content: center;
`;

const Titulo = styled.h2`
	padding: 0 2.2em;
	font-size: 4em;
	color: #fff;
	margin-bottom: 0.6em;
	margin-top: 0.3em;
`;
 
export default App;