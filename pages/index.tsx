
import { useState } from "react";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import Botao from "@/components/Botao";
import resultado from "./resultado";
import Questionario from "@/components/Questionario";

const questaoMock = new QuestaoModel(1, 'Qual a Melhor cor?', [
		RespostaModel.errada('Verde'),
		RespostaModel.errada('Vermelha'),
		RespostaModel.errada('Azul'),
		RespostaModel.certa('Preta'),
	])


export default function Home() {

	const [questao, setQuestao] = useState(questaoMock)
	
	function questaoRespondida(questao: QuestaoModel){

	}

	function irPraProximoPasso() {

	}
		
  return (
	<div style={{
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100vh'		
	}}>
		<Questionario
			questao={questao}
			ultima={false}
			questaoRespondida={questaoRespondida}
			irPraProximoPasso={irPraProximoPasso}
		/>	
	</div>
    
  );
}
