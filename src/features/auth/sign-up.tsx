import { useState } from "react"
import { signUp } from "../../lib/auth-client"

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSignUp = async () => {
        await signUp.email({ email, password, name })
        alert("Inscription réussie !")
    }

    return (
        <div style={{ backgroundColor: "white", color: "black", padding: "20px", borderRadius: "8px", width: "300px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>Inscription</h2>
            <input style={{ border: "1px solid black", padding: "8px", borderRadius: "4px", color: "black" }} placeholder="Nom" onChange={(e) => setName(e.target.value)} />
            <input style={{ border: "1px solid black", padding: "8px", borderRadius: "4px", color: "black" }} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input style={{ border: "1px solid black", padding: "8px", borderRadius: "4px", color: "black" }} placeholder="Mot de passe" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button style={{ backgroundColor: "black", color: "white", padding: "8px", borderRadius: "4px", cursor: "pointer" }} onClick={handleSignUp}>S'inscrire</button>
        </div>
    )
}
