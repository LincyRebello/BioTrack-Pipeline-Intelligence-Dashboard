import type { Drug } from '@/data/drugs';
import pipelineData from '../../data/pipeline.json';

interface UseDrugsResult {
  drugs: Drug[];
  loading: boolean;
  error: string | null;
}

export const useDrugs = (): UseDrugsResult => {
  return { drugs: pipelineData as Drug[], loading: false, error: null };
};
