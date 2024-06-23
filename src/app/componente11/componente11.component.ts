import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  //Objecto de formulário
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  // visibilidade dos botoes
  btnCadastrar:boolean = true

  // vector
  vector: Pessoa[] = []

  // armazenar indice da pessoa selecionada
  indice:number = -1

  // Função de cadastro
  cadastrar(){
    //Cadastro no vector
    this.vector.push(this.formulario.value as Pessoa)

    // Limpexa dos inputs
    this.formulario.reset()

    //Visualização via console
    //console.table(this.vector)
  }

  // função seleção
  selecionar(indice:number){
    // Atribuir o indice da pessoa
    this.indice = indice

    // Atribuir os dadados da pessoa
    this.formulario.setValue({
      nome: this.vector[indice].nome,
      cidade: this.vector[indice].cidade,
      idade: this.vector[indice].idade,
    })

    // Visibilidade dos botões
    this.btnCadastrar = false
  }

  // função de alterar
  alterar(){
    // Alterar vector
    this.vector[this.indice] = this.formulario.value as Pessoa

    // limpar input
    this.formulario.reset()

    // visibilidade
    this.btnCadastrar = true

    // tirar o índice
    this.indice = -1
  }

  excluir(){
    // Alterar vector
    this.vector.splice(this.indice, 1)

    // limpar input
    this.formulario.reset()

    // visibilidade
    this.btnCadastrar = true

    // tirar o índice
    this.indice = -1
  }

  limpar(){
    this.formulario.reset()

    // visibilidade
    this.btnCadastrar = true

    // tirar o índice
    this.indice = -1
  }


}
