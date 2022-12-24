function soma(a: number, b: number): number {
    return a + b
}

// soma('Olá', 5)
soma(2, 5)

function soma2(a, b) {
    return a + b
}

soma2('Olá', 3)

let x = 5

soma(x, 4)

// objeto
// function cadastraAluno(aluno: {matricula: number, nome: string}) {} //sem usar interface

function cadastraAluno(aluno: Aluno) {} //usando interface

cadastraAluno({matricula: 123, nome: 'Danilo', dataNascimento: '03/07/1982'})
// cadastraAluno({matricula: '123', nome: 'Danilo'})
// cadastraAluno({matricula: 123})

// interface
interface Aluno {
    matricula: number,
    nome: string,
    dataNascimento: string
}

let aluno2 = {
    matricula: 123,
    nome: 'João',
    dataNascimento: '01/01/2000',
    turma: 3
}

cadastraAluno(aluno2)

class Estudante {
    matricula: number
    nome: string

    salvar() {}

    excluir() {}

}

let estudante1 = new Estudante()

estudante1.salvar()
estudante1.excluir()

