import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

export const Business = () => (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Você faz o negócio, <br className="sm:block hidden" /> nós cuidamos do dinheiro.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Com o cartão de crédito certo, 
        você pode melhorar sua vida financeira acumulando crédito, 
        ganhando recompensas e economizando dinheiro. 
        Mas com centenas de cartões de crédito no mercado.</p>
      </div>
    </section>
)

export default Business