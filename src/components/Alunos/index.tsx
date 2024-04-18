import { useContext } from "react"
import { Nome } from "../Nome"
import { UserContext } from "../../context/user"
import { CadAluno } from "../CadAluno";
export function Alunos(){
    const { qtdAlunos } = useContext(UserContext);
    return(
        <div>
            <h3>Quantidade de Alunos: {qtdAlunos}</h3>
            <CadAluno/>
            <Nome/>
        </div>
    )
}