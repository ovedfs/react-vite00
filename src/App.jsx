import UserCard from "./components/UserCard"
const users = [
  {
    id: 1,
    name: "Adela Torres",
    email: "adela@correo.com",
    phone: "5555-5656",
  },
  {
    id: 2,
    name: "Pedro Luna",
    email: "pedro@correo.com",
    phone: "5555-5757",
  },
  {
    id: 3,
    name: "Sofia Prado",
    email: "sofia@correo.com",
    phone: "5555-5858",
  }
]

function App() {

  return (
    <>
      <h1>Users:</h1>
      {/* <UserCard
        name="Adela Torres"
        email="adela@correo.com"
        phone="5555-5656"
      />
      <UserCard
        name="Pedro Luna"
        email="pedro@correo.com"
        phone="5555-5757"
      />
      <UserCard 
        name="Sofia Prado"
        email="sofia@correo.com"
        phone="5555-5858"
      /> */}

      {
        users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        ))
      }
    </>
  )
}

export default App
