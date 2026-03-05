import { useMemo } from 'react';
import type { Drug } from '@/data/drugs';
import pipelineData from '../../data/pipeline.json';

interface UseDrugsResult {
  drugs: Drug[];
  loading: boolean;
  error: string | null;
}

export const useDrugs = (): UseDrugsResult => {
  const drugs = useMemo(() => pipelineData as Drug[], []);
  return { drugs, loading: false, error: null };
};
