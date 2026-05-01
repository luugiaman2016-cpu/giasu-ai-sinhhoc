'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { LogOut, User as UserIcon, BarChart3 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface UserHeaderProps {
  userEmail?: string
}

export function UserHeader({ userEmail }: UserHeaderProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    const supabase = createClient()
    setIsLoading(true)
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <div className="flex items-center justify-between py-4 px-6 border-b bg-background sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Giáo Dục Sinh Học</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2">
            <UserIcon className="w-4 h-4" />
            <span className="hidden sm:inline text-sm truncate max-w-[150px]">
              {userEmail?.split('@')[0] || 'Người dùng'}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
            {userEmail}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/stats" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Thống kê
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} disabled={isLoading}>
            <LogOut className="w-4 h-4 mr-2" />
            {isLoading ? 'Đang đăng xuất...' : 'Đăng xuất'}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
