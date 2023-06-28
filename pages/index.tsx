import { CardWithForm } from "@components/card";
import { WelcomePage } from "@refinedev/core";

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold  bg-red-400 text-center">
        Test shadcn/ui
      </h1>
      <div className="flex justify-center items-center mt-4">
        <CardWithForm />
      </div>
    </>
  );
}

Index.noLayout = true;
