export const TOGGLE = 'TOGGLE';
interface ToggleClick {
  type: typeof TOGGLE;
}


export type ToggleActionTypes = ToggleClick;

export const toggleClick = () => ({
  type: TOGGLE,
});

