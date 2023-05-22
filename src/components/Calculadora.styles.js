import styled from "styled-components";

export const MainContainer = styled.main`
background: #ffffff;
border-radius: 25px 25px 0 0;
padding: 2rem;
@media(min-width: 950px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 57.5rem;
    gap: 3rem;
    margin-inline:auto;
    padding: 2.5rem;
    border-radius: 25px;
}
`
export const Label = styled.label`
color:#5e7a7d;
line-height: 1.5rem;
margin-bottom: 0.375rem;
display: block;
`
export const InputContainer = styled.div`
background: #f3f9fa;
padding: 0.375rem 1rem;
display: flex;
align-items: center;
border-radius: 5px;
input{
    border: 0;
    background: transparent;
    font-size: 1.5rem;
    text-align: right;
    width: 100%;
    outline: none;
    color: #00474B;
    &::placeholder{
        color: #9ebbbd;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
}
`
export const ContaContainer = styled.div`
margin-bottom: 2rem;
`
export const ButtonsContainer = styled.div`
    margin-top: 0.625rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    input{
        border: 0;
        outline: none;
        font-size: 1.5rem;
        padding: 0.375rem 1rem;
        border-radius: 5px;
    }
    input[type="button"]{
        background: #00474b;
        color: #ffffff;
    }
    input#custom-tip{
        background: #f3f9fa;
        width: 100%;
        text-align: center;
        color: #00474B;
        &::placeholder{
            color: #9ebbbd;
        }
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
    }

@media(min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
}
`
export const PercentagemContainer = styled(ContaContainer)``

export const PessoasContainer = styled(ContaContainer)``

export const ResultadosContainer = styled.div`
background: #00474b;
border-radius: 15px;
padding: 2rem 1.5rem;
@media(min-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
button{
    border: 0;
    outline: none;
    font-size: 1.25rem;
    padding-block: 0.5rem;
    border-radius: 5px;
    background: #26c2ae;
    color: #00474b;
    width: 100%;
    text-transform: uppercase;
}
`
export const GorjetaContainer = styled.div`
display: flex;
margin-bottom:1.5rem;
justify-content: space-between;
align-items: center;
p:first-child{
    color: #ffffff;
    line-height: 1.5rem;

    span{
        color:#7f9d9f;
        font-size: 0.75rem;
    }
}
p:last-child{
    color:#26c2ae;
    font-size: 2rem;
    line-height: 3rem;
}
`
export const TotalContainer = styled(GorjetaContainer)`
margin-bottom: 2rem;
`
export const GorjetaTotalContainer = styled.div``