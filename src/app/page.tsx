import { Button } from '../components/button'
import { Text } from '../components/text'
import { DataContextProvider } from '@/contexts'
import data from '../data.json'
import { Header, Hero } from '@/blocks'
import { Form } from '@/blocks/form'
import { Features } from '@/blocks/features'
import { Profile } from '@/blocks/profile'
import { Location } from '@/blocks/location'

export default function Home() {
  return (
    <DataContextProvider value={data}>
      <Header />
      <main>
        <Hero />
        <Form />
        <Button tag='button'>asdf</Button>
        <Text tag='p' size='S'>Text</Text>
        <Features/>
        <Profile />
        <Location />
      </main>
    </DataContextProvider>
  )
}
