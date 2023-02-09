import { FootballProvider } from "@context/FootballProvider"
import Router from "@routes/Router"

const App = () => (
    <FootballProvider>
        <Router />
    </FootballProvider>
)

export default App
