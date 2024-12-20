import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button"

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-5">
        <Textarea placeholder="Type your message here." id="message" rows={10} />
        <Button variant="default">翻譯</Button>
        <Card>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
