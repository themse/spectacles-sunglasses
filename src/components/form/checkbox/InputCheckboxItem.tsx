import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';
import { Checkbox } from './Checkbox';

/*
 * Use this component inside <form></form>
 * in case using checkbox independently utilize InputCheckbox instead
 * example:
 * 
import { FC, ChangeEvent, useState } from 'react';
import { InputCheckboxItem } from 'components/form/InputCheckboxItem';

const App = () => {
    const [pizza, setPizza] = useState<{ toppings: string[] }>();

    const onChange = (event: ChangeEvent<HTMLFormElement>) => {
        const $form = event.currentTarget;
        const formData = new FormData($form);

        const updatedData = {
            toppings: formData.getAll("toppings") as string[],
        }

        setPizza(updatedData);
    }

    return (
        <div>
            <form onChange={onChange}>
                <p>
                    <label>
                        <input
                        defaultChecked={pizza.toppings.includes("pepperoni")}
                        type="checkbox"
                        name="toppings"
                        value="pepperoni"
                        />{" "}
                        Pepperoni
                    </label>
                    <br />
                    <label>
                        <input
                        defaultChecked={pizza.toppings.includes("bell-peppers")}
                        type="checkbox"
                        name="toppings"
                        value="bell-peppers"
                        />{" "}
                        Bell Peppers
                    </label>
                    <br />
                    <label>
                        <input
                        type="checkbox"
                        name="toppings"
                        value="olives"
                        defaultChecked={pizza.toppings.includes("olives")}
                        />{" "}
                        Olives
                    </label>
                </p>
            </form>
        </div>
    )
}
 * 
 */

type Props = {
  name: string;
  value: string;
  isIconChecked: boolean;

  label?: string;
  defaultChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputCheckboxItem: FC<Props> = ({
  name,
  label,

  value,
  defaultChecked,
  isIconChecked,
  onChange,
}) => {
  return (
    <InputCheckboxLabel>
      <StyledInputCheckbox
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <Checkbox isChecked={isIconChecked ?? defaultChecked} />
      {label && <p>{label}</p>}
    </InputCheckboxLabel>
  );
};

const InputCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
  cursor: pointer;
  text-transform: capitalize;
`;

const StyledInputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;
