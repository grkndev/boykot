import getData from "@/lib/data";
import Image from "next/image";


export default async function Home() {
  const data = await getData();
  return (
    <div className=" p-8 flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative w-84 h-24">
          <Image fill src="/slogan.svg" alt="Boykot et!"  />
        </div>
        <p className="text-zinc-500 font-bold">Demokrasi için boykot et!</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-auto  max-w-screen-2xl justify-center items-center h-screen p-4">
        {
          data.map((item: string) => (
            <div className=" aspect-square flex flex-col items-center justify-center border rounded-2xl border-zinc-300 w-full p-6 " key={item}>
              <Image className="w-full" src={`https://boykotyap.net${item}`} alt={item.split("/").pop() || ""} width={512} height={512} />

            </div>
          ))
        }
      </div>

    </div>
  );
}
