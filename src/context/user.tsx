import { ReactNode, createContext, useState } from "react";

interface UserProviderPros{
    children: ReactNode;
}

interface UserContextData{
    aluno: string;
    qtdAlunos: number;
    mudaNome: (nome: string) => void;
    setQtdAlunos: React.Dispatch<React.SetStateAction<number>>;
    alunosCadastrados: string[];
    adicionarAluno: (nome: string) => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderPros){
    const [aluno, setAluno] = useState('');
    const [qtdAlunos, setQtdAlunos] = useState(0);
    const [alunosCadastrados, setAlunosCadastrados] = useState<string[]>([]);

    function mudaNome(nome: string) {
        setAluno(nome);
    }

    function adicionarAluno(nome: string) {
        setAlunosCadastrados([...alunosCadastrados, nome]);
        setQtdAlunos(prevQtd => prevQtd + 1);
    }

    return(
        <UserContext.Provider value={{ aluno, qtdAlunos, mudaNome, setQtdAlunos, alunosCadastrados, adicionarAluno }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;