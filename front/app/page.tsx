import User from '@/app/types/User';
import Diploma from '@/app/types/Diploma';
import Job from '@/app/types/Job';
import { UserComp } from '@/components/User';
import PocketBase from 'pocketbase';
import { DiplomaComp } from '@/components/Diploma';
import { JobComp } from '@/components/Job';
import { PrintComp } from '@/components/Print';
import { QRCodeComp } from '@/components/Qrcode';
import Image from 'next/image';
import type { Metadata } from 'next'
 

async function getData () {
  const pb = new PocketBase(process.env.API_URL ?? "http://localhost:8090");

  const diplomas = await pb.collection('diplomas').getFullList<Diploma>({
    sort: '-start',
  });
  const jobs = await pb.collection('jobs').getFullList<Job>({
    sort: '-start',
  });
  const user = await pb.collection('users').getFirstListItem<User>('email="kevin.ganthy@gmail.com"');

  return { diplomas, jobs, user };
}


export async function generateMetadata(): Promise<Metadata> {
  const pb = new PocketBase(process.env.API_URL ?? "http://localhost:8090");
  const user = await pb.collection('users').getFirstListItem<User>('email="kevin.ganthy@gmail.com"');
 
  return {
    title: `CV de ${user.firstname} ${user.lastname}`,
    description: `${user.title} - ${user.subtitle}`,
    openGraph: {
      images: ['kevin.webp'],
    },
  }
}


export default async function Home() {
  const { diplomas, jobs, user } = await getData();

  return (
    <div className='flex gap-4 lg:gap-8 p-4 lg:p-8 mx-auto print:flex-col print:p-4 flex-col lg:flex-row'>
      <div className='flex flex-col gap-4 lg:gap-8 w-full print:flex-row print:max-w-full max-w-full lg:max-w-sm'>
        <UserComp user={user} />

        <QRCodeComp />

        <aside className='flex flex-col w-full gap-5 bg-white p-5 rounded print:w-max print:ms-auto print:p-0 print:mt-auto print:mb-4'>
          {diplomas.map((diploma) => (
            <DiplomaComp key={diploma.id} diploma={diploma} />
          ))}
        </aside>

        <div className="bg-white p-5 rounded w-full print:hidden" dangerouslySetInnerHTML={{__html:user.description}}></div>

        <div className='flex print:hidden justify-between'>
          <PrintComp />

          <a href="https://github.com/kevinganthy/pocketcv" 
              className='text-white flex gap-2 items-center hover:underline'
              target='_blank'>
            Repository GitHub
            <Image src="_blank.svg" alt="" width={12} height={12} />          
          </a>
        </div>
      </div>

      <main className='flex flex-col gap-5 bg-white p-5 rounded w-full print:p-0 print:pt-8 xl:max-w-page'>
        {jobs.map((job) => (
          <JobComp key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
}