from flask import Flask, jsonify, request
from flask_cors import CORS
import google.generativeai as gemini

app = Flask(__name__)
CORS(app)

gemini.configure(api_key="AIzaSyB5BbhcEVoIF4T7lKnJmTFIjtaUSYIQV8I")
model = gemini.GenerativeModel('gemini-1.5-flash')

@app.route('/historia', methods=['POST'])
def make_history():
    dados = request.json
    nome = dados.get('nome')
    idade = dados.get('idade')
    personalidade = dados.get('personalidade')
    raca = dados.get('raca')
    genero = dados.get('genero')
    poderes = dados.get('poderes')
    objetivo = dados.get('objetivo')
    ponto_partida = dados.get('ponto_partida')
    ponto_final = dados.get('ponto_final')
    tempo = dados.get('tempo')
    genero_historia = dados.get('genero_historia')
    publico_alvo = dados.get('publico_alvo')
    elementos = dados.get('elementos')
    personagens = dados.get('personagens')


    prompt = f"""
        Crie uma história de {genero_historia} para {publico_alvo}. A história deve comerçar em um {ponto_partida} no {tempo}. O personagem principal da história deve se chamar {nome}, pertencente ao gênero {genero} e a raça {raca}. O personagem principal deve ser {personalidade} e possuir {idade} anos e possui poderes como {poderes}. O desenvolvimento da história deve ocorrer a partir do objetivo do personagem principal que é {objetivo}. A história atender os seguintes requisitos: {elementos} e {personagens} e terminar chegando no local {ponto_final}. A história não deve ter violência e Brutalidade, evitar temas como guerras, drogas, álcool, e qualquer conteúdo não apropriado para crianças, discriminação, estereótipos, estupro, cenas com relação sexual explicita ou implicita, palavrões ou insultos e está história tem que ter começo, meio e fim.Sempre crie um título para as histórias. 
    """

    try:
        resposta = model.generate_content(prompt)
        receita = resposta.text.strip().split('\n')
        return jsonify({"resposta": receita}), 200

    except Exception as e:
        return jsonify({"Erro": str(e)}), 300

if __name__ == '__main__':
    app.run(debug=True)
