'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  skillTag: string;
}

interface QuizState {
  currentQuestion: number;
  selectedAnswer: number | null;
  answered: boolean;
  score: number;
  totalQuestions: number;
  answers: Array<{
    questionId: string;
    selected: number;
    correct: number;
    isCorrect: boolean;
    explanation: string;
  }>;
}

export function QuizComponent({ 
  questions, 
  topic,
  type = 'practice'
}: { 
  questions: QuizQuestion[];
  topic: string;
  type?: 'theory' | 'practice';
}) {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    selectedAnswer: null,
    answered: false,
    score: 0,
    totalQuestions: questions.length,
    answers: []
  });

  const handleSelectAnswer = (index: number) => {
    if (state.answered) return;
    setState(prev => ({ ...prev, selectedAnswer: index }));
  };

  const handleSubmitAnswer = () => {
    const current = questions[state.currentQuestion];
    const isCorrect = state.selectedAnswer === current.correctAnswer;

    setState(prev => ({
      ...prev,
      answered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [
        ...prev.answers,
        {
          questionId: current.id,
          selected: state.selectedAnswer!,
          correct: current.correctAnswer,
          isCorrect,
          explanation: current.explanation
        }
      ]
    }));
  };

  const handleNext = () => {
    if (state.currentQuestion < questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedAnswer: null,
        answered: false
      }));
    }
  };

  const handleRestart = () => {
    setState({
      currentQuestion: 0,
      selectedAnswer: null,
      answered: false,
      score: 0,
      totalQuestions: questions.length,
      answers: []
    });
  };

  // Quiz Results
  if (state.currentQuestion >= questions.length) {
    const percentage = Math.round((state.score / state.totalQuestions) * 100);
    const passing = percentage >= 70;

    return (
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
          <CardDescription>Review your performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Score Display */}
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${
              passing ? 'bg-green-100' : 'bg-orange-100'
            } mb-4`}>
              <div className="text-center">
                <div className={`text-5xl font-bold ${passing ? 'text-green-600' : 'text-orange-600'}`}>
                  {percentage}%
                </div>
                <div className="text-sm text-slate-600">Score</div>
              </div>
            </div>
            <h3 className={`text-2xl font-bold ${passing ? 'text-green-600' : 'text-orange-600'}`}>
              {passing ? '🎉 Great Job!' : '📚 Keep Practicing!'}
            </h3>
            <p className="text-slate-600 mt-2">
              You got {state.score} out of {state.totalQuestions} questions correct
            </p>
          </div>

          {/* Performance Breakdown */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-green-50">
              <CardContent className="pt-4">
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{state.score}</div>
                  <div className="text-sm text-green-700">Correct</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-red-50">
              <CardContent className="pt-4">
                <div className="text-center">
                  <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">{state.totalQuestions - state.score}</div>
                  <div className="text-sm text-red-700">Incorrect</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50">
              <CardContent className="pt-4">
                <div className="text-center">
                  <AlertCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{state.totalQuestions}</div>
                  <div className="text-sm text-blue-700">Total</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button onClick={handleRestart} variant="outline" className="flex-1 h-12">
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button className="flex-1 h-12">
              <ArrowRight className="w-4 h-4 mr-2" />
              Back to Topic
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Quiz Question
  const current = questions[state.currentQuestion];
  const isAnswered = state.answered;
  const isCorrect = state.selectedAnswer === current.correctAnswer;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-semibold">Question {state.currentQuestion + 1} of {state.totalQuestions}</span>
          <span className="text-slate-600">{Math.round((state.currentQuestion / state.totalQuestions) * 100)}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((state.currentQuestion + 1) / state.totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg">{current.question}</CardTitle>
            <Badge variant="secondary">{current.skillTag}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Options */}
          <div className="space-y-3">
            {current.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  index === state.selectedAnswer
                    ? isAnswered
                      ? isCorrect
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-blue-500 bg-blue-50'
                    : isAnswered && index === current.correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : 'border-slate-200 hover:border-slate-300'
                } disabled:cursor-not-allowed`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    index === state.selectedAnswer
                      ? isAnswered
                        ? isCorrect
                          ? 'border-green-600 bg-green-600 text-white'
                          : 'border-red-600 bg-red-600 text-white'
                        : 'border-blue-600 bg-blue-600 text-white'
                      : isAnswered && index === current.correctAnswer
                      ? 'border-green-600 bg-green-600 text-white'
                      : 'border-slate-300'
                  }`}>
                    {index === state.selectedAnswer && isAnswered && (
                      isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />
                    )}
                    {index === current.correctAnswer && isAnswered && index !== state.selectedAnswer && (
                      <CheckCircle2 className="w-4 h-4" />
                    )}
                  </div>
                  <span className="font-medium text-slate-900">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <Card className={isCorrect ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}>
              <CardContent className="pt-4">
                <div className="flex gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h4 className={`font-semibold ${isCorrect ? 'text-green-900' : 'text-blue-900'}`}>
                      {isCorrect ? 'Correct!' : 'Explanation'}
                    </h4>
                    <p className={`text-sm mt-1 ${isCorrect ? 'text-green-800' : 'text-blue-800'}`}>
                      {current.explanation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Score Counter */}
          <div className="pt-4 border-t">
            <p className="text-sm text-slate-600">
              Score: <span className="font-bold text-slate-900">{state.score}/{state.currentQuestion}</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        {!isAnswered ? (
          <Button 
            onClick={handleSubmitAnswer} 
            disabled={state.selectedAnswer === null}
            className="flex-1 h-12"
          >
            Submit Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNext}
            className="flex-1 h-12"
          >
            {state.currentQuestion === state.totalQuestions - 1 ? 'View Results' : 'Next Question'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
