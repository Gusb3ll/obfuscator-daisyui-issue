import Button from "@/components/Button";
import AppLayout from "@/components/Layouts/App";

const Home = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-4 h-screen w-screen justify-center items-center">
        <Button title="Button 1" />
        <Button title="Button 2 Disabled" isDisabled={true} />
      </div>
    </AppLayout>

  );
}

export default Home