import { CardWithForm } from "@components/card";
import { MenubarDemo } from "@components/menubar";
import { WelcomePage } from "@refinedev/core";

export default function Index() {
  return (
    <>
      <div>
        <MenubarDemo />
      </div>
      <div className="flex justify-center items-center mt-4">
        <CardWithForm />
      </div>
    </>
  );
}

Index.noLayout = true;
