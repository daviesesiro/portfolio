import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span className='block text-6xl font-bold text-white'> Hello, </span>
      <h1 className="mb-2 text-4xl font-bold text-center text-purple-700">
        Welcome to Davies Esiro portfolio
      </h1>
      <p className="text-md text-gray-300">
        I build websites that make your competitors feel bad
      </p>
    </div>
  );
}
