'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Trophy, TrendingUp, BookOpen, Target } from 'lucide-react'
import Link from 'next/link'

interface QuizAttempt {
  id: string
  topic: string
  score_percentage: number
  correct_answers: number
  total_questions: number
  completed_at: string
}

interface Stats {
  totalAttempts: number
  averageScore: number
  totalCorrect: number
  totalQuestions: number
  topicsCompleted: string[]
  recentAttempts: QuizAttempt[]
}

export default function StatsPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState<string>('')

  useEffect(() => {
    const fetchStats = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        setLoading(false)
        return
      }

      setUserEmail(user.email || '')

      // Fetch quiz attempts
      const { data: attempts } = await supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false })

      if (attempts && attempts.length > 0) {
        const totalAttempts = attempts.length
        const averageScore = Math.round(
          attempts.reduce((sum, a) => sum + (a.score_percentage || 0), 0) / totalAttempts
        )
        const totalCorrect = attempts.reduce((sum, a) => sum + (a.correct_answers || 0), 0)
        const totalQuestions = attempts.reduce((sum, a) => sum + (a.total_questions || 0), 0)
        const topicsCompleted = Array.from(new Set(attempts.map(a => a.topic)))

        setStats({
          totalAttempts,
          averageScore,
          totalCorrect,
          totalQuestions,
          topicsCompleted,
          recentAttempts: attempts.slice(0, 5),
        })
      } else {
        setStats({
          totalAttempts: 0,
          averageScore: 0,
          totalCorrect: 0,
          totalQuestions: 0,
          topicsCompleted: [],
          recentAttempts: [],
        })
      }

      setLoading(false)
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-muted-foreground">Đang tải thống kê...</p>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-muted-foreground">Không thể tải dữ liệu</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Thống kê học tập</h1>
          <p className="text-muted-foreground">{userEmail}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: Trophy, label: 'Tổng bài', value: stats.totalAttempts, color: 'bg-blue-50' },
            { icon: TrendingUp, label: 'Điểm trung bình', value: `${stats.averageScore}%`, color: 'bg-green-50' },
            { icon: BookOpen, label: 'Chủ đề hoàn thành', value: stats.topicsCompleted.length, color: 'bg-purple-50' },
            { icon: Target, label: 'Câu đúng', value: `${stats.totalCorrect}/${stats.totalQuestions}`, color: 'bg-orange-50' },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Card key={idx} className={stat.color}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <Icon className="w-8 h-8 text-muted-foreground opacity-50" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Topics */}
        {stats.topicsCompleted.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Các chủ đề đã hoàn thành</CardTitle>
              <CardDescription>Những chủ đề bạn đã học</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {stats.topicsCompleted.map((topic) => (
                  <div
                    key={topic}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Attempts */}
        {stats.recentAttempts.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Các bài kiểm tra gần đây</CardTitle>
              <CardDescription>5 bài kiểm tra mới nhất của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentAttempts.map((attempt) => (
                  <div key={attempt.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{attempt.topic}</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(attempt.completed_at).toLocaleDateString('vi-VN')}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {attempt.score_percentage}%
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {attempt.correct_answers}/{attempt.total_questions} câu
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {stats.totalAttempts === 0 && (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground mb-6">Chưa có bài kiểm tra nào. Hãy bắt đầu học thôi!</p>
              <Link href="/dashboard">
                <Button>Bắt đầu học</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Back Button */}
        <div className="flex gap-4">
          <Link href="/dashboard">
            <Button variant="outline">Quay lại học tập</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
