import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Define constantes utilizadas para identificar as operações de cálculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {
  }

  /**
   * Método que calcula uma operação matemática dado dois números
   * Suporta operações soma, subtração, divisão
   *
   * @param num1
   * @param num2
   * @param operacao
   */
  calcular(num1: number, num2: number, operacao: string): number {
    // armazena resultado da operação
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
