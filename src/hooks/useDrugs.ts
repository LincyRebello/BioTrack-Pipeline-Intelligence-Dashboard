import { useState, useEffect } from 'react';
import type { Drug } from '@/data/drugs';

interface UseDrugsResult {
  drugs: Drug[];
  loading: boolean;
  error: string | null;
}

export const useDrugs = (): UseDrugsResult => {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/pipeline.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Drug[]) => {
        setDrugs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { drugs, loading, error };
};
