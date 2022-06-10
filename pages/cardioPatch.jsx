import styles from '../styles/pages.module.scss';

export default function Cardiopatch() {
  return (
    <div className={styles.cardioPatch}>
      <h1 className={styles.mainHeader}>CardioPatch</h1>
      <h2 className={styles.secondHeader}>
        Simplificando e trazendo uma melhor performance para o exame de ECG
      </h2>
      <p className={styles.text}>
        Visando simplificar a vida de quem precisa por razões médicas fazer um
        ECG periodicamente e também aqueles que só querem acompanhar sua saúde,
        criamos o CardioPatch. <br />
        O CardioPatch é um sensor para ECG, pressão e oximetria desenvolvido com
        base em um arduino e três diferentes sensores. Essa caracteristica de
        desenvolvimento nos permite um custo muito baixo, bem mais em conta que
        uma máquina comum de ECG. <br />
        A aplicação é simplificada. O médico, enfermeiro ou farmaceutico apenas
        precisa retirar o patch da embalagem e colar no torax do paciente, que
        por sua vez utilizando um código linka ao aplicativo e pronto! Sem
        maiores complicações ou gasto de tempo. Tenha todas as suas informações
        disponiveis no ceu smartphone a qualquer momento. Nossa bateria dura
        aproximadamente uma semana. <br />
        Já mencionamos que o patch é bem discreto? Coloque ele e não tenha
        receio de ir para a academia, piscina ou qualquer outro evento social.
        Mais segurança e conforto para a sua vida. O CardioPatch está aqui para
        você! <br />
        Para maiores informações, entre em contato conosco. <br />
        Em breve nas melhores farmácias perto de você!
        <hr />
        <p>
          O CardioPatch hoje está sendo desenvolvido em parceria com a BP -
          Beneficência Portuguesa de São Paulo e foi nossa porta de entrada para
          o Health me Up, programa de inovação aberta na saúde realizada por
          empresas do setor no interior de São Paulo.
        </p>
      </p>
      <div className={styles.cardioPatchImage} />
    </div>
  );
}
