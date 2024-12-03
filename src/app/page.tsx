import { Button } from "@/components/ui/button";
import { BrainCogIcon, GlobeIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "store your pdg Documents",
    description: "Store your documents in the cloud",
    icon: GlobeIcon,
  },
  {
    name: "cloudBackup",
    description: "Rest assured knowing document are safely backed up on the cloud. ",
    icon: ZapIcon,

  },
  {
    name: "Chat memorisation",
    description: "Our intelligent chatbot remembers privious interactions, providing a seamless and personalized experience",
    icon: BrainCogIcon,
  },
  {
    name: "Chat memorisation",
    description: "Our intelligent chatbot remembers privious interactions, providing a seamless and personalized experience",
    icon: BrainCogIcon,
  }
]
export default function Home() {
  return (
    <main className="flex-1 overflow-scroll bg-gradient-to-bl p-2 lg:p-5 from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
    <div className="flex flex-col justify-center items-center mx-auto mx-w-7xl px-6 lg:px-8 ">

    <div className="mx-auto max-w-2xl sm:text-center">
      <h2 className="text-base font-semibold leading-7 text-indigo-600 ">Your Interactive Document Companion</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-grey-900 sm:text-4xl">Transform Your PDFs into Interactive Conversations</p>

      <p className="mt-6 text-lg leading-8 text-grey-600">
        Introducing {" "}
        <span className="font-bold text-indigo-600">chat with PDF</span>
        <br />
        <br />
        Upload your document, and our chatbot will answer questions, summarize content, and answer all the Qs. ideal for everyone, 
        <span className=" text-indigo-600">Chat with PDF</span> {" "}
        turns static documents into {" "}
        <span className="font-bold ">dynamic conversations </span>,
        enhancing productivity 10x fold efforlessly
      </p>
      <div>
      <Button asChild className="mt-10">
        <Link href="/dashboard"> Get Started</Link>
       </Button>
       </div>
       <div className="relative overflow-hidden pt-16" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image alt="app screenshot" src="https://i.imgur.com/VciRSTI.jpeg" width={700} height={700} className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"/>
          <div aria-hidden = "true" className="relative">
            <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]">
            
            </div>
          </div>

        </div>

       </div>
    </div>

    </div>

<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:mt-20 sm:grid-cols-2 lg:mx-0 
lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 "> 
  {features.map((feature) => (
    <div className="relative pl-9">
      <dt className="inline font-semibold text-gray-900  ">
    <feature.icon className="absolute left-1 h-6 w-6 text-indigo-600" aria-hidden="true" />
    <h1>{feature.name}</h1>
      </dt>
      <dd>{feature.description}</dd>
    </div>
  ))}
</dl>
</div>

      </div>
    </main>
  );
}
