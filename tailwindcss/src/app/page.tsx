import Image from "next/image";

export default function Home() {
  return (
    <div className="scroll-mt-[100px]">
      <nav className="fixed top-0 flex w-screen items-center justify-center gap-3 bg-gray-300 py-4">
        <a href="#home">home</a>
        <a href="#bonus">bonus</a>
        <a href="#contract">contract</a>
      </nav>
      <section id="home" className="scroll-mt-16 h-[1000px]  bg-green-300 p-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo, alias corrupti ratione id dicta perferendis tenetur culpa aperiam dolore, commodi eius molestias voluptatem fugit enim neque tempore hic amet!</p>
      </section>
      <section id="bonus" className="scroll-mt-16 h-[1000px]  bg-blue-300 p-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo, alias corrupti ratione id dicta perferendis tenetur culpa aperiam dolore, commodi eius molestias voluptatem fugit enim neque tempore hic amet!</p>
      </section>
      <section id="contract" className="scroll-mt-16 h-[1000px]  bg-purple-300 p-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo, alias corrupti ratione id dicta perferendis tenetur culpa aperiam dolore, commodi eius molestias voluptatem fugit enim neque tempore hic amet!</p>
      </section>
    </div>
  );
}
