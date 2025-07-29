import questoes from "../questoes/bancoDeQuestoes"

export default (req, res) => {
	questoes
	res.status(200).json(questoes.map(questao => questao.id))
}