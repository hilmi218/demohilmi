export const VITE_STARTER_SOURCE = `
import { Refine, WelcomePage } from "@refinedev/core";

function App() {
    return (
        <Refine>
            <WelcomePage />
        </Refine>
    );
}

export default App;
`.trim();
