import Users from "./features/users/get-users/users"
import SignUp from "./features/auth/sign-up"
import SignIn from "./features/auth/sign-in"

export function App() {
  return (
    <div className="flex flex-col min-h-svh p-6 gap-6">
      <SignUp />
      <SignIn />
      <Users />
    </div>
  )
}

export default App
