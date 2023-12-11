import { GetStartedButton } from "./components/client/get-started-button";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h1 className="animate-bounce text-white text-4xl text font-bold self-center drop-shadow-lg">
        CampusBuddy
      </h1>
      <GetStartedButton />
    </div>
  );
};

export default HomePage;
