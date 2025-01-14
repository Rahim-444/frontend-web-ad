import Form from '@/components/ui/create-form';
import { GetAllChannels } from '@/lib/data';
 
export default async function Page() {
  const channels = GetAllChannels();
  //console.log(channels);
  return (
    <main className='mx-auto'>
      <Form channels={channels} />
    </main>
  );
}

