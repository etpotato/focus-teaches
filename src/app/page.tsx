import { Button } from '../components/button'
import { Text } from '../components/text'
import { DataContextProvider } from '@/contexts'
import data from '../data.json'
import { Header, Hero } from '@/blocks'
import { Form } from '@/blocks/form'

export default function Home() {
  return (
    <DataContextProvider value={data}>
      <Header />
      <main>
        <Hero />
        <Form />
        <Button tag='button'>asdf</Button>
        <Text tag='p' size='S'>Text</Text>
      </main>
    </DataContextProvider>
  )
}
