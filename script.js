const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está assistindo a um documentário sobre aquecimento global e percebe como o aumento da temperatura está afetando a sociedade e o meio ambiente. Qual a sua principal preocupação ao ver essas informações?",
        alternativas: [
            {
                texto: "Preocupa-me como o aquecimento global pode agravar crises sociais e desigualdades.",
                afirmacao: "Você está mais consciente dos impactos sociais do aquecimento global e quer saber como a tecnologia pode ajudar."
            },
            {
                texto: "Acho que o aquecimento global é um problema grave, mas não sei o que posso fazer para ajudar.",
                afirmacao: "Você está ciente do problema, mas sente-se incerto sobre como contribuir para a solução."
            },
            {
                texto: "Não vejo o aquecimento global como uma grande ameaça comparado a outros problemas mais imediatos.",
                afirmacao: "Você acredita que outras questões mais urgentes devem ser abordadas antes do aquecimento global."
            }
        ]
    },
    {
        enunciado: "Diante da crescente preocupação com o aquecimento global, você nota que alguns grupos na internet estão promovendo o uso de drogas como uma forma de escapar da ansiedade causada por essas notícias. Qual é sua reação a isso?",
        alternativas: [
            {
                texto: "Eu acho que usar drogas para escapar da realidade é um problema sério e que precisamos de mais suporte psicológico e educação sobre o impacto das drogas.",
                afirmacao: "Você decide buscar informações e apoiar iniciativas que promovem a educação sobre saúde mental e uso responsável de drogas."
            },
            {
                texto: "Acredito que a internet deve ser usada para buscar alternativas mais saudáveis e eficazes para lidar com o estresse e a ansiedade.",
                afirmacao: "Você passa a promover o uso consciente da internet e busca maneiras de apoiar soluções mais saudáveis e educativas."
            },
            {
                texto: "Não vejo problema em algumas pessoas usarem drogas para lidar com o estresse, desde que isso não afete outras pessoas.",
                afirmacao: "Você acredita que o uso de drogas é uma escolha pessoal e que cada um deve decidir como lida com o estresse."
            }
        ]
    },
    {
        enunciado: "Ao pesquisar sobre formas de lidar com o estresse e as preocupações sociais na internet, você encontra diversas soluções tecnológicas e estratégias. Como você decide usar essas informações para ajudar a sociedade?",
        alternativas: [
            {
                texto: "Crio uma campanha online para promover a educação sobre saúde mental e o impacto das drogas, utilizando a internet como uma plataforma para conscientização.",
                afirmacao: "Você se torna um defensor da educação digital e da conscientização sobre saúde mental, contribuindo para um uso mais responsável da internet."
            },
            {
                texto: "Desenvolvo um aplicativo que ajuda as pessoas a se conectarem com grupos de apoio e recursos sobre o impacto do aquecimento global e o uso responsável de drogas.",
                afirmacao: "Você utiliza suas habilidades tecnológicas para criar ferramentas que ajudam a comunidade a lidar com os desafios atuais de forma construtiva."
            },
            {
                texto: "Acho que a tecnologia deve ser usada principalmente para entretenimento e não necessariamente para resolver problemas sociais.",
                afirmacao: "Você acredita que as soluções tecnológicas devem ser secundárias e que outras abordagens podem ser mais eficazes."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O impacto da sociedade em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
