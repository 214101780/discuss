'use client'

import * as actions from "@/actions";
import {NavbarItem, Button, Avatar, Popover, PopoverTrigger, PopoverContent, Spinner} from "@heroui/react";
import React from "react";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const {data: session, status} = useSession()
  let authContent: React.ReactNode

  if (status === 'loading') {
    authContent = <Spinner size="sm"/>
  }else if (session?.user) {
    authContent = 
    <Popover placement="bottom">
      <PopoverTrigger>
        <Avatar size="md" src={session.user.image || 'https://i.pravatar.cc/150?u=a042581f4e29026704d'} />
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <form action={actions.signOut}>
            <Button type="submit">退出</Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  }else {
    authContent = <>
      <NavbarItem className="lg:flex">
        <form action={actions.signIn}>
          <Button type="submit" color="secondary" variant="bordered">
            Sign In
          </Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" color="secondary" variant="solid">
            Sign Up
          </Button>
        </form>
      </NavbarItem>
    </>
  }

  return authContent
}
