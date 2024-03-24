import { Button } from '../components/button'
import { Text } from '../components/text'
import { DataContextProvider } from '@/contexts'
import data from '../data.json'
import { Header, Hero, Form, Profile, Contact } from '@/blocks'

export default function Home() {
  return (
    <DataContextProvider value={data}>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Form />
        <Contact />
      </main>
    </DataContextProvider>
  )
}
