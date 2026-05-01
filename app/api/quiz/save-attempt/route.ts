import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const {
      topic,
      totalQuestions,
      correctAnswers,
      scorePercentage,
      durationSeconds,
      answers,
    } = body

    // Create quiz attempt
    const { data: attempt, error: attemptError } = await supabase
      .from('quiz_attempts')
      .insert({
        user_id: user.id,
        topic,
        total_questions: totalQuestions,
        correct_answers: correctAnswers,
        score_percentage: scorePercentage,
        duration_seconds: durationSeconds,
      })
      .select()
      .single()

    if (attemptError) throw attemptError

    // Save individual answers
    if (answers && Array.isArray(answers)) {
      const answersData = answers.map((answer: any) => ({
        user_id: user.id,
        quiz_attempt_id: attempt.id,
        question_id: answer.questionId,
        user_answer: answer.userAnswer,
        is_correct: answer.isCorrect,
      }))

      const { error: answersError } = await supabase
        .from('user_answers')
        .insert(answersData)

      if (answersError) throw answersError
    }

    return NextResponse.json(
      { success: true, attemptId: attempt.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving quiz attempt:', error)
    return NextResponse.json(
      { error: 'Failed to save quiz attempt' },
      { status: 500 }
    )
  }
}
