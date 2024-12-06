import User from '@/app/types/User';
import Diploma from '@/app/types/Diploma';
import Job from '@/app/types/Job';
import { UserComp } from '@/components/User';
import PocketBase from 'pocketbase';
import { DiplomaComp } from '@/components/Diploma';
import { JobComp } from '@/components/Job';
import { PrintComp } from '@/components/Print';


export default async function Page() {
  const pb = new PocketBase(process.env.API_URL ?? "http://localhost:8090");

  const diplomas = await pb.collection('diplomas').getFullList<Diploma>({
    sort: '-end',
  });
  const jobs = await pb.collection('jobs').getFullList<Job>({
    sort: '-end',
  });
  const user = await pb.collection('users').getFirstListItem<User>('email="kevin.ganthy@gmail.com"');


  return (
    <div className='flex gap-8 p-8 mx-auto print:flex-col print:p-4'>
      <div className='flex flex-col gap-8 w-full max-w-md print:flex-row print:max-w-full'>
        <UserComp user={user} />

        <aside className='flex flex-col w-full gap-5 bg-white p-5 rounded print:w-max print:ms-auto print:p-0 print:my-auto'>
          {diplomas.map((diploma) => (
            <DiplomaComp key={diploma.id} diploma={diploma} />
          ))}
        </aside>

        <div className="bg-white p-5 rounded w-full print:hidden" dangerouslySetInnerHTML={{__html:user.description}}></div>

        <PrintComp />
      </div>

      <main className='flex flex-col gap-5 bg-white p-5 rounded w-full print:p-0'>
        {jobs.map((job) => (
          <JobComp key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
}