import CountryData from '@/app/(data)/CountryData'
import Link from 'next/link'

interface Params {
  params:{
    country:string
  }
}


interface CountryData {
  country:string,
  capital:string,
  population:number,
  region:string,
}

export default  function CountryPage({params}:Params) {

  const selectedCountry: string = params.country;

  const selectedCountryData: CountryData[] = CountryData.filter((item: CountryData) => (
    selectedCountry.toLowerCase() === item.country.toLowerCase()
  ))

  const [{ country , population , capital , region }] = selectedCountryData;

  console.log(selectedCountryData)

  return (
    <div className="h-screen w-full py-10 text-5xl gap-6 flex flex-col justify-center
     items-center  ">
      <h1>Country Name : {country}</h1>
      <h2 className="text-4xl">Capital city : {capital}</h2>
      <h2 className="text-4xl">Population : {population}</h2>
      <h2 className="text-4xl">Region : {region}</h2>
      <Link href={'/countries'} className=' border-2 border-black rounded-lg px-4 py-2 text-xl hover:bg-teal-800 hover:border-none hover:text-white font-bold transition-all duration-300 ease-linear'>Back to country page</Link>
      
    </div>
  );
}
