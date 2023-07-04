import { PostProvider } from "./context/postContext";
import RoutesMain from "./routes";

function App() {
  return (
    <PostProvider>
      <RoutesMain />
    </PostProvider>
  );
}

export default App;
