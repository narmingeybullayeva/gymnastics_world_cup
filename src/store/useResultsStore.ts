import { create } from 'zustand';
import axios from 'axios';

interface Athlete {
  name: string;
  team_code: string;
  team_name: string;
}

interface ApparatusScores {
  d: number;
  e: number;
  p: number;
  app: number;
  app_rank: number;
  aa: number;
  aa_rank: number;
  team: number;
  team_rank: number;
}

export interface Result {
  id: number;
  rank: number;
  bib: number;
  athlete: Athlete;
  total_score: number;
  apparatus_name: string;
  apparatus_code: string;
  apparatus_scores: ApparatusScores;
  status: string;
  inquiry_submitted:boolean;
}


interface ResultsState {
  results: Result[];
  fetchResults: () => Promise<void>;
}


export const useResultsStore = create<ResultsState>((set) => ({
  results: [],
  loading: false,

  fetchResults: async () => {
    try {
      const res = await axios.get<Result[]>('../../data.json'); 
      console.log(res.data)
      set({ results: res.data });
    } catch (err) {
      console.error('Loading Error:', err);
    } 
  },
}));
