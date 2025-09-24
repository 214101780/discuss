'use client'

import React, { startTransition, useActionState } from 'react'
import { Popover, PopoverTrigger, PopoverContent, Button, Input, Textarea } from "@heroui/react";
import * as actions from '@/actions';

export default function TopicCreateForms() {
  const [state, formAction] = useActionState(actions.createTopic, {
    errors: {}
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    startTransition(() => formAction(formData))
  }

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="secondary" variant="bordered">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className='text-lg'>Create a Topic</h3>
            <Input
              name='name'
              label="Name"
              labelPlacement='outside'
              placeholder='Input your name'
              isInvalid={!!state.errors.name}
              errorMessage={state.errors.name?.join(', ')}
            />
            <Textarea
              name='description'
              label="Description"
              labelPlacement='outside'
              placeholder='Input your description'
              isInvalid={!!state.errors.description}
              errorMessage={state.errors.description?.join(', ')}
            />
            <Button color='secondary' type='submit'>Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>

  )
}
