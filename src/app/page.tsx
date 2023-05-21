import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <main className="flex min-h-[500px] flex-col items-center">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>

      <h1 className="text-[80px] font-bold mb-[24px] h-[280px] flex items-end">
        PRIMAFLIX
      </h1>
      <Searchbar main={true}></Searchbar>
    </main>
  );
}
