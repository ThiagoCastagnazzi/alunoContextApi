import { Alunos } from './components/Alunos'
import UserProvider from './context/user'

function App() {

  return (
    <UserProvider>
    <div>
      <h1>Minha Página</h1>
      <hr />
      <Alunos/>
    </div>
    </UserProvider>
  )
}

export default App
