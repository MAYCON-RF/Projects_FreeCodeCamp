function myLocalScope() {
  // Altere apenas o código abaixo desta linha
const myVar= 0;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Executar e verificar o console
// myVar não está definida fora do myLocalScope
console.log('outside myLocalScope', myVar);