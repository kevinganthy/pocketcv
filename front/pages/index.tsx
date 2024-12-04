import { Diploma, Job, User } from '@/app/types';
import PocketBase from 'pocketbase';

export async function getStaticProps() {
  const pb = new PocketBase(process.env.API_URL ?? "http://localhost:8090");

  const diplomas = await pb.collection('diplomas').getFullList<Diploma>({
    sort: '-end',
  });
  const jobs = await pb.collection('jobs').getFullList<Job>({
    sort: '-end',
  });
  const user = await pb.collection('users').getFirstListItem<User>('email="kevin.ganthy@gmail.com"');

  return { props: { 
    diplomas,
    jobs,
    user
  }};
}

export default function Page({ diplomas, jobs, user }: { diplomas: Diploma[], jobs: Job[], user: User }) {
  return (
    <>
      <ul>
        {diplomas.map((diploma) => (
          <li key={diploma.id}>{diploma.title}</li>
        ))}
      </ul>

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>

      <pre>{JSON.stringify(user, null, 4)}</pre>
    </>
  );
}