import { useState, FormEvent } from "react";

interface ContactData {
  name: string;
  email: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [form, setForm] = useState<ContactData>({
    name: "",
    email: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        placeholder="Name"
      />

      <input
        type="email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        placeholder="Email"
      />

      <button type="submit">Submit</button>
    </form>
  );
}