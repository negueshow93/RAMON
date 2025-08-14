[index.html](https://github.com/user-attachments/files/21777617/index.html)
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rosa moda infantil</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
</head>
<body>

  <header>
    <h1>Rosa Moda infantil</h1>
    <nav>
      <a href="#">Início</a>
      <a href="#produtos">Produtos</a>
      <a href="#contato">Contato</a>
      <a href="#" onclick="mostrarCarrinho()">🛒 Carrinho (<span id="contador">0</span>)</a>
    </nav>
  </header>
<div>
    <p>
        <div> <input type="login" name="Usuario" required> <div>
        <input type="password" name="Senha" required>
        <button onclick="cadastro"> Cadastro</button> </button>
        <p>
        </div>
  <main>
    <section id="produtos">
      <h2>Produtos</h2>
      <div class="lista-produtos">
        <div class="produto">
          <img src="https://bordadosdaserra.com.br/wp-content/uploads/2020/01/Sem-Titulo-22.png.webp" alt="produto 1">
          <h3>Calcinha bunda rica </h3>
          <p>3 por R$20,00</p>
          <button onclick="adicionarAoCarrinho('Produto 1')">Adicionar ao Carrinho</button>
          <button onclick="comprar('Produto 1')">Comprar</button>
        </div>
        <div class="produto">
          <img src="https://bordadosdaserra.com.br/wp-content/uploads/2020/01/Sem-Titulo-22.png.webp" alt="Produto 2">
          <h3>camiseta feminina</h3>
          <p>R$ 150,00</p>
          <button onclick="adicionarAoCarrinho('Produto 2')">Adicionar ao Carrinho</button>
          <button onclick="comprar('Produto 2')">Comprar</button>
        </div>
        <div class="produto">
          <img src="https://bordadosdaserra.com.br/wp-content/uploads/2020/01/Sem-Titulo-22.png.webp" alt="Produto 3">
          <h3>Camiseta masculina</h3>
          <p>R$ 150,00</p>
          <button onclick="adicionarAoCarrinho('Produto 3')">Adicionar ao Carrinho</button>
          <button onclick="comprar('Produto 3')">Comprar</button>
        </div>
        <div class="produto">
          <img src="https://bordadosdaserra.com.br/wp-content/uploads/2020/01/Sem-Titulo-22.png.webp" alt="Produto 4">
          <h3>tênis infantil</h3>
          <p>R$ 150,00</p>
          <button onclick="adicionarAoCarrinho('Produto 4')">Adicionar ao Carrinho</button>
          <button onclick="comprar('Produto 4')">Comprar</button> 
        </div>
        <div class="produto">
          <img src="https://bordadosdaserra.com.br/wp-content/uploads/2020/01/Sem-Titulo-22.png.webp" alt="Produto 5">
          <h3>Produto 2</h3>
          <p>R$ 150,00</p>
          <button onclick="adicionarAoCarrinho('Produto 5')">Adicionar ao Carrinho</button>
          <button onclick="comprar('Produto 5')">Comprar</button>
        </div>
        
      </div>
    </section>

    <section id="carrinho" style="display:none;">
      <h2>Seu Carrinho</h2>
      <ul id="itensCarrinho"></ul>
    </section>

    <section id="contato">
      <h2>Contato</h2>
      <form>
        <label>Nome:</label><br>
        <input type="text" name="nome"><br>
        <label>Email:</label><br>
        <input type="email" name="email"><br>
        <label>Mensagem:</label><br>
        <textarea>Escreva aqui.</textarea><br>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>
  
<div>
  <i class="fab fa-whatsapp"></i>
  <a href="https://wa.me/+5571993399156" target="_blank">
  <img src=" https://fontawesome.com/icons/whatsapp?f=classic&s=brands/fa-whatsapp" alt=""> 
              71993399156
  </div>

  <footer>
    <p>&copy; Todos os direitos reservados.</p>
  </footer>

  <script src="script.js"></script>


</body>
</html>
