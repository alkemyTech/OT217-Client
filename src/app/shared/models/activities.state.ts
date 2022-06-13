import { Activities } from "src/app/features/models";

export interface ACtivitiesState {
  loading: boolean;
  activities: ReadonlyArray<Activities>;
}
