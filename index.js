class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando: ${ataque}`;
        console.log(mensagem);
    }
}

// Uso aplicado
const heroi1 = new Heroi("Dovakin", 30, "guerreiro");
heroi1.atacar();

const heroi2 = new Heroi("Dragonborn", 150, "mago");
heroi2.atacar();