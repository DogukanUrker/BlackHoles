import { blackHoleComponent } from "../components/blackHoleComponent";

export const renderBlackHoles = (data: [], input: string) => {
  return data.map((blackhole) => {
    if (blackhole.name[0].toLowerCase().includes(input.toLowerCase())) {
      return blackHoleComponent(blackhole);
    }
  });
};
