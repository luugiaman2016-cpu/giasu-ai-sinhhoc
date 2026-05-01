'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Target, TrendingUp, Award } from 'lucide-react';

interface SkillProgress {
  name: string;
  completed: number;
  total: number;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface TopicProgress {
  topicName: string;
  theoryProgress: number;
  practiceProgress: number;
  skillsProgress: SkillProgress[];
}

export function ProgressDashboard() {
  const [selectedTopic, setSelectedTopic] = useState<string>('topic1');

  // Mock data - in production, fetch from API
  const topicsProgress: Record<string, TopicProgress> = {
    topic1: {
      topicName: 'Mendel Laws & Extensions',
      theoryProgress: 45,
      practiceProgress: 20,
      skillsProgress: [
        { name: 'Mendel History', completed: 8, total: 10, level: 'beginner' },
        { name: 'Monohybrid Cross', completed: 12, total: 20, level: 'beginner' },
        { name: 'Dihybrid Cross', completed: 5, total: 20, level: 'intermediate' },
        { name: 'Ratio Interpretation', completed: 3, total: 15, level: 'intermediate' },
        { name: 'Problem Solving', completed: 0, total: 25, level: 'advanced' },
      ]
    },
    topic2: {
      topicName: 'Gene Types & Inheritance',
      theoryProgress: 30,
      practiceProgress: 10,
      skillsProgress: [
        { name: 'Genotype Classification', completed: 6, total: 12, level: 'beginner' },
        { name: 'Phenotype Prediction', completed: 4, total: 10, level: 'beginner' },
        { name: 'Punnett Squares', completed: 2, total: 18, level: 'intermediate' },
        { name: 'Probability', completed: 0, total: 20, level: 'intermediate' },
        { name: 'Data Analysis', completed: 0, total: 15, level: 'advanced' },
      ]
    },
    topic3: {
      topicName: 'Sex-linked & Genetic Linkage',
      theoryProgress: 15,
      practiceProgress: 0,
      skillsProgress: [
        { name: 'Sex Chromosomes', completed: 3, total: 8, level: 'beginner' },
        { name: 'Sex-linked Inheritance', completed: 0, total: 12, level: 'intermediate' },
        { name: 'Linkage Mapping', completed: 0, total: 20, level: 'intermediate' },
        { name: 'Recombination', completed: 0, total: 15, level: 'advanced' },
      ]
    }
  };

  const current = topicsProgress[selectedTopic];
  const overallProgress = Math.round(
    (Object.values(topicsProgress).reduce((sum, t) => sum + t.theoryProgress + t.practiceProgress, 0)) /
    (3 * 200) * 100
  );

  return (
    <div className="space-y-6">
      {/* Overall Progress */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Overall Learning Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-700">Platform Completion</span>
            <span className="text-2xl font-bold text-blue-600">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-3" />
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-slate-900">90</div>
              <div className="text-xs text-slate-600">Questions Completed</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-blue-600">510</div>
              <div className="text-xs text-slate-600">Remaining</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-xs text-slate-600">Accuracy Rate</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12h</div>
              <div className="text-xs text-slate-600">Learning Time</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Per-Topic Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Progress by Topic</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(topicsProgress).map(([topicId, data]) => (
            <Card
              key={topicId}
              className={`cursor-pointer transition-all ${
                selectedTopic === topicId
                  ? 'ring-2 ring-blue-500 shadow-lg'
                  : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedTopic(topicId)}
            >
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-900 mb-3">{data.topicName}</h4>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Theory</span>
                      <span className="font-semibold">{data.theoryProgress}/100</span>
                    </div>
                    <Progress value={data.theoryProgress} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Practice</span>
                      <span className="font-semibold">{data.practiceProgress}/100</span>
                    </div>
                    <Progress value={data.practiceProgress} className="h-2" />
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-slate-600">
                    Total: {Math.round(((data.theoryProgress + data.practiceProgress) / 200) * 100)}%
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detailed Skill Progress */}
      <Card>
        <CardHeader>
          <CardTitle>{current.topicName} - Skill Breakdown</CardTitle>
          <CardDescription>Track your progress in each skill area</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {current.skillsProgress.map((skill) => (
            <div key={skill.name} className="space-y-2 pb-4 border-b last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">{skill.name}</span>
                  <Badge 
                    variant="secondary"
                    className={`text-xs ${
                      skill.level === 'beginner' ? 'bg-green-100 text-green-800' :
                      skill.level === 'intermediate' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {skill.level === 'beginner' ? 'Beginner' :
                     skill.level === 'intermediate' ? 'Intermediate' :
                     'Advanced'}
                  </Badge>
                </div>
                <span className="font-bold text-slate-900">
                  {skill.completed}/{skill.total}
                </span>
              </div>
              <Progress 
                value={Math.round((skill.completed / skill.total) * 100)} 
                className="h-2" 
              />
              <div className="text-xs text-slate-600">
                {Math.round((skill.completed / skill.total) * 100)}% complete
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-600" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Getting Started', desc: 'Complete your first 10 questions', unlocked: true },
              { name: 'Solid Foundation', desc: 'Complete 50 theory questions', unlocked: true },
              { name: 'Practice Makes Perfect', desc: 'Complete 25 practice problems', unlocked: false },
              { name: 'Intermediate Master', desc: 'Achieve 80%+ on all medium level questions', unlocked: false },
              { name: 'Advanced Expert', desc: 'Complete all hard level questions', unlocked: false },
              { name: 'Perfect Score', desc: 'Get 100% on any topic', unlocked: false },
            ].map((achievement, i) => (
              <Card key={i} className={achievement.unlocked ? 'border-yellow-200 bg-yellow-50' : 'bg-slate-50'}>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className={`text-2xl ${achievement.unlocked ? '' : 'opacity-50'}`}>
                      {achievement.unlocked ? '🏆' : '🔒'}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">{achievement.name}</h4>
                      <p className="text-sm text-slate-600 mt-1">{achievement.desc}</p>
                      {achievement.unlocked && (
                        <div className="text-xs text-yellow-700 mt-2 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Unlocked
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-slate-600 mb-2">Average Session Length</div>
              <div className="text-3xl font-bold text-slate-900">24 min</div>
              <p className="text-xs text-slate-600 mt-1">+3 min from last week</p>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-2">Current Streak</div>
              <div className="text-3xl font-bold text-slate-900">5 days</div>
              <p className="text-xs text-slate-600 mt-1">Keep it up!</p>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-2">Best Category</div>
              <div className="text-3xl font-bold text-green-600">Monohybrid</div>
              <p className="text-xs text-slate-600 mt-1">92% accuracy</p>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-2">Total Sessions</div>
              <div className="text-3xl font-bold text-slate-900">18</div>
              <p className="text-xs text-slate-600 mt-1">Since registration</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
