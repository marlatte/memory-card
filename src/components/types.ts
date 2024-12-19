type CastMember = {
  person: {
    id: number;
    name: string;
    image: {
      medium: string;
    };
  };
  character: {
    id: number;
    name: string;
    image: {
      medium: string;
    } | null;
  };
};

type Character = {
  name: string;
  id: number;
  img: string;
};

type Level = 'easy' | 'medium' | 'hard';
