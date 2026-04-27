import { useNumberStorage } from "./hooks/useNumberStorage";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [count, setCount] = useNumberStorage("count", 0);

  const [settings, setSettings] = useLocalStorage("settings", {
    language: "en",
    notifications: true,
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <h2>Language: {settings.language}</h2>
      <button
        onClick={() =>
          setSettings({ ...settings, language: "ar" })
        }
      >
        Change Language
      </button>
    </div>
  );
}