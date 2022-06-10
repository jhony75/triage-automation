import styles from '../styles/pages.module.scss';

export default function TriageAutomation() {
  return (
    <div className={styles.cardioPatch}>
      <h1 className={styles.mainHeader}>Automação de Triagem</h1>
      <h2 className={styles.secondHeader}>
        Trazendo agilidade a um processo de vida ou morte.
      </h2>
      <p className={styles.text}>
        O processo de triagem é o primeiro passo para que haja atendimento
        médico nos hospitais do Brasil hoje. <br />
        Este processo demanda multiplas atividades, normalmente realizadas por
        um profissional de enfermagem. Embora pareça simples, a triagem é o que
        define a velocidade e prioridade de atendimento de um paciente, e
        qualquer erro pode ser fatal. Por essa razão trazemos um robô que pode
        fazer as aferições necessarias no paciente enquanto este preenche
        informações básicas sobre si, liberando assim os profissionais de
        enfermagem para desempenharem outras tarefas e em casos pandemicos,
        agindo como uma camada extra de proteção. <br />
        Embora nosso protótipo seja estático, nossos planos são que no futuro o
        robô seja móvel e possa sozinho se movimentar pelas dependencias do
        hospital para ser útil onde mais for necessário. <br />
        Para maiores informações, entre em contato conosco.
      </p>
      <div className={styles.triageAutomationImage} />
    </div>
  );
}
