import Link from 'next/link'
export default async function CountryPage({
  params,
}: {
  params: { country: string };
}) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${params.country}`
  );
  const data = await res.json();

  const countryName = data[0].name.common;
  const capitalCity = data[0].capital;
  const population = data[0].population;
  const region = data[0].region;

  return (
    <div className="h-screen w-full py-10 text-5xl gap-6 flex flex-col justify-center items-center">
      <h1>Country Name : {countryName}</h1>
      <h2 className="text-4xl">Capital city : {capitalCity}</h2>
      <h2 className="text-4xl">Population : {population}</h2>
      <h2 className="text-4xl">Region : {region}</h2>
      <Link href={'/countries'} className=' border-2 border-black rounded-lg px-4 py-2 text-xl hover:bg-teal-800 hover:border-none hover:text-white font-bold transition-all duration-300 ease-linear'>Back to country page</Link>
      
    </div>
  );
}
