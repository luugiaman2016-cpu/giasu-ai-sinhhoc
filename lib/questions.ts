import { Topic } from './types';
import { topic1 } from './data/topic1';
import { topic2 } from './data/topic2';
import { topic3 } from './data/topic3';
import { topic4 } from './data/topic4';
import { topic5 } from './data/topic5';
import allQuestionsJson from './data/all_questions.json';

// Append automatically generated questions to Topic 5 (Tổng hợp quy luật di truyền)
const extendedTopic5 = {
  ...topic5,
  part2: [...topic5.part2, ...(allQuestionsJson as any[])]
};

export const topicData: Topic[] = [topic1, topic2, topic3, topic4, extendedTopic5];
