type WelcomeProps = {
  username: string;
  isPremium: boolean;
};

const Welcome = ({ username, isPremium }: WelcomeProps) => {
  return (
    <h2>
      {isPremium
        ? "Welcome back, premium user!"
        : "Welcome, guest"}
    </h2>
  );
};

export default Welcome;