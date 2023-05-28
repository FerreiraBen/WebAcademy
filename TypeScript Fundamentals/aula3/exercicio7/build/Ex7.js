"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Turno;
(function (Turno) {
    Turno["MANHA"] = "Manh\u00E3";
    Turno["TARDE"] = "Tarde";
    Turno["NOITE"] = "Noite";
})(Turno || (Turno = {}));
var Area;
(function (Area) {
    Area["HUMANAS"] = "Humanas";
    Area["BIOLOGICAS"] = "Biol\u00F3gicas";
    Area["EXATAS"] = "Exatas";
})(Area || (Area = {}));
class Turma {
    constructor(id, descricao, turno, curso) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    static adicionarTurma(turma) {
        Turma.turmas.push(turma);
    }
    static excluirTurma(id) {
        const index = Turma.turmas.findIndex((turma) => turma.id === id);
        if (index !== -1) {
            Turma.turmas.splice(index, 1);
        }
    }
    static alterarTurma(id, novaDescricao) {
        const turma = Turma.buscarTurma(id);
        if (turma) {
            turma.setDescricao(novaDescricao);
        }
    }
    static buscarTurma(id) {
        return Turma.turmas.find((turma) => turma.id === id);
    }
    static imprimirTurmas() {
        Turma.turmas.forEach((turma) => {
            console.log(`ID: ${turma.id}`);
            console.log(`Descrição: ${turma.descricao}`);
            console.log(`Turno: ${turma.turno}`);
            console.log(`Curso: ${turma.curso.nomeDoCurso}`);
            console.log(`Área: ${turma.curso.area}`);
            console.log('------------------');
        });
    }
}
Turma.turmas = [];
__decorate([
    validarDescricao
], Turma.prototype, "setDescricao", null);
function validarDescricao(target, propertyKey, descriptor) {
    const originalSet = descriptor.set;
    descriptor.set = function (descricao) {
        if (descricao.length < 10) {
            throw new Error('A descrição deve ter no mínimo 10 caracteres.');
        }
        originalSet.call(this, descricao);
    };
}
// Exemplo de uso
const curso1 = {
    nomeDoCurso: 'Engenharia Civil',
    area: Area.EXATAS,
};
const curso2 = {
    nomeDoCurso: 'Psicologia',
    area: Area.HUMANAS,
};
const turma1 = new Turma(1, 'Te', Turno.NOITE, curso1);
Turma.adicionarTurma(turma1);
const turma2 = new Turma(2, 'Turma de Psicologia', Turno.TARDE, curso2);
Turma.adicionarTurma(turma2);
Turma.imprimirTurmas();
// Alterando a descrição da turma1
turma1.setDescricao('teste');
Turma.imprimirTurmas();
// Excluindo a turma2
Turma.excluirTurma(2);
Turma.imprimirTurmas();
