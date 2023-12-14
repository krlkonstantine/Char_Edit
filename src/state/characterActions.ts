// characterActions.ts

import { createAction } from '@reduxjs/toolkit';
import { CharacterType } from './types';

export const loadCharacterFulfilled = createAction<{ data: CharacterType }>('char/loadCharacterFulfilled');
