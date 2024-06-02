import { expect, test, describe } from '@jest/globals';
import constructorReducer, {
  addIngredient,
  removeIngredient,
  moveIngredientDown,
  moveIngredientUp,
  constructorInitialState
} from './constructorSlice';
import type { constructorState } from './constructorSlice';
import { nanoid } from '@reduxjs/toolkit';
import { TConstructorIngredient } from '@utils-types';

jest.mock('@reduxjs/toolkit', () => ({
  ...jest.requireActual('@reduxjs/toolkit'),
  nanoid: jest.fn(() => 'mockedID')
}));

describe('Тест экшенов конструктора', () => {
  const startState: constructorState = JSON.parse(
    JSON.stringify(constructorInitialState)
  );
  startState.constructorItems = {
    bun: {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      id: '0'
    },
    ingredients: [
      {
        _id: '643d69a5c3f7b9001cfa0942',
        name: 'Соус Spicy-X',
        type: 'sauce',
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
        id: '1'
      },
      {
        _id: '643d69a5c3f7b9001cfa0941',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
        id: '2'
      }
    ]
  };

  test('Тест экшена добавления ингредиента', () => {
    const ingredient = {
      _id: '643d69a5c3f7b9001cfa093e',
      name: 'Филе Люминесцентного тетраодонтимформа',
      type: 'main',
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: 'https://code.s3.yandex.net/react/code/meat-03.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png'
    };
    const endState: constructorState = JSON.parse(JSON.stringify(startState));
    endState.constructorItems.ingredients.push({
      ...ingredient,
      id: 'mockedID'
    });

    const newState = constructorReducer(startState, addIngredient(ingredient));

    expect(nanoid).toHaveBeenCalled();
    expect(newState).toEqual(endState);
  });

  test('Тест экшена удаления ингредиента', () => {
    const ingredientId = '1';
    const endState: constructorState = JSON.parse(JSON.stringify(startState));
    endState.constructorItems.ingredients =
      endState.constructorItems.ingredients.filter(
        (ingredient: TConstructorIngredient) => ingredient.id != ingredientId
      );

    const newState = constructorReducer(
      startState,
      removeIngredient(ingredientId)
    );

    expect(newState).toEqual(endState);
  });

  describe('Тест экшенов изменения порядка ингредиентов', () => {
    test('Тест экшена перемещения ингредиента вверх', () => {
      const ingredientId = 1;
      const endState: constructorState = JSON.parse(JSON.stringify(startState));
      [
        endState.constructorItems.ingredients[ingredientId],
        endState.constructorItems.ingredients[ingredientId - 1]
      ] = [
        endState.constructorItems.ingredients[ingredientId - 1],
        endState.constructorItems.ingredients[ingredientId]
      ];

      const newState = constructorReducer(
        startState,
        moveIngredientUp(ingredientId)
      );

      expect(newState).toEqual(endState);
    });
    test('Тест экшена перемещения ингредиента вниз', () => {
      const ingredientId = 0;
      const endState: constructorState = JSON.parse(JSON.stringify(startState));
      [
        endState.constructorItems.ingredients[ingredientId],
        endState.constructorItems.ingredients[ingredientId + 1]
      ] = [
        endState.constructorItems.ingredients[ingredientId + 1],
        endState.constructorItems.ingredients[ingredientId]
      ];

      const newState = constructorReducer(
        startState,
        moveIngredientDown(ingredientId)
      );

      expect(newState).toEqual(endState);
    });
  });
});
