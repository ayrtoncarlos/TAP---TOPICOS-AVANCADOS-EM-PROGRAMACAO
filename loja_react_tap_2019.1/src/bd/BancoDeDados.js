const PRODUTOS = [
    {nome: 'O Livro da Lei', preco: 40.08, imagem: "https://images-na.ssl-images-amazon.com/images/I/51WxegQK3qL._SX329_BO1,204,203,200_.jpg"},
    {nome: 'Dogma e Ritual da Alta Magia', preco: 35.90, imagem: "https://images-na.ssl-images-amazon.com/images/I/41uG7rMRABL._SX334_BO1,204,203,200_.jpg"},
    {nome: 'Os Livros Sagrados De Thelema', preco: 35, imagem: "https://images-na.ssl-images-amazon.com/images/I/51BylW1HxXL._SX353_BO1,204,203,200_.jpg"},
    {nome: 'Aleister Crowley e o Deus Oculto', preco: 75, imagem: "https://images-na.ssl-images-amazon.com/images/I/41SVyEZcFcL._SX332_BO1,204,203,200_.jpg"},
    {nome: 'Biblia Satánica', preco: 41.55, imagem: "https://images-na.ssl-images-amazon.com/images/I/51AwBZNe5PL._SX384_BO1,204,203,200_.jpg"},
    {nome: 'O Martelo das Feiticeiras', preco: 34.50, imagem: "https://images-na.ssl-images-amazon.com/images/I/51cKZnKcDcL.jpg"},
    {nome: 'Aleister Crowley', preco: 63.90, imagem: "https://images-na.ssl-images-amazon.com/images/I/51lioGehTPL._SX357_BO1,204,203,200_.jpg"},
    {nome: 'Historia da Magia', preco: 41.61, imagem: "https://images-na.ssl-images-amazon.com/images/I/51YZrIkNcnL._SX345_BO1,204,203,200_.jpg"},
    {nome: 'A chave dos grandes mistérios', preco: 46.90, imagem: "https://images-na.ssl-images-amazon.com/images/I/411KBpCDTML._SX331_BO1,204,203,200_.jpg"},
    {nome: 'As Escrituras Satânicas', preco: 59.90, imagem: "https://images-na.ssl-images-amazon.com/images/I/51rSAFePKDL._SX344_BO1,204,203,200_.jpg"},
    {nome: 'A Clavícula de Salomão', preco: 38.69, imagem: "https://images-na.ssl-images-amazon.com/images/I/41Sp9ivI3NL._SX332_BO1,204,203,200_.jpg"},
    {nome: 'O Olho no Triângulo', preco: 68.70, imagem: "https://images-na.ssl-images-amazon.com/images/I/51zj78KK9YL._SX346_BO1,204,203,200_.jpg"}
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
}

export default BancoDeDados;