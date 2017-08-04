import styles from './index.sass'

console.log(styles)

if(styles.somevar) document.body.classList.add(styles.succClass)
else document.body.classList.add(styles.errClass)
