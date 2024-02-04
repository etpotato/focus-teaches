import { Button } from '../components/button'
import { Text } from '../components/text'
import { DataContextProvider } from '@/contexts'
import data from '../data.json'
import { Header, Hero } from '@/blocks'

export default function Home() {
  return (
    <DataContextProvider value={data}>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Button tag='button'>asdf</Button>
        <Text tag='p' size='S'>Text</Text>
      </main>
    </DataContextProvider>
  )
}
