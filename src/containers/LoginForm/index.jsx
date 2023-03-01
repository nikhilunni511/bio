import styles from "./LoginForm.module.scss"

export default function LoginForm() {
  return (
    <form action="/api/form" method="post" className={styles.loginForm}>
      <div className={styles.inputWrap}>
        <input type="text" id="first" name="first" placeholder="Username" required />
      </div>

      <div className={styles.inputWrap}>
        <input type="text" id="last" name="last" placeholder="Password" required />
      </div>

      <button className={styles.submitButton} type="submit">Submit</button>
    </form>
  )
}