import Image from "next/image";
import imagelogo from "@/asset/ChatGPT Image Apr 8, 2025, 02_02_00 PM.png"; // Adjust the path as necessary
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to TestTaker</h1>
      <p className="mt-4 text-lg">Your one-stop solution for online assessments.</p>
      <Image
        src={imagelogo}
        alt="TestTaker Logo"
        width={300}
        height={300}
        className="mt-8"
      />
    </main>
  );
}
