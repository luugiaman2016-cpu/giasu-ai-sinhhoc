import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-background">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Đăng ký thành công</CardTitle>
            <CardDescription>
              Vui lòng kiểm tra email để xác nhận tài khoản
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-6">
              Chúng tôi đã gửi một email xác nhận đến địa chỉ email của bạn. Vui lòng nhấp vào liên kết trong email để kích hoạt tài khoản.
            </p>
            <Link href="/auth/login">
              <Button className="w-full">Quay lại đăng nhập</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
