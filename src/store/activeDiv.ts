import { atom } from 'jotai';

export const activeDiv = atom({
  isVisible_profile: true,
  isVisible_projects: false,
  isVisible_contact: false
});

export default activeDiv;
