import { useState, FormEvent } from "react";

interface AgeFormProps {
  onSubmit: (age: number) => void;
}

export default function AgeForm({ onSubmit }: AgeFormProps) {
  const [age, setAge] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (age < 18) {
      alert("Must be 18+");
      return;
    }

    onSubmit(age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter age"
      />
      <button type="submit">Submit</button>
    </form>
  );
}