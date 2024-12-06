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
    <div className='flex flex-col gap-8'>
      <UserComp user={user} />

      <aside className='flex flex-col gap-4 bg-white p-4 rounded w-max'>
        {diplomas.map((diploma) => (
          <DiplomaComp key={diploma.id} diploma={diploma} />
        ))}
      </aside>

      <div dangerouslySetInnerHTML={{__html:user.description}}></div>

      <PrintComp />

      <main>
        {jobs.map((job) => (
          <JobComp key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
}