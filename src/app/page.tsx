import data from "@/lib/data";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex-1 p-4">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold">Boykot et!</h1>
        <p className="text-zinc-500 text-sm">Demokrasi için boykot et!</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-auto max-w-screen-2xl justify-center items-center h-screen p-4">
        {
          data.map((item) => (
            <div className=" aspect-square flex flex-col items-center justify-center border rounded-2xl border-zinc-300 w-full p-6 " key={item.name}>
              <Image className=" size-36" src={item.image} alt={item.alt} width={512} height={512} />
              <p className="text-zinc-500 text-sm">{item.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
