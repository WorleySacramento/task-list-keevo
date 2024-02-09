const Home = () => {
  return ( 
    <div>
   <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Aqui você pode adicionar o conteúdo da sua página inicial, como uma introdução ou informações sobre o seu aplicativo.</p>
      <p>Por favor, clique no botão abaixo para começar.</p>
      <button onClick={() => window.location.href = '/tasks'}>Ir para a Lista de Tarefas</button>
    </div>
    </div>
   );
}
 
export default Home;