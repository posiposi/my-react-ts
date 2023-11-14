import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const StateForm = () => {
  const [form, setForm] = useState({
    name: '山田 太郎',
    age: 18,
  })

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const show = () => {
    alert(`こんにちは、${form.name} (${form.age}歳さん!)`)
  }

  return (
    <FormControl width="50%">
      <div>
        <FormLabel htmlFor="name">名前:</FormLabel>
        <Input
          color="green"
          id="name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
      </div>
      <div>
        <FormLabel htmlFor="age">年齢:</FormLabel>
        <Input
          color="green"
          id="age"
          name="age"
          type="number"
          onChange={handleForm}
          value={form.age}
        />
      </div>
      <div>
        <Button type="button" onClick={show} mt="2">
          送信
        </Button>
      </div>
      <p>
        こんにちは、{form.name} ({form.age})さん!
      </p>
    </FormControl>
  )
}

export default StateForm
