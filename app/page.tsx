import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If user is logged in, redirect to dashboard
  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 p-6">
      <div className="w-full max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Giáo Dục Sinh Học
          </h1>
          <p className="text-xl text-muted-foreground">
            Hệ thống học tập trực tuyến sinh học toàn diện
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg border border-border/50 bg-card hover:bg-card/80 transition">
            <h3 className="text-lg font-semibold mb-2">600+ Câu hỏi</h3>
            <p className="text-sm text-muted-foreground">
              Trắc nghiệm toàn diện về di truyền học, tiến hóa, và sinh học tế bào
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border/50 bg-card hover:bg-card/80 transition">
            <h3 className="text-lg font-semibold mb-2">Theo dõi tiến độ</h3>
            <p className="text-sm text-muted-foreground">
              Xem thống kê điểm số và tiến độ học tập của bạn
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <Link href="/auth/login" className="block">
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 rounded-lg transition">
              Đăng nhập
            </button>
          </Link>
          <Link href="/auth/sign-up" className="block">
            <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold py-3 rounded-lg transition">
              Đăng ký
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
