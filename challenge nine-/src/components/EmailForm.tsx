import { useState, FormEvent } from "react";

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

export default function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

