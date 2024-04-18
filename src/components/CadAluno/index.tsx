import { useContext, useState } from "react";
import { UserContext } from "../../context/user";

export function CadAluno(){
    const { adicionarAluno } = useContext(UserContext);
    const [novoAluno, setNovoAluno] = useState('');

    function handleAdicionarAluno() {
        if (novoAluno.trim() !== '') {
            adicionarAluno(novoAluno);
            setNovoAluno('');
        }
    }

    return(
        <div>
            <h3>Digite o nome do aluno:</h3>
            <input 
                type="text" 
                value={novoAluno} 
                onChange={(e) => setNovoAluno(e.target.value)} 
            />
            <button onClick={handleAdicionarAluno}>Adicionar Aluno</button>
        </div>
    );
}
