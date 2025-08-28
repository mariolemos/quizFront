import styles from '../styles/estatistica.module.css'

interface EstatisticaProps {
    valor: any
    texto: string
    corFundo: string
    corFonte: string
}

export default function Estatistica(props: any) {
    return(
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor:props.corFundo ?? '#FDD60F',
                color: props.corFonte ?? '#333'
            }}>
                {props.valor}
            </div>

            <div className={styles.texto}>
                {props.texto}
            </div>

        </div>
    )

}