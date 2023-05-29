/*Crie um objeto círculo com os atributos 
raio e os métodos que calculem os dados informados pelo 
usuário:

•Área
•Circunferência
•Se um ponto X1,Y1 está dentro, na circunferência ou fora.

*/

/*Definindo o objeto círculo sem criar funcao construtora
var circulo = {
    
    raio: 0,

    setRaio: function (raio) {
      this.raio = raio;
    },
    area: function () {
      return Math.PI * this.raio ** 2;
    },
    circunferencia: function () {
      return 2 * Math.PI * this.raio;
    },
    posicaoPonto: function (x, y) {
      const distancia = Math.sqrt((x ** 2) + (y ** 2));
      if (distancia < this.raio) {
        return "Dentro";
      } else if (distancia > this.raio) {
        return "Fora";
      } else {
        return "Na circunferência";
      }
    },
  };
  */

  // criando funcao construtora
function cria_circulo(raio){
    this.raio = raio;
    this.area = function(){
        return Math.PI * this.raio ** 2;
    }
    this.circunferencia = function(){
        return 2 * Math.PI * this.raio;
    }
    this.posicaoPonto = function(x, y){
        const distancia = Math.sqrt((x ** 2) + (y ** 2));
        if (distancia < this.raio) {
            return "Dentro da circunferencia";
        } else if (distancia > this.raio) {
            return "Fora da circunferencia";
        } else {
            return "Encima da circunferencia";
        }
    }
}
    
// Exemplo de uso do objeto círculo


circulo = new cria_circulo(5);
console.log(circulo.area());
console.log(circulo.circunferencia());
console.log(circulo.posicaoPonto(0,0));

circulo2 = new cria_circulo(3);
console.log(circulo2.area());
console.log(circulo2.circunferencia());
console.log(circulo2.posicaoPonto(5,0));


  