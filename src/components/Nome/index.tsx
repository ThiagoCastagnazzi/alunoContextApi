import { useContext } from "react";
import { UserContext } from "../../context/user";

export function Nome(){
    const { aluno, alunosCadastrados } = useContext(UserContext);
    return(
        <div>
            <strong>Aluno: {aluno}</strong>
            <h4>Alunos cadastrados até o momento:</h4>
            <ul>
                {alunosCadastrados.map((aluno, index) => (
                    <li key={index}>{aluno}</li>
                ))}
            </ul>
        </div>
    );
}
