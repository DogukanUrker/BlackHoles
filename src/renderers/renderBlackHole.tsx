import { blackHoleDetailedComponent } from "../components/blackHoleDetailedComponent";
export const renderBlackHole = (data: []) => {
  return data.map((data) => {
    document.title = data.name[0];
    return blackHoleDetailedComponent(data);
  });
};
