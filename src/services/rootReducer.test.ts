import { expect, test, describe } from '@jest/globals';
import { rootReducer } from '@store';
import {
  userInitialState,
  orderInitialState,
  ingredientsInitialState,
  feedInitialState,
  constructorInitialState
} from '@slices';

describe('Тест корневого редьюсера', () => {
  const initialState = {
    user: { ...userInitialState },
    feed: { ...feedInitialState },
    order: { ...orderInitialState },
    ingredients: { ...ingredientsInitialState },
    constructorbg: { ...constructorInitialState }
  };
  test('Тест инициализации корневого редьюсера', () => {
    const action = { type: 'UNKNOW_ACTION' };
    const newState = rootReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });
});
