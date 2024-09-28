import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 h-screen w-screen justify-center items-center">
      <Button title="Button 1" />
      <Button title="Button 2 Disabled" isDisabled={true} />
    </div>
  );
}

export default Home