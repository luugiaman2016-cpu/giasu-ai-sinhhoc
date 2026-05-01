import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-background">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Lỗi xác thực</CardTitle>
            <CardDescription>
              Có lỗi xảy ra trong quá trình xác thực
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-6">
              Liên kết xác thực có thể đã hết hạn hoặc không hợp lệ. Vui lòng thử đăng ký hoặc đăng nhập lại.
            </p>
            <div className="flex gap-3">
              <Link href="/auth/login" className="flex-1">
                <Button variant="default" className="w-full">Đăng nhập</Button>
              </Link>
              <Link href="/auth/sign-up" className="flex-1">
                <Button variant="outline" className="w-full">Đăng ký</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
