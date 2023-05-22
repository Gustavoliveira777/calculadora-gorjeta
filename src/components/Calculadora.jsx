import cifrao from "../images/cifrao.png"
import pessoa from "../images/pessoa.png"
import { MainContainer, Label, InputContainer, ContaContainer, ButtonsContainer, PercentagemContainer, PessoasContainer, ResultadosContainer, GorjetaContainer, TotalContainer,GorjetaTotalContainer } from "./Calculadora.styles"
export default function Calculadora() {
    return (
        <MainContainer>
            <form action="">
                <ContaContainer>
                    <Label htmlFor="bill">Conta</Label>
                    <InputContainer>
                        <img src={cifrao} alt="cifrao" />
                        <input type="number" id="bill" placeholder="0" />
                    </InputContainer>
                </ContaContainer>
                <PercentagemContainer>
                    <Label htmlFor="custom-tip">Selecione a percentagem %</Label>
                    <ButtonsContainer>
                        <input type="button" value="5%" />
                        <input type="button" value="10%" />
                        <input type="button" value="15%" />
                        <input type="button" value="25%" />
                        <input type="button" value="50%" />
                        <input type="text" name="custom-tip" id="custom-tip" placeholder="Outro" />
                    </ButtonsContainer>
                </PercentagemContainer>
                <PessoasContainer>
                    <Label htmlFor="people">Número de pessoas</Label>
                    <InputContainer>
                        <img src={pessoa} alt="pessoa" />
                        <input type="number" name="people" id="people" placeholder="0" />
                    </InputContainer>
                </PessoasContainer>
            </form>
            <ResultadosContainer>
                <GorjetaTotalContainer>
                    <GorjetaContainer>
                        <p>
                            Gorjeta <br />
                            <span>/pessoa</span>
                        </p>
                        <p>R$ 0.00</p>
                    </GorjetaContainer>
                    <TotalContainer>
                        <p>
                            Total <br />
                            <span>/pessoa</span>
                        </p>
                        <p>R$ 0.00</p>
                    </TotalContainer>
                </GorjetaTotalContainer>
                <button>Limpar</button>
            </ResultadosContainer>
        </MainContainer>
    )
}