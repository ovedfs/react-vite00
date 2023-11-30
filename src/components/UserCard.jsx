function UserCard({ name, email, phone }) {
  return (
    <article className="user-card">
      <h3>{ name }</h3>
      <p>{ email }</p>
      <p>{ phone }</p>
    </article>
  )
}

export default UserCard